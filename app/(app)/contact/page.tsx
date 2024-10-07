import Banner from "@/components/banner";
import Footer from "@/components/footer";
import React from "react";

export default function Page() {
  return (
    <div>
      <Banner title="CONTACT US" bgColor="bg-green-800" bigCircle="bg-green-900" smallCircle="bg-green-950" />
      <div className="mt-5 m-5 flex justify-center items-center">
        <h1 className="text-4xl font-bold">This is Contact Us Page</h1>
      </div>
      <Footer bgColor="bg-green-800" />
    </div>
  )
}
