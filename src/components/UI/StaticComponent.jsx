import React from "react";

function StaticComponent() {
  return (
    <div className="bg-white text-gray-800">
      <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
        <div className="text-center">
          <div className="mb-1 text-sm font-bold uppercase tracking-wider text-gray-700 ">
            Documentation
          </div>
          <h2 className="mb-4 text-4xl font-black text-black ">
            Getting Started with{" "}
            <h2 className="text-4xl font-black text-yellow-300">
              {" "}
              AI Javascript
            </h2>
          </h2>
          <h3 className="mx-auto text-xl font-medium leading-relaxed text-gray-700  lg:w-2/3">
            Get to know how it can help you build the User Interface of your
            website and web application with the minimal effort.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default StaticComponent;
