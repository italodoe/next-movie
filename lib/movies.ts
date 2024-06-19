import { env } from "./env";

type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

const tmdbFetch = async (path: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${env("TMDB_TOKEN")}`,
    },
  };
  const response = await fetch(`https://api.themoviedb.org/3/${path}`, options);
  return await response.json();
};

export const getMoviesPopular = async () => {
  const { results: popular } = await tmdbFetch("movie/popular?language=en-US&page=1");
  return popular as Movie[];
};
