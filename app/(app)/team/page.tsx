import React from "react";
import Footer from "@/components/footer";
import Banner from "@/components/banner";
import Image from "next/image";

const Secretary = [
  {
    name: "Ashwin R.",
    image: "ashwin_r.png",
  },
  {
    name: "Shruthi B.",
    image: "shruthi_b.png",
  },
  {
    name: "Farhat Qadri",
    image: "farhat_qadri.png",
  },
];
const Cores = [
  {
    name: "Amit Kumar Gupta",
    role: "Security",
    image: "amit_kumar_gupta.png",
  },
  {
    name: "Owais Shaikh",
    role: "Multimedia",
    image: "owais_shaikh.png",
  },
  {
    name: "Manish S",
    role: "WebOps",
    image: "manish_s.png",
  },
  {
    name: "B Subash",
    role: "Finance & Operations",
    image: "b_subash.png",
  },
  {
    name: "Shriprasad S",
    role: "Student Relations",
    image: "shriprasad_s.png",
  },
  {
    name: "Robin Justin",
    role: "Culturals",
    image: "robin_justin.png",
  },
  {
    name: "Faiz Ali",
    role: "Sports",
    image: "faiz.png",
  },
  {
    name: "Mayank Jaiswal",
    role: "Sponsorship",
    image: "mayank_jaiswal.png",
  },
  {
    name: "Aditya Kumar",
    role: "Accommodation & Hospitality",
    image: "aditya_kumar.png",
  },
  {
    name: "Mithun Raj",
    role: "Merch & Stalls",
    image: "mithun_raj.png",
  },
  {
    name: "Vivek Vibhuti",
    role: "Technicals",
    image: "vivek_vibhuti.png",
  },
];

export default function page() {
  return (
    <div>
      <Banner
        title="OUR TEAM"
        bgColor="bg-yellow-500"
        bigCircle="bg-yellow-600"
        smallCircle="bg-yellow-700"
      />
      <div>
        <div className="w-full md:px-28 lg:px-48 xl:px-72">
          <h2 className="__className_05e13c text-8xl text-center my-12">
            Secretary
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Secretary.map(({ name, image }) => (
              <div
                className="flex flex-col justify-center items-center"
                key={name}
              >
                <div className="w-full  max-w-[250px] border-4 border-white bg-[#FFBB6C] rounded-2xl overflow-hidden">
                  <Image
                    className="w-full h-auto"
                    src={`/team/${image}`}
                    height={500}
                    width={500}
                    alt={name}
                  />
                </div>
                <div className="w-full max-w-[250px]  text-center">
                  <div className="uppercase bg-[#FFF8E8] font-semibold  p-3 mt-6 rounded-2xl border-3 border-[#ffbb6c] text-black text-xl">
                    {name}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="__className_05e13c text-8xl text-center my-12">
            Cores
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8">
            {Cores.map(({ name, role, image }) => (
              <div className="flex flex-col" key={name}>
                <div className="w-full border-4 border-white bg-[#FFBB6C] rounded-2xl overflow-hidden">
                  <Image
                    className="w-full h-auto"
                    src={`/team/${image}`}
                    height={500}
                    width={500}
                    alt={name}
                  />
                </div>
                <div className="w-full bg-[#FFF8E8] text-center p-3  border-3 border-[#ffbb6c] mt-6 rounded-2xl">
                  <div className="uppercase font-semibold text-black text-base md:text-lg">
                    {name}
                  </div>
                  <div className="capitalise text-sm text-black/50">{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer bgColor="bg-yellow-500" />
    </div>
  );
}
