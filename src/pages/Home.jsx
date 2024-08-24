import React from "react";
import HeroBanner from "../components/sections/HeroBanner";
import OnlineCounselling from "../components/sections/OnlineCounselling";
import SuccessStories from "../components/sections/SuccessStories";
import Blogs from "../components/sections/Blogs";
import LiveEvents from "../components/sections/LiveEvents";

function Home() {
  return (
    <>
      <HeroBanner />
      <OnlineCounselling />
      <SuccessStories />
      <LiveEvents />
      <Blogs />
    </>
  );
}

export default Home;
