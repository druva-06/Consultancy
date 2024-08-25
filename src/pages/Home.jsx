import React from "react";
import HeroBanner from "../components/sections/HeroBanner";
import OnlineCounselling from "../components/sections/OnlineCounselling";
import StudentGallery from "../components/sections/StudentGallery";
import Blogs from "../components/sections/Blogs";
import ListOfEvents from "../components/sections/ListOfEvents";

function Home() {
  return (
    <>
      <HeroBanner />
      <OnlineCounselling />
      <StudentGallery />
      <ListOfEvents />
      <Blogs />
    </>
  );
}

export default Home;
