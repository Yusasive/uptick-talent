import React from "react";
import Button from "./Button";

interface ProgramProps {
  imageRight?: string | undefined;
  imageLeft?: string | undefined;
  title: string;
  subTitle: string;
  description: string;
  subDescription?: string;
  buttonText: string;
  categories: string[];
  layout: string;
}

const Program = ({
  imageRight,
  imageLeft,
  title,
  subTitle,
  description,
  subDescription,
  buttonText,
  categories,
}: ProgramProps) => {
  return (
    <div
      className={`flex ${
        imageRight ? "flex-col-reverse" : "flex-col"
      } sm:flex-row pl-2 items-center justify-center pt-4 pb-4 bg-uptickbackground`}
    >
      {imageLeft && (
        <div className="flex-1 m-4">
          <div className="w-full h-auto">
            <img
              src={imageLeft as string}
              alt={title}
             // layout="responsive"
              width={300}
              height={200}
            />
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col p-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
          {title}
        </h1>
        <p className="text-gray-400 mt-2 mb-2 font-bold">{subTitle}</p>
        <p className="text-gray-500 mb-2 text-xs md:text-sm lg:text-lg">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="mb-0">
              <button className="w-full bg-white hover:bg-gray-700 text-black text-xs md:text-sm lg:text-lg font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300">
                {category}
              </button>
            </div>
          ))}
        </div>
        <p className="text-gray-500 mt-4 text-xs md:text-sm lg:text-lg">
          {subDescription}
        </p>

        <div className="mt-4">
          <Button title={buttonText} />
        </div>
      </div>

      {imageLeft ? null : (
        <div className="flex-1 m-4">
          {imageRight && (
            <div className="w-full h-auto">
              <img
                src={imageRight as string}
                alt={title}
                //layout="responsive"
                width={300}
                height={200}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Program;
