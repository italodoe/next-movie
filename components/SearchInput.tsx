"use client";
import { debounce } from "@/lib/utils";
import { Input } from "./ui/input";
import { useSearchParams, useRouter } from "next/navigation";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleOnChange = debounce((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }
    replace(`/?${params.toString()}`);
  }, 300);
  return (
    <Input
      type="text"
      className="bg-zinc-200"
      placeholder="search ...."
      onChange={(e) => handleOnChange(e.target.value)}
    />
  );
}
