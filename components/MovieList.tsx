import { Movie } from "@/lib/movies";
import CardMovie from "./CardMovie";

type movieListParams = {
  movies: Movie[];
};

export default function MovieList(movieListParams: movieListParams) {
  const { movies } = movieListParams;
  return movies.map((movie) => (
    <CardMovie params={movie} key={movie.id}></CardMovie>
  ));
}
