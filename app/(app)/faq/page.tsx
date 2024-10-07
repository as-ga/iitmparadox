import React from "react";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
export default function page() {
  return (
    <div>
      <Banner title="FAQs" bgColor="bg-red-300" bigCircle="bg-red-400" smallCircle="bg-red-500" />
      <div className="mt-5 m-5 flex justify-center items-center">
        <h1 className="text-4xl font-bold">This is FAQs Page</h1>
      </div>
      <Footer bgColor="bg-red-300" />
    </div>
  )
}
