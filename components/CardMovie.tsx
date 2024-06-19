import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardMovieProps = {
  params: {
    backdrop_path: string;
    title: string;
    popularity: number;
    id: number;
    overview: string;
  };
};

export default function CardMovie({ params }: CardMovieProps) {
  const { backdrop_path, title, popularity, id, overview } = params;
  const image_path = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
  return (
    <Card className="card-item bg-stone-900 text-destructive-foreground hover:bg-stone-800 cursor-pointer select-none">
      <Image
        className="card-image"
        // src={"/banner.webp"}
        src={image_path}
        width={"5000"}
        height={"2000"}
        alt={"banner"}
      ></Image>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-xs text-zinc-300">
          thriller
        </CardDescription>
      </CardHeader>
      <CardContent className="h-28   ">
        <div className=" max-h-full card-content">
          {overview}
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-zinc-500">{popularity}</p>
      </CardFooter>
    </Card>
  );
}
