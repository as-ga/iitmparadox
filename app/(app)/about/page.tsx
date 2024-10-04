import React from "react";
import Image from 'next/image'
import Banner from "@/components/banner";
import Footer from "@/components/footer";

export default function page() {
  return (
    <>
      <Banner title="ABOUT" bgColor="bg-red-500" bigCircle="bg-red-800" smallCircle="bg-red-950" />
      <div className="w-full">
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-4 relative text-xs lg:text-base">
            <Image alt="About Gaja" loading="lazy" width={1000} height={1000} decoding="async" data-nimg="1" className="mx-auto md:w-2/3 xl:w-1/2" src="/about/about_gaja.png" />
            <div className="bg-white rounded-2xl w-full p-4 font-semibold md:max-w-[300px] md:absolute top-24 left-0 xl:left-14 " >
              Gajendra aka Gaja, was born and raised in a scenic village of Anaikatti.
            </div>

            <div className="rounded-2xl bg-white w-full p-4 font-semibold md:absolute top-1/3 right-0 xl:right-14  md:max-w-[300px]" >
              His curiosity to learn about nature made him come to Chennai and
              join IITM as a student.
            </div>
            <div className="bg-white rounded-2xl w-full p-4 font-semibold right-0 xl:right-16 bottom-10 md:max-w-[350px] md:absolute" >
              Gaja embodies the spirit of Paradox'24, a friendly, calm,
              extroverted and curious companion on the vibrant journey of college
              life.
            </div>
            <div className="bg-white rounded-2xl w-full p-4 font-semibold md:absolute left-0 xl:left-20 bottom-10 md:max-w-[350px]" >
              He's now an integral part of IITM, helping others with his vast
              experience: not just in academics, but at life too.
            </div>
          </div>
          <div className="w-full flex justify-center text-xs md:text-sm lg:text-base ">
            <div className="rounded-2xl w-full p-4 text-center md:max-w-[400px]" >
              <div className="w-full font-semibold text-[#BB6969]">Paradox'24-il Gajaa-ai sandhikkavum</div>
              <div className="w-full font-bold">Tamil theriyadha ?</div><div className="w-full font-bold text-[#BB6969]">Meet Gaja at Paradox '24</div>
            </div>
          </div>

          <div className="w-full md:px-20 lg:px-40 xl:px-[20rem]">
            <div className="grid md:grid-cols-2 gap-6">

              <div className="flex flex-col">
                <div className="bg-red-400 p-0 flex flex-col justify-between overflow-hidden rounded-2xl w-full mb-6" >
                  <div className="p-8">
                    <h4 className="text-2xl text-white fond-bold">PARADOX</h4>
                    <div className="grid gap-6">
                      <p>
                        <b>Paradox</b> is a unique and immersive fest celebrating the pioneering Bachelor of Science (BS) Degree in Data Science and Electronic science offered by IIT Madras</p>
                    </div>
                  </div>
                  <Image src="/about/about1.svg" alt="Paradox 1" width={1000} height={1000} />
                </div>

                <div className="bg-blue-300 p-0 flex flex-col justify-between overflow-hidden rounded-2xl w-full mb-6" >
                  <div className="p-8">
                    <h4 className="text-2xl text-white fond-bold">WHY JOIN THE FUN ?</h4>
                    <div className="grid gap-6">
                      <p><b>Unleash your inner genius:</b> From coding challenges to designing robots, put your skills to the test in epic tech competitions.</p></div></div>
                  <Image src="/about/about3.svg" alt="Paradox 3" width={1000} height={1000} />
                </div>
              </div>

              <div className="flex flex-col">
                <div className="bg-green-300 p-0 flex flex-col justify-between overflow-hidden rounded-2xl w-full mb-6" >
                  <div className="p-8">
                    <h4 className="text-2xl text-white fond-bold">
                      IS PARADOX FOR YOU ?</h4>
                    <div className="grid gap-6">
                      <p>
                        <b>Absolutely!</b> Whether you're a student, a professional, or just someone who loves to explore new things, Paradox welcomes you with open arms.</p>
                    </div>
                  </div>
                  <Image src="/about/about2.svg" alt="Paradox 2" width={1000} height={1000} />
                </div>
                <div className="bg-purple-300 p-0 flex flex-col justify-between overflow-hidden rounded-2xl w-full mb-6" >
                  <div className="p-8">
                    <h4 className="text-2xl text-white fond-bold">30th MAY - 2nd JUNE</h4>
                    <div className="grid gap-6">
                      <p>Paradox is more than just a fest , it's an experience. Let's Level up your network beyond your DMs!</p>
                    </div>
                  </div>
                  <Image src="/about/about4.svg" alt="Paradox 4" width={1000} height={1000} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer bgColor="bg-red-500" />
    </>
  )
}
