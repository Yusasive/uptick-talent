import React from "react";
import Marquee from "react-fast-marquee";

const HomeContact: React.FC = () => {
  return (
    <section className="text-white">
      <Marquee className="text-white my-8 text-xl font-light bg-uptickbackground border-x-0 border-2 h-12 border-y-gray-500">
        Let's Connect ++ Let's Connect ++ Let's Connect ++ Let's Connect ++
        Let's Connect ++ Let's Connect ++ Let's Connect ++ Let's Connect ++
        Let's Connect ++ Let's Connect ++
      </Marquee>
      <div className="mx-auto flex flex-col items-center justify-center p-4 space-y-6 md:p-10 md:px-10 xl:px-12">
        <p className="pt-2 pb-2 text-xl font-medium text-center">
          Have questions or need assistance? <br /> We're here to help. Reach
          out to us via email or our contact form.
        </p>
        <button className="px-8 py-3 text-md  font-medium rounded bg-white hover:bg-uptickblue10 text-uptickblue100">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default HomeContact;
