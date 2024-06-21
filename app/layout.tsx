import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Roboto } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "moviE-App",
  description: "created by me",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={cn(roboto.className, "flex flex-col")}>
        <Header></Header>
        
        <main className="flex-1 min-h-screen  md:container mx-auto pt-5">{children}</main>

        <Footer></Footer>
      </body>
    </html>
  );
}
