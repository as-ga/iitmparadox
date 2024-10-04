import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube, Linkedin, Mail } from "lucide-react";

export default function footer({ bgColor = "bg-blue-500" }) {
  return (
    <footer className="px-5 py-10">
      <div
        className={`${bgColor} p-5 md:flex justify-between items-center rounded-xl`}
      >
        <div>
          <Image
            height={200}
            width={200}
            src="/paradox_title.webp"
            alt="Paradox Title"
          />
        </div>
        <div className="mt-10 flex flex-col gap-2 justify-end items-end text-white ">
          <div className="flex gap-5 ">
            <Link href="/" className="p-2 bg-slate-400  rounded-full">
              <Instagram />
            </Link>
            <Link href="/" className="p-2 bg-slate-400  rounded-full">
              <Youtube />
            </Link>
            <Link href="/" className="p-2 bg-slate-400  rounded-full">
              <Linkedin />
            </Link>
            <Link href="/" className="p-2 bg-slate-400  rounded-full">
              <Mail />
            </Link>
          </div>
          <div>
            Designed with <span className="text-red-800">❤</span> by Multimedia
            & WebOps Team
          </div>
        </div>
      </div>
    </footer>
  );
}
