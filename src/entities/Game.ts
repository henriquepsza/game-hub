import Platform from './Platform.ts';
import Genre from './Genre.ts';
import Publisher from './Publisher.ts';

export default interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  slug: string;
  description: string;
  description_raw: string;
  genres: Genre[];
  publishers: Publisher[];
}
