import React from "react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { checkUser } from "@/lib/checkUser";
import UserMenu from "./user-menu";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";

async function Header() {
  await checkUser();

  return (
    <header className="container mx-auto fixed top-0 left-0 right-0 bg-white z-50">
      <nav className="mx-auto py-2 px-4 sm:px-6 lg:px-8 flex justify-between items-center shadow-md border-b-2">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.webp"
            width="150"
            height="60"
            alt="Schedulrr Logo"
            className="h-6 w-auto"
            priority
          />
          <span className="text-sm font-bold text-[#686868]">Scheduler</span>
        </Link>

        <div className="flex items-center gap-3 md:gap-4">
          <Link href="/events?create=true">
            <Button variant="default" className="flex items-center gap-2 text-sm md:text-base bg-[#FF6600] hover:bg-[#FF6600]">
              <PenBox size={16} />
              <span className="hidden sm:inline text-white">Create Event</span>
            </Button>
          </Link>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline" className="text-sm md:text-base">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserMenu />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}

export default Header;