import CardMovie from "@/components/CardMovie";
import { actionGetPopular, actionSearchMovies } from "./actions/movies";
import MovieList from "@/components/MovieList";
import { FC } from "react";
import { serverParams } from "@/lib/movies";

const Home: FC<serverParams> = async ({ searchParams }: serverParams) => {
  let movies = [];
  const { query } = searchParams;

  if (query) {
    movies = await actionSearchMovies(query);
  } else movies = await actionGetPopular();

  return (
    <div className="w-full h-hull">
      <h1 className="text-center text-3xl font-semibold">Hey movies</h1>
      <div className="md:grid md:grid-cols-4 gap-4 pt-4 -scroll-mb-10">
        {<MovieList movies={movies}></MovieList>}
      </div>
    </div>
  );
};

export default Home;
