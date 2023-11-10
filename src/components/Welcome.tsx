"use client";

import React from "react";

export const Welcome = () => {
  return (
    <div>
      <div className="px-0 mx-auto rounded-b-[100%] bg-welcome-back max-w-screen-xl text-center py-7 lg:py-5">
        <section className="py-6">
          <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-4 md:p-10 md:px-24 xl:px-48">
            <h1 className="text-5xl font-bold sm:w-2/3 leadi text-white text-center">
              Discover Your Potential with{" "}
              <span className="bg-gradient-to-r from-uptickblue10 to-uptickpurpleg text-transparent bg-clip-text">
                Uptick Talent
              </span>
            </h1>
            <p className="text-sm mx-auto sm:w-2/3 font-normal text-white text-center">
              Uptick Talent incubates and empowers the next generation of great
              technology and business talent through innovative solutions.
            </p>
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
              <button className="px-8 py-3 text-lg font-semibold rounded bg-uptickblue10 text-white hover:bg-upticklightb30">
                Explore Our Programmes
              </button>
              <button className="px-8 py-3 text-lg font-semibold border rounded text-white border-gray-300 hover:bg-uptickblue10">
                Apply For Jobs
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
