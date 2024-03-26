import React from "react";

import Cards from "../components/Cards";
import Reviews from "../components/UI/Reviews";
import StaticComponent from "../components/UI/StaticComponent";
import StaticDataForLandingPage from "../components/UI/StaticDataForLandingPage";
import StaticPicForLandingPage from "../components/UI/StaticPicForLandingPage";

function LandingPage() {
  return (
    <div
      className="relative overflow-hidden bg-white"
      style={{ userSelect: "none" }}
    >
      <div className="container relative mx-auto flex flex-col h-screen  items-center justify-center  space-y-16 px-4 py-16 text-center lg:flex-row lg:space-y-0 lg:px-8 lg:py-32 lg:text-left xl:max-w-7xl">
        <StaticDataForLandingPage />
        <StaticPicForLandingPage />
      </div>

      <hr />
      <StaticComponent />
      <Cards />
      <Reviews />
    </div>
  );
}

export default LandingPage;
