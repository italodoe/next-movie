import CardMovie from "@/components/CardMovie";
import { actionGetPopular } from "./actions/movies";
import MovieList from "@/components/MovieList";

export default async function Home(props: any) {
  console.log("props-->", props);
  const popular = await actionGetPopular();
  console.log("popular..", popular);
  return (
    <div className="w-full h-hull">
      <h1 className="text-center text-3xl font-semibold">Hey movies</h1>
      <div className="md:grid md:grid-cols-4 gap-4 pt-4 -scroll-mb-10">
        {<MovieList movies={popular}></MovieList>}
      </div>
    </div>
  );
}
