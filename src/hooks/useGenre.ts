import useGenres from './useGenres.ts';

const UseGenre = (id?: number) => {
  const { data: genres } = useGenres();
  return genres?.results.find(g => g.id === id);
};

export default UseGenre;
