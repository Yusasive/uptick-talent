
import React from "react";
import { HeroSection } from "./HeroSection";
import { Commitment } from "./Commitment";
import FindYourTalent from "./FindYourTalent";
import WhyUptickMap from "./WhyUptickMap";
import Timeline from "./Timeline";
import CTA from "./CTA";

const page: React.FC = () => {
  return (
    <div className="bg-uptickbackground">
      <CTA />
      <HeroSection />
      <Commitment />
      <WhyUptickMap />
      <Timeline />
      <FindYourTalent />
    </div>
  );
};

export default page;
