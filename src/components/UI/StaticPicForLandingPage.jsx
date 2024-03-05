import React from "react";

import logo from "../../assets/jsai-logo.png";

function StaticPicForLandingPage() {
  return (
    <div className="lg:ml-16 lg:flex lg:w-1/2 lg:items-center lg:justify-center">
      <div className="relative mx-5 lg:w-96">
        <div className="bg-tranparent absolute left-0 top-0 -ml-20 -mt-16 size-40 rounded-full border border-yellow-500 dark:border-white-900 lg:size-72"></div>
        <div className="bg-tranparent absolute left-0 top-0 -ml-14 -mt-20 size-40 rounded-full border border-white-100 dark:border-white-950 lg:size-72"></div>
        <div className="bg-tranparent absolute bottom-0 right-0 -mb-16 -mr-20 size-40 rounded-full border border-yellow-200 dark:border-white-900 lg:size-72"></div>
        <div className="bg-tranparent absolute bottom-0 right-0 -mb-20 -mr-14 size-40 rounded-full border border-white-100 dark:border-white-950 lg:size-72"></div>
        <div className="absolute inset-0 -m-6 -rotate-2 rounded-xl bg-white-200 "></div>
        <div className="absolute inset-0 -m-6 rotate-1 rounded-xl bg-white-100 bg-opacity-75 shadow-inner  dark:bg-opacity-75"></div>
        <img
          src={logo}
          className="relative mx-auto rounded-lg shadow-lg"
          alt="Hero Image"
        />
      </div>
    </div>
  );
}

export default StaticPicForLandingPage;
