import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mt-24"></div>
      <div className="m-20 text-2xl flex justify-center items-center ">

        <Image src='/paradox_title.webp' height={1000} width={1000} alt="paradox_title" />


      </div>
    </>
  );
}
