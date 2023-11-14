
import React from "react";
import Button from "./Button";

interface HeroProps {
  backgroundImage: string;
  heading: string;
  paragraph: string;
  buttonText: string;
}

const Hero = ({
  backgroundImage,
  heading,
  paragraph,
  buttonText,
}: HeroProps) => {
  return (
    <div className="min-h-screen flex relative">
      <div className="w-full flex relative">
        <div
          className="bg-cover bg-right bg-no-repeat absolute inset-0 z-0"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black"></div>
      </div>
      <div className="absolute inset-0 z-10 flex flex-col items-center mt-48 sm:mx-auto md:auto lg:w-3/5 text-center">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold relative">
          {heading}
        </h1>

        <div className="w-full text-gray-300 md:pl-16 md:pr-16">
          <p className="text-base md:text-lg lg:text-xl text-left p-4 m-2">
            {paragraph}
          </p>
        </div>
        <div className="mt-4">
          <Button title={buttonText} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
