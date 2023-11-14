

import React from "react";

const page: React.FC = () => {
  return (
    <div>
      <section className="bg-cover bg-contact-page">
        <div className="flex flex-col h-full">
          <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
            <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
              <div className="mt-8 lg:w-3/5 lg:mx-6">
                <div className="w-full bg-transparent px-4 py-10 mx-auto overflow-hidden shadow-2xl rounded-xl lg:max-w-3xl">
                  <h1 className="text-4xl font-semibold text-white">
                    Get in touch
                  </h1>

                  <p className="mt-2 text-white">
                    We Really Can&apos;t Wait To Hear From You!
                  </p>

                  <form className="mt-6">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="block w-full px-5 py-3 mt-2  text-white bg-blackshade border border-gray-200 rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div className="flex-1 mt-6">
                      <input
                        type="email"
                        placeholder="Enter your E-mail Address"
                        className="block w-full px-5 py-3 mt-2  text-white bg-blackshade border border-gray-200 rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div className="flex mt-6">
                      <input
                        type="number"
                        placeholder="Enter your Phone number"
                        className="block w-full px-5 py-3 mt-2 text-white bg-blackshade border border-gray-200 rounded-md  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div className="w-full mt-6">
                      <textarea
                        className="block w-full h-32 px-5 py-3 mt-2 text-white placeholder-white bg-blackshade border border-gray-200 rounded-md md:h-48 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        placeholder="Go ahead we are with you"></textarea>
                    </div>

                    <button className="w-1/5 px-2 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className=" container mx-auto py-40 overflow-hidden rounded-lg lg:col-span-2 h-full lg:h-auto">
            <iframe
              className="w-full h-96"
              frameBorder="0"
              title="map"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.5030724311264!2d8.884882874161992!3d9.891992074885687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1053a17498e6e039%3A0x3382074082a6bc6!2sGunda%20Printing%20Press!5e0!3m2!1sen!2sus!4v1698971937501!5m2!1sen!2sus">

              </iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
