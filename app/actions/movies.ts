"use server";

import {
  getMoviesPopular,
  getSingleMovie,
  searchMovies,
  serverParams,
} from "@/lib/movies";
// import { revalidatePath } from "next/cache";

export async function actionGetPopular() {
  const popular = await getMoviesPopular();
  return popular;
}

export async function actionSearchMovies(query: string) {
  const movies = await searchMovies(query);
  return movies;
}

export async function actionSingleMovie(movieId: number) {
  const movie = await getSingleMovie(movieId);
  return movie;
}
