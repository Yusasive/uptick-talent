import React from "react";
import {Link} from "react-router-dom";
import LittleBoy from "../../assets/little-boy.png";
import StudyGroup from "../../assets/study-group.png";
import MediumShot from "../../assets/medium-shot.png";
import SoftwareDeveloper from "../../assets/software-developer.png";

const OurPrograms: React.FC = () => {
  return (
    <div className="sm:mx-20">
      {/* First Section Card*/}
      <h2 className="pl-14 text-4xl text-white font-medium md:text-4xl">
        Our Programs
      </h2>
      <div className="flex flex-col items-center sm:flex-row my-4">
        <div className="flex w-full px-14 h-full sm:w-1/2">
          <div className="p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
            <img
              src={LittleBoy}
              alt="Little Boy"
              className="object-cover object-center w-full rounded-md h-fit dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <h2 className="text-xl font-semibold tracki">
                Uptick Talent Beginners
              </h2>
            </div>
            <p className="dark:text-gray-100">
              Ignite young minds with our technology and business training
              designed for secondary school students. Empower the leaders of
              tomorrow!
            </p>
            <div className="flex flex-col my-3 space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
              <button className="px-8 py-2 text-md font-medium rounded bg-uptickblue10 text-white hover:bg-upticklightb30">
                Apply Now
              </button>
              <Link to="/programs/beginner">
                <button className="px-8 py-2 text-md font-medium border rounded text-white border-gray-300 hover:bg-uptickblue10">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>{" "}
        <div className="flex w-full px-14 h-fit sm:w-1/2">
          <div className="p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
            <img
              src={StudyGroup}
              alt="Study Group"
              className="object-cover object-center w-full rounded-md h-fit dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <h2 className="text-xl font-semibold tracki">
                Uptick Talent Tech
              </h2>
            </div>
            <p className="dark:text-gray-100">
              Embark on a journey through technology with our engineering,
              design and other non-technical programs. Elevate your skills and
              career.!
            </p>
            <div className="flex flex-col my-3 space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
              <button className="px-8 py-2 text-md font-medium rounded bg-uptickblue10 text-white hover:bg-upticklightb30">
                Apply Now
              </button>
              <Link to="/programs/tech">
                <button className="px-8 py-2 text-md font-medium border rounded text-white border-gray-300 hover:bg-uptickblue10">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*Second section Cards*/}
      <div className="flex flex-col items-center sm:flex-row my-4">
        <div className="flex w-full px-14 h-full sm:w-1/2">
          <div className="p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
            <img
              src={MediumShot}
              alt="Medium Shot"
              className="object-cover object-center w-full rounded-md h-fit dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <h2 className="text-xl font-semibold tracki">
                Uptick Talent Business
              </h2>
            </div>
            <p className="dark:text-gray-100">
              Join our thriving startup ecosystem, receive mentorship, and
              transform your innovative ideas into successful businesses.
            </p>
            <div className="flex flex-col my-3 space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
              <button className="px-8 py-2 text-md font-medium rounded bg-uptickblue10 text-white hover:bg-upticklightb30">
                Apply Now
              </button>
              <Link to="/programs/business">
                <button className="px-8 py-2 text-md font-medium border rounded text-white border-gray-300 hover:bg-uptickblue10">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>{" "}
        <div className="flex w-full px-14 h-fit sm:w-1/2">
          <div className="p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
            <img
              src={SoftwareDeveloper}
              alt="Software Developer"
              className="object-cover object-center w-full rounded-md h-fit dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <h2 className="text-xl font-semibold tracki">
                Uptick Talent Map
              </h2>
            </div>
            <p className="dark:text-gray-100">
              Find exceptional technical & non-technical tech talent for your
              company or partner with us to discover the right fit
            </p>
            <div className="flex flex-col my-3 space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
              <button className="px-8 py-2 text-md font-medium rounded bg-uptickblue10 text-white hover:bg-upticklightb30">
                Apply Now
              </button>
              <a href="/programs/map">
                <button className="px-8 py-2 text-md font-medium border rounded text-white border-gray-300 hover:bg-uptickblue10">
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPrograms;
