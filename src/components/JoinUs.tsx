"use client";

import React from "react";
//import Button from "./Button";

const JoinUs = () => {
  return (
    <section className="py-6 mx-auto items-center justify-center bg-white text-white">
      <div className="container w-4/5 sm:w-3/5 mx-auto flex flex-col items-center bg-uptickblue100 justify-center p-4 space-y-6 md:p-10 md:px-10 xl:px-12">
        <h1 className="text-2xl  sm:text-5xl font-bold leadi text-center">
          Join Us in Shaping the Future!
        </h1>
        <p className="pt-0 sm:pt-2 pb-2 text-sm sm:text-lg font-medium text-center">
          Uptick Talent is your gateway to a world of opportunities in
          technology and business. Start your journey with us today!
        </p>
        <button className="px-8 py-3 text-lg font-semibold rounded bg-uptickblue10 text-white hover:bg-upticklightb30">
          Explore Our Programs
        </button>
        {/*<Button title={undefined} />*/}
      </div>
    </section>
  );
};

export default JoinUs;
