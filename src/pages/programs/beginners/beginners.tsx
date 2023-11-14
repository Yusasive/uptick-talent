import Button from "../../../components/Button";
import Hero from "../../../components/Hero";
import PreFooter from "../../../components/PreFooter";
import Choose from "./Choose";
import Curiosity from "./Curiosity";
import Offer from "./Offer";

const page = () => {
  return (
    <div>
      <div className="hero-section">
        <Hero
          backgroundImage="/beginnerHero.png"
          heading="Uptick Talent Beginners"
          paragraph="Welcome to the Uptick Talent Beginners Program where young minds ignite their journey into the world of technology and business."
          buttonText="Learn More"
        />
      </div>
      <Curiosity />
      <Offer />
      <Choose />
      <PreFooter
        heading="Learn More"
        paragraph="Are you interested in learning more, kindly reach out to us below, and our team will gladly guide you through."
      />
    </div>
  );
};

export default page;
