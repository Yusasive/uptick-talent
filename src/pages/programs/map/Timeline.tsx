import React from "react";

const Timeline: React.FC = () => {
  return (
    <div>
      <div className="container text-deep mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <h2 className="text-3xl text-white text-center my-4 font-normal">
            Our Process
          </h2>

          <div className="border-2-2 left-1/2 mx-auto absolute border-opacity-20 border-gray-700 h-full border"></div>

          {/* right timeline */}
          <div className="mb-8 flex justify-between sm:mr20 items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-18 flex  items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div className="order-1 bg-upticklightb10 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <div className="flex items-center w-2/3 justify-center mt-2 lg:mt-0 p-6">
                <img
                  src="/digital-circle.png"
                  alt="Digital Circle"
                  className="object-contain"
                  placeholder="blur"
                />
              </div>
              <h3 className="mb-3 font-bold text-deep text-xl">
                Talent Evaluation
              </h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                We rigorously assess the skills, experience, and cultural fit of
                our candidates.
              </p>
            </div>
          </div>

          {/*left timeline */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <div className="order-1 bg-upticklightb10 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <div className="flex items-center  justify-center p-6 mt-2 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img
                  src="/3d-background.png"
                  alt="3d background"
                  className="object-contain h-60 sm:h-70 lg:h-75 xl:h-80 2xl:h-128"
                  placeholder="blur"
                />
              </div>
              <h3 className="mb-3 font-bold text-deep text-xl">Matching</h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-deep text-opacity-100">
                We work closely with you to understand your needs and match you
                with the right talent.
              </p>
            </div>
          </div>

          {/* right timeline */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold w-2/5 text-lg text-white">3</h1>
            </div>
            <div className="order-1 bg-upticklightb10 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <div className="flex items-center justify-center p-6 mt-2 lg:mt-0">
                <img
                  src="/support.png"
                  alt="Support"
                  className="object-contain h-60 sm:h-70 lg:h-75 xl:h-80 2xl:h-128"
                  placeholder="blur"
                />
              </div>
              <h3 className="mb-3 font-bold text-gray-800 text-xl">Support</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                Our team provides support throughout the onboarding process to
                ensure a smooth integration into your organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
