import React from "react";
import Banner from "@/components/banner";
import Footer from "@/components/footer";


export default function page() {
  return (
    <div>
      <Banner title="TENTATIVE SCHEDULE" bgColor="bg-blue-600" bigCircle="bg-blue-700" smallCircle="bg-blue-800" />
      <div className="mt-5 m-5 flex justify-center items-center">
        <h1 className="text-4xl font-bold">This is Schedule Page </h1>
      </div>
      <Footer bgColor="bg-blue-600" />
    </div>
  )
}
