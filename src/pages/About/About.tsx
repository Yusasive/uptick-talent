import Achievements from "./Achievements";
import Hero from "./Hero";
import Journey from "./Journey";
import Values from "./Values";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <Values />
      <Achievements />
      <Journey />
    </>
  );
};

export default page;
