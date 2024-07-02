import useData from "./useData.ts";

interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => useData<Genre>("/genres");

export default useGenre;
