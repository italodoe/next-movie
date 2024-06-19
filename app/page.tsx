import CardMovie from "@/components/CardMovie";

export default function Home() {
  return (
    <div className="w-full h-hull">
      <h1 className="text-center text-3xl font-semibold">Hey movies</h1>
      <div className="md:grid md:grid-cols-4 gap-4 pt-4 -scroll-mb-10">
       
        {[...new Array(12)].map(x =>  <CardMovie key={x} /> )}
      </div>
    </div>
  );
}
