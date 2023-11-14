import React from "react";
import BusinessComponent from "../../../components/Business.Component";
import Button from "../../../components/Button";
import Hero from "../../../components/Hero";


interface ChooseStartupSchool {
  title: string;
  description: string;
  iconSrc: string;
}

interface HelpVenture {
  title: string;
  description: string;
}

const items: ChooseStartupSchool[] = [
  {
    title: "Global Enterprise",
    description:
      "We bring together exceptional experts and founders from across the world to guide and mentor our Startup School participants.",
    iconSrc: "arrow-business.svg",
  },
  {
    title: "Practical Insights",
    description:
      "Our curriculum is built on real-world experiences and tailored to help you overcome the obstacles that startups commonly face.",
    iconSrc: "arrow-business.svg",
  },
  {
    title: "Networking Opportunities",
    description:
      "Connect with a diverse community of fellow entrepreneurs, investors, and mentors to build lasting relationships and partnerships.",
    iconSrc: "arrow-business.svg",
  },
  {
    title: "Pitch and Launch",
    description:
      "Hone your pitching skills and present your startup idea to potential investors and partners at the culmination of the program.",
    iconSrc: "arrow-business.svg",
  },
];

const helps: HelpVenture[] = [
  {
    title: "Strategic Guidance: ",
    description:
      "Our team of experts will work closely with you to create a customized scaling strategy that aligns with your business goals",
  },
  {
    title: "Access to Resources: ",
    description:
      "Gain access to a network of resources, including capital, technology, and talent, to fuel your growth.",
  },
  {
    title: "Market Expansion: ",
    description:
      " Explore new markets and expand your reach, both domestically and internationally, with our market entry support.",
  },
  {
    title: "Product Development: ",
    description:
      "Fine-tune your product or service offerings to meet changing market demands and stay ahead of the competition.",
  },
  {
    title: "Operational Excellence: ",
    description:
      " Optimize your operations and achieve efficiency for sustainable, long-term growth.",
  },
];

const Business = () => {
  return (
    <div style={{ overflowY: "auto", height: "100vh" }}>
      <div className="hero-section">
        <Hero
          backgroundImage="/hero-business.svg"
          heading="Uptick Talent Business"
          paragraph="Embark on a journey through technology with our engineering, design and other non-technical programs. Elevate your skills and career.!"
          buttonText="Apply Now"
        />
      </div>
      <div className="unleash-section bg-white p-16 pl-6 pr-6">
        <BusinessComponent
          imageLeft="unleash-business.svg"
          title="Unleash Your Enterpreneurial Potential"
          description="At Uptick Talent Business, we believe in the transformative power of innovation and entrepreneurship."
          description1=" We are passionate about the concept of African Dynamism and firmly believe that supporting startup innovation is critical for the growth of the African continent. "
          subDescription=" Our vision is to help founders build companies that align with continental interests in sectors such as financial services, education, culture, agriculture, supply chain, industrials, and manufacturing."
        />
      </div>
      <div className="commitment-section bg-uptickblue90 text-black p-10">
        <div className="commitment bg-black  border border-gray-400 rounded-xl text-white">
          <BusinessComponent
            imageRight="commitment-business.svg"
            title="Our Commitment"
            description="We are committed to identifying and supporting mission-driven and civic-minded founders who are passionate about solving crucial national and continental problems. "
            description1="These visionary founders often build companies that transcend verticals and business models. The success of these companies not only elevates the founders but also contributes to the flourishing of all Africans."
          />
        </div>
      </div>
      <div className="startup bg-uptickneutral10 p-10 pl-6 pr-6">
        <BusinessComponent
          imageLeft="startup-business.svg"
          title="Startup School"
          subTitle="What is Startup School?"
          description="At Uptick Talent, we understand that the journey of entrepreneurship can be both exciting and challenging. "
          description1="Our Startup School is an intense, practical virtual program designed to equip aspiring entrepreneurs with the skills, knowledge, and resources they need to launch their dreams and scale rapidly."
        />
      </div>

      <div className="startup-school p-10 bg-white text-black">
        <h2 className="startup-title text-2xl md:text-3xl lg:text-4xl font-bold pb-6">
          Why Choose Startup School
        </h2>
        {items.map((item, index) => (
          <div
            className={`item${index + 1} flex flex-row pb-10 pt-6 `}
            key={index}
          >
            <div className="icon flex items-center">
              <img src={item.iconSrc} alt="" />
            </div>
            <div className="text-content flex items-center ml-8">
              <div>
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl pb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-lg lg:text-xl">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="power bg-black text-white p-20 pl-6 pr-6">
        <BusinessComponent
          imageRight="power-business.svg"
          title="The Power of African Dynamism"
          description="At Uptick Talent, we are passionate about the concept of 'African Dynamism.' This term encapsulates our belief in the untapped potential of the African continent.By supporting startup innovation, we aim to be a catalyst for progress in sectors that matter most to Africa's growth and development."
          description1="Are you ready to embark on your entrepreneurial journey? Join our Startup School, and let's transform your ideas into thriving businesses."
        />
        <div className="btn pl-6">
          <Button title="Apply Now" />
        </div>
      </div>

      <div className="venture bg-uptickblue80 flex flex-col sm:flex-row justify-center p-10 pr-6 pl-6">
        <div className="text-white pr-4 w-full sm:w-1/2 text-center sm:text-left pt-6 mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold pb-2">
            Venture Building Services
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-xl mb-10">
            Scale Your Innovation
          </p>
          <h5 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mt-4 mb-10">
            What are Venture Building Services?
          </h5>
          <p className="text-xs sm:text-sm md:text-base lg:text-xl mt-2">
            Once your startup idea is off the ground, the journey is far from
            over. That&apos;s where our Venture Building Services come in. We
            offer a range of strategic and practical support services to help
            businesses scale their innovative ideas and achieve their full
            potential.
          </p>
        </div>

        <div className="venture-right w-full sm:w-1/2 mx-auto bg-white p-10 rounded-xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold pb-6">
            How Can We Help:
          </h2>
          {helps.map((help, index) => (
            <div
              className={`item${index + 1} flex flex-row pb-4 pt-4 `}
              key={index}
            >
              <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                <b>{help.title}</b>
                {help.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="african bg-black text-white p-20 pl-6 pr-6">
        <BusinessComponent
          imageRight="african-business.svg"
          title="The Power of African Dynamism"
          description="By availing our Venture Building Services, you become a vital part of the African Dynamism movement. Together, we are shaping the future of the African continent by nurturing innovation and supporting businesses that drive change in their respective sectors."
          description1="Ready to take your business to new heights? Partner with us to access the Venture Building Services you need for success."
        />
        <div className="btn pl-6">
          <Button title="Contact Us" />
        </div>
      </div>

      <div className="sm:w-full p-28 pl-10 pr-10 bg-black text-white bg-gradient-to-t from-uptickblue80 flex items-center justify-center flex-col">
        <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
          Join Us in Building <br /> the Future
        </h1>
        <p className="text-center max-w-prose text-base md:text-lg lg:text-xl mb-4">
          Uptick Talent Business is committed to fostering innovation,
          supporting founders, and helping businesses scale their visionary
          ideas. Our Startup School and Venture Building Services are your
          gateways to a world of opportunities and growth. Join us, and
          together, we&apos;ll shape the future of business and technology.
        </p>
        <p className="text-center max-w-prose text-base md:text-lg lg:text-xl mb-4">
          Don&apos;t miss out on this exciting journey. Apply now, and
          let&apos;s turn your ideas into reality and scale your innovative
          business to new horizons.
        </p>
        <div>
          <Button title="Apply Now" />
        </div>
      </div>
    </div>
  );
};

export default Business;
