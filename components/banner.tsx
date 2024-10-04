import React from "react";
import Image from "next/image";

export default function Banner({
  title = "TITLE",
  bgColor = "bg-yellow-500",
  bigCircle = "bg-yellow-700",
  smallCircle = "bg-yellow-600",
}) {
  return (
    <div className={`${bgColor} rounded-2xl p-4 overflow-hidden mx-5`}>
      <div className="flex w-full justify-between items-start">
        <div
          className={`${bigCircle} rounded-full border-2 ml-[-100px] mt-[-100px] w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 border-white flex justify-center items-center`}
        >
          <div
            className={`${smallCircle}  rounded-full border-2 z-[10] h-24 w-24 md:h-28 md:w-28 lg:w-32 lg:h-32 border-white`}
          ></div>
        </div>
        <Image
          alt="Paradox logo"
          loading="lazy"
          width={900}
          height={900}
          decoding="async"
          data-nimg="1"
          className="w-16 sm:w-20 md:w-32 lg:w-48 z-[2] relative"
          src="/paradox_title.webp"
        />
      </div>
      <div className="flex w-full justify-start items-center px-4 md:px-6 xl:mt-20">
        <h1 className="font-[milestone] text-3xl md:text-5xl lg:text-8xl mb-0 text-white w-full undefined">
          {title}
        </h1>
      </div>
    </div>
  );
}
