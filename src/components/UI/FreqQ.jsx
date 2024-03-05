import React from "react";

function FreqQ() {
  return (
    <div className="bg-gray ">
      <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
        <div className="text-center">
          <div className="mb-1 text-sm font-bold uppercase tracking-wider text-gray-600 ">
            We Answer
          </div>
          <h2 className="text-4xl font-black text-black ">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h4 className="mb-2 font-semibold text-gray-800">
              What features are included?
            </h4>
            <p className="leading-relaxed text-gray-600 dark:text-gray-400">
              Etiam egestas fringilla enim, id convallis lectus laoreet at.
              Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi.
              Quisque egestas nisl id lectus facilisis scelerisque.
            </p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-gray-800">
              Do I get access to the community?
            </h4>
            <p className="leading-relaxed text-gray-600 dark:text-gray-400">
              Etiam egestas fringilla enim, id convallis lectus laoreet at.
              Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi.
              Quisque egestas nisl id lectus facilisis scelerisque.
            </p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-gray-800">
              Can I get a refund just in case?
            </h4>
            <p className="leading-relaxed text-gray-600 dark:text-gray-400">
              Etiam egestas fringilla enim, id convallis lectus laoreet at.
              Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi.
              Quisque egestas nisl id lectus facilisis scelerisque.
            </p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-gray-800">
              Do you offer email support?
            </h4>
            <p className="leading-relaxed text-gray-600 dark:text-gray-400">
              Etiam egestas fringilla enim, id convallis lectus laoreet at.
              Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi.
              Quisque egestas nisl id lectus facilisis scelerisque.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-300 bg-yellow-400 px-7 py-3.5 font-semibold leading-6 text-black  hover:bg-gray-300 hover:text-black hover:border-gray-300 focus:ring focus:ring-yellow-400 focus:ring-opacity-50 ">
            <span>Go to support</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FreqQ;
