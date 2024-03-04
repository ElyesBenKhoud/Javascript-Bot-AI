import React from "react";
import logo from "../assets/jsai-logo.png";
function LandingPage() {
  return (
    <div className="relative overflow-hidden bg-white ">
      <header
        id="page-header"
        className="relative flex flex-none items-center py-8"
      >
        <div className="container mx-auto flex flex-col space-y-4 px-4 text-center sm:flex-row sm:items-center sm:justify-between sm:space-y-0 lg:px-8 xl:max-w-7xl">
          <div className="logo-div">
            <a
              href="javascript:void(0)"
              className="group inline-flex items-center space-x-2 text-lg font-bold tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
            >
              <img className="logo" src={logo} alt="AI Javascript" />
            </a>
          </div>
          <nav className="space-x-3 md:space-x-6">
            <a
              href="javascript:void(0)"
              className=" hover:text-yellow-300 text-l font-medium leading-relaxed text-gray-600  "
            >
              <span>About</span>
            </a>
            <a
              href="javascript:void(0)"
              className="text-l font-medium leading-relaxed text-gray-600  hover:text-yellow-300 "
            >
              <span>Pricing</span>
            </a>
          </nav>
        </div>
      </header>

      <div className="container relative mx-auto flex flex-col space-y-16 px-4 py-16 text-center lg:flex-row lg:space-y-0 lg:px-8 lg:py-32 lg:text-left xl:max-w-7xl">
        <div className="lg:flex lg:w-1/2 lg:items-center">
          <div>
            <h1 className="mb-4 text-4xl font-black text-black ">
              Next generation &nbsp;
              <span className="text-yellow-300 ">Javascript developers</span>
            </h1>
            <h2 className="text-xl font-medium leading-relaxed text-gray-600 ">
              Super fast and easy to use software to power your next idea or
              build your client’s web projects. Get it today and profit.
            </h2>
            <div className="flex flex-col justify-center space-y-2 pb-16 pt-10 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0 lg:justify-start">
              <a
                href="javascript:void(0)"
                className="inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-300 bg-yellow-400 px-7 py-3.5 font-semibold leading-6 text-black  hover:bg-gray-300 hover:text-black hover:border-gray-300 focus:ring focus:ring-yellow-400 focus:ring-opacity-50 "
              >
                <span>Get started</span>
              </a>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  );
}

export default LandingPage;
