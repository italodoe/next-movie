import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function CardMovie(){
    return (
        <Card className="bg-stone-900 text-destructive-foreground hover:bg-stone-800 cursor-pointer select-none">
          <Image
            className="card-image"
            src={"/banner.webp"}
            width={"5000"}
            height={"2000"}
            alt={"banner"}
          ></Image>
          <CardHeader>
            <CardTitle>Once Upon a Time</CardTitle>
            <CardDescription className="text-xs text-zinc-300">
              thriller
            </CardDescription>
          </CardHeader>
          <CardContent className="h-28   ">
            <div className=" max-h-full card-content">
              Emma and Hook attempt to rectify the mistakes they made in the
              Enchanted Forest of the past and find their way back to
              Storybrooke in the present.
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-zinc-500">Card Footer</p>
          </CardFooter>
        </Card>
    )
}