import React from "react";
import HeroBanner from "../components/sections/HeroBanner";
import OnlineCounselling from "../components/sections/OnlineCounselling";
import StudentGallery from "../components/sections/StudentGallery";
import Blogs from "../components/sections/Blogs";
import Universities from "../components/sections/Universities";
import ListOfEvents from "../components/sections/ListOfEvents";

function Home() {
  return (
    <>
      <HeroBanner />
      <OnlineCounselling />
      <StudentGallery />
      <Universities/>
      <ListOfEvents />
      <Blogs />
    </>
  );
}

export default Home;
