import React from "react";
import HeroBanner from "../components/sections/HeroBanner";
import OnlineCounselling from "../components/sections/OnlineCounselling";
import SuccessStories from "../components/sections/SuccessStories";
import Blogs from "../components/sections/Blogs";

function Home() {
  return (
    <>
      <HeroBanner />
      <OnlineCounselling />
      <SuccessStories />
      <Blogs />
    </>
  );
}

export default Home;
