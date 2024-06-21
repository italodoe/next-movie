import { env } from "./env";

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string | Date;
  release_date_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type movieParams = {
  query: string;
};

export type serverParams = {
  searchParams: movieParams;
};

const tmdbFetch = async (path: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${env("TMDB_TOKEN")}`,
    },
    cache: "no-store"
  };
  const response = await fetch(`https://api.themoviedb.org/3/${path}`, options);
  return await response.json();
};

export const getMoviesPopular = async () => {
  const { results: popular } = await tmdbFetch(
    "movie/popular?language=en-US&page=1"
  );
  const movies = popular.map((result: Movie) => ({
    ...result,
    release_date: new Date(result.release_date),
  }));
  return movies as Movie[];
};

export const searchMovies = async (query: string) => {
  const { results: popular } = await tmdbFetch(`search/movie?query=${query}`);
  const movies = popular.map((result: Movie) => ({
    ...result,
    release_date: new Date(result.release_date),
  }));
  return movies as Movie[];
};
