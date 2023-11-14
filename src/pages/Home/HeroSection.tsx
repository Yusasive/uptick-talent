import React from "react";
import HeroImage from "../../assets/HeroImage.png"

export const HeroSection: React.FC = () => {
  return (
    <div className="text-white">
      <div className="container flex flex-col justify-center p-2 mx-2 sm:py-2 lg:py-6 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-4 text-left  sm:ml-2 lg:ml-16 rounded-sm lg:max-w-2xl xl:max-w-2xl lg:text-left">
          <h1 className="text-4xl font-bold sm:text-6xl">
            Accelerating Technology Progress and Opportunities
          </h1>
          <p className="mt-2 mb-2 font-normal text-lg sm:mb-12">
            Uptick Talent fuels critical technology progress by empowering the
            next generation of tech and business leaders across Africa through
            innovative solutions and strategic partnerships.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <button className="px-8 py-3 text-lg font-semibold rounded bg-uptickblue10 text-white hover:bg-upticklightb30">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex items-center  justify-center p-6 mt-8 lg:mr-4 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={HeroImage}
            alt="HeroImage"
            className="object-contain rounded-b-[10%] bg-ellipse bg-no-repeat bg-right-top bg-auto object-left-bottom h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};
