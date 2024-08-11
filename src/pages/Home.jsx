import React from "react";
import Layout from "../components/layout/Layout";
import OnlineCounselling from "../components/sections/OnlineCounselling";
import SuccessStories from "../components/sections/SuccessStories";
import Blogs from "../components/sections/Blogs";

function Home() {
  return (
    <>
      <OnlineCounselling />
      <SuccessStories />
      <Blogs/>
    </>
  );
}

export default Home;
