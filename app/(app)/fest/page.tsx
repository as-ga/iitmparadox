import React from "react";
import Banner from "@/components/banner";
import Footer from "@/components/footer";

export default function page() {

  return (
    <div>
      <Banner title="FEST" bgColor="bg-blue-300" bigCircle="bg-blue-400" smallCircle="bg-blue-500" />
      <div className="mt-5 m-5 flex justify-center items-center">
        <h1 className="text-4xl font-bold">This is Fest Page </h1>
      </div>
      <Footer bgColor="bg-blue-300" />
    </div>
  )
}
