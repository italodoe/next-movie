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
  page: number;
};

export type serverParams = {
  searchParams: movieParams;
};

export type SingleMovie = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
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
    cache: "no-cache",
  };
  const response = await fetch(`https://api.themoviedb.org/3/${path}&append_to_response=videos`, options);
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

export const getSingleMovie = async (movieId: number) => {
  const result = await tmdbFetch(`movie/${movieId}`);
  return result as SingleMovie;
};

// https://api.themoviedb.org/3/movie/297762/videos?api_key=###