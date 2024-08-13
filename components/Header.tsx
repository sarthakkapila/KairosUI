import Image from "next/image";
import Link from "next/link";
import logo from "../public/dark.ico";
import GithubIcon from "./github-icon";
import { UserButton, useUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import { dark } from "@clerk/themes";
export default function Header() {
  const { user } = useUser();

  if (!user) return null;
  return (
    <header className="relative mx-auto mt-5 flex w-full items-center justify-center px-2 pb-7 sm:px-4">
<div> 
        <UserButton
      appearance={ {
          
        baseTheme: dark,
        elements: {
          avatarBox: "h-14 w-14",
          userButtonOuterIdentifier: "text-sm font-semibold text-white",
          userButtonPopoverCard: "bg-white shadow-lg rounded-lg border border-gray-200",
          userButtonPopoverFooter: "hidden",
        },
      }}
      showName={false}
    />
    </div>
      <Link href="/" className="absolute flex items-center gap-2">
        <Image alt="header text" src={logo} className="h-8 w-8" />
        <h1 className="text-xl tracking-tight">
          <span className="text-neon-pink text-2xl font-extrabold">KairosUI</span>UI
        </h1>
      </Link>
      <a
        href="https://github.com/sarthakkapila/KairosUI"
        target="_blank"
        className="ml-auto hidden items-center gap-3 rounded-2xl bg-white px-6 py-2 sm:flex"
      >
        <GithubIcon className="h-4 w-4" />
        <span>GitHub ⭐️</span>
      </a>
    </header>
  );
}
