import useData from "./useData.ts";

interface Genre {
  id: number;
  name: string;
}

const useGenre = () => useData<Genre>("/genres");

export default useGenre;
