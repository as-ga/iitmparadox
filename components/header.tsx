import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Megaphone, Menu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function header() {
  const navbar = [
    { name: "PROFILE", href: "/profile" },
    { name: "ABOUT", href: "/about" },
    { name: "FEST REGISTRATION", href: "/fest" },
    { name: "TEAM", href: "/team" },
    { name: "EVENTS", href: "/events" },
    { name: "SPONSORS", href: "/sponsors" },
    { name: "FAQs", href: "/faq" },
    { name: "CONTACT US", href: "/contact" },
    { name: "SCHEDULE", href: "/schedule" },
  ];
  return (
    <header className="fixed top-0 left-0 bg-transparent w-full flex justify-between items-center p-8">
      <div>
        <Image
          src="/logo.webp"
          className="h-12 w-12 rounded-full"
          alt="logo"
          width={100}
          height={100}
        />
      </div>
      <div className="text-2xl flex gap-6 items-center">
        <Button className="bg-blue-200 rounded-2xl py-6 px-4 hover:bg-normal">
          <Megaphone color="black" />
          <Badge
            variant="destructive"
            className="p-1 relative -top-2 -left-2 rounded-full text-sm "
          />
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button className="text-black text-lg gap-3 bg-orange-300 hover:bg-normal rounded-2xl py-6 px-4">
              <samp>MENU</samp> <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="bg-blue-100 h-screen">
            <nav className="mt-5">
              {navbar.map(({ name, href }) => (
                <div
                  key={name}
                  className=" px-4 py-2 text-3xl text-slate-500 font-['milestone'] font-bold"
                >
                  <SheetClose asChild>
                    <Link href={href}>{name}</Link>
                  </SheetClose>
                </div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
