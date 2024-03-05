import React from "react";

function StaticNumber() {
  return (
    <div
      className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8 px-32 py-10"
      style={{ userSelect: "none" }}
    >
      <div className="flex flex-col overflow-hidden rounded-lg bg-gray-600 shadow-sm ">
        <div className="flex grow items-center justify-between p-5">
          <dl className="space-y-1">
            <dt className="text-2xl font-bold">14k</dt>
            <dd className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Users online
            </dd>
          </dl>
          <div className="inline-flex items-center space-x-1 rounded-full bg-emerald-200 px-2 py-1 text-sm font-semibold leading-4 text-emerald-800">
            <svg
              className="hi-solid hi-arrow-circle-up inline-block size-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span>17.9%</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col overflow-hidden rounded-lg bg-gray-600 shadow-sm ">
        <div className="flex grow items-center justify-between p-5">
          <dl className="space-y-1">
            <dt className="text-2xl font-bold">$5,128</dt>
            <dd className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Requests costs
            </dd>
          </dl>
          <div className="inline-flex items-center space-x-1 rounded-full bg-rose-200 px-2 py-1 text-sm font-semibold leading-4 text-rose-800">
            <svg
              className="hi-solid hi-arrow-circle-down inline-block size-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                clipRule="evenodd"
              />
            </svg>
            <span>6.9%</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col overflow-hidden rounded-lg bg-gray-600 shadow-sm ">
        <div className="flex grow items-center justify-between p-5">
          <dl className="space-y-1">
            <dt className="text-2xl font-bold">120k</dt>
            <dd className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Daily Requests numbers
            </dd>
          </dl>
          <div className="inline-flex items-center space-x-1 rounded-full bg-emerald-200 px-2 py-1 text-sm font-semibold leading-4 text-emerald-800">
            <svg
              className="hi-solid hi-arrow-circle-up inline-block size-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span>5.6%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaticNumber;
