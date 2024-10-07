import React from "react";
import Banner from "@/components/banner";
import Footer from "@/components/footer";

const SponsorsSection = () => {
  return (
    <div>
      <Banner title="OUR SPONSORS" bgColor="bg-purple-600" bigCircle="bg-purple-700" smallCircle="bg-purple-800" />
      <div className="mt-5 m-5 flex justify-center items-center">
        <h1 className="text-4xl font-bold">This is Sponsors Page</h1>
      </div>
      <Footer bgColor="bg-purple-600" />
    </div>
  );
};

export default SponsorsSection;
