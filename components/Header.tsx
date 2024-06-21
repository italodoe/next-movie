import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

import Link from "next/link";
import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <header
      className={cn(" items-center p-3 w-full   sticky top-0  z-10 backdrop-blur-md bg-white/30 ")}
    >
      <div className="flex flex-row flex-no-wrap items-center  md:container m-auto justify-between gap-3">
        <Link href={"/"}>
          <Avatar>
            <AvatarImage
              src="https://visualenglishschool.com/wp-content/uploads/2019/10/English-Movie-Club-Milano.jpg"
              alt="icon"
            />
            <AvatarFallback>MOVIE</AvatarFallback>
          </Avatar>
        </Link>
        <div className=" w-40 lg:w-96 sm:gap-x-56 ">

        <SearchInput></SearchInput>
        
         </div>
        <div>
          <Button variant="outline" size={"icon"}>
            ES
          </Button>
        </div>
      </div>
    </header>
  );
}
