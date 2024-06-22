import CardMovie from "@/components/CardMovie";
import { actionGetPopular, actionSearchMovies } from "./actions/movies";
import MovieList from "@/components/MovieList";
import { FC } from "react";
import { serverParams } from "@/lib/movies";
import PaginationComponent from "@/components/PaginationComponent";

const Home: FC<serverParams> = async ({ searchParams }: serverParams) => {
  let movies = [];
  const { query, page } = searchParams;

  if (query) {
    movies = await actionSearchMovies(query);
  } else movies = await actionGetPopular();

  return (
    <div className="w-full h-hull pb-10">
      <h1 className="text-center text-3xl font-semibold">Hey movies</h1>
      <div className="md:grid md:grid-cols-4 gap-4 pt-4 -scroll-mb-10">
        {<MovieList movies={movies}></MovieList>}
      </div>
      <div className="flex flex-col items-center py-10 text-zinc-100 w-full m-auto">
        <PaginationComponent></PaginationComponent>
      </div>
    </div>
  );
};

export default Home;
