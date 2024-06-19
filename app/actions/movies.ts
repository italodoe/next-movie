"use server";

import { getMoviesPopular } from "@/lib/movies";
// import { revalidatePath } from "next/cache";

export async function actionGetPopular() {
  const popular = await getMoviesPopular();
  console.log("popular..", popular);
  return popular;
}
