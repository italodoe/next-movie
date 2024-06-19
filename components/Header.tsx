import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className={cn(
        "flex flex-row flex-no-wrap content-center justify-between items-center p-3  m-auto gap-5 w-full sticky top-0 bg-zinc-200"
      )}
    >
      <Link href={"/"}>
        <Avatar>
          <AvatarImage
            src="https://visualenglishschool.com/wp-content/uploads/2019/10/English-Movie-Club-Milano.jpg"
            alt="icon"
          />
          <AvatarFallback>MOVIE</AvatarFallback>
        </Avatar>
      </Link>
      <div className="w-96">
        <Input type="text" placeholder="search ...." />
      </div>
      <div>
        <Button variant="outline" size={"icon"}>
          ES
        </Button>
      </div>
    </header>
  );
}
