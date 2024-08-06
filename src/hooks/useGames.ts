import { useInfiniteQuery } from '@tanstack/react-query';
import APIClient, { FetchResponse } from '../services/api-client.ts';
import ms from 'ms';
import useGameQueryStore from '../store.ts';
import Game from '../entities/Game.ts';

const apiClient = new APIClient<Game>('/games');

const useGames = () => {
  const gameQuery = useGameQueryStore(state => state.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms('24h'), //24h
  });
};

export default useGames;
