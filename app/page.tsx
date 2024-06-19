import CardMovie from "@/components/CardMovie";
import { actionGetPopular } from "./actions/movies";

export default async function Home() {
  const popular = await actionGetPopular();
  console.log("popular..", popular);
  return (
    <div className="w-full h-hull">
      <h1 className="text-center text-3xl font-semibold">Hey movies</h1>
      <div className="md:grid md:grid-cols-4 gap-4 pt-4 -scroll-mb-10">
        {
          popular.map(movie => <CardMovie params={movie} key={movie.id} ></CardMovie>)
        }
      </div>
    </div>
  );
}
