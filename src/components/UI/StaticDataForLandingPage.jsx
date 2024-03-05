import React from "react";
import { useNavigate } from "react-router-dom";

function StaticDataForLandingPage() {
  const navigate = useNavigate();

  const handleNavigateToJSAI = () => {
    navigate("/javascript-ai");
  };

  return (
    <div className="lg:flex lg:w-1/2 lg:items-center">
      <div>
        <h1 className="mb-4 text-4xl font-black text-black ">
          Next generation &nbsp;
          <span className="text-yellow-300 ">Javascript developers</span>
        </h1>
        <h2 className="text-xl font-medium leading-relaxed text-gray-600 ">
          Super fast and easy to use software to power your next idea or build
          your client’s web projects. Get it today and profit.
        </h2>
        <div className="flex flex-col justify-center space-y-2 pb-16 pt-10 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0 lg:justify-start">
          <button
            className="inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-300 bg-yellow-400 px-7 py-3.5 font-semibold leading-6 text-black  hover:bg-gray-300 hover:text-black hover:border-gray-300 focus:ring focus:ring-yellow-400 focus:ring-opacity-50 "
            onClick={handleNavigateToJSAI}
          >
            <span>Get started</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default StaticDataForLandingPage;
