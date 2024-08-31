import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Preloader from "./components/elements/Preloader";
import AbroadColleges from "./pages/AbroadColleges";
import Layout from "./components/layout/Layout";
import "aos/dist/aos.css";
import "./assets/css/animate.min.css";
import "./assets/css/aos.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/default-icons.css";
import "./assets/css/flaticon-eduvalt.css";
import "./assets/css/fontawesome-all.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/main.css";
import "./assets/css/odometer.css";
import "./assets/css/select2.min.css";
import "./assets/css/spacing.css";
import "./assets/css/tg-cursor.css";
import Custom404 from "./pages/404";
import IndiaColleges from "./pages/IndiaColleges";
import OnlineColleges from "./pages/OnlineColleges";
import ContactUs from "./pages/ContactUs";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true,
      once: true,
      disable: "mobile",
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-us" element={<AboutUs breadcrumbTitle="About Us"/>} />
          <Route exact path="/contact-us" element={<ContactUs breadcrumbTitle="Contact with Us"/>} />
          <Route
            path="/study-abroad"
            element={
              <AbroadColleges
                collegeType={{ id: "study-abroad", title: "Study Abroad" }}
              />
            }
          />
          <Route
            path="/study-india"
            element={
              <IndiaColleges
                collegeType={{ id: "study-india", title: "Study India" }}
              />
            }
          />
          <Route
            path="/study-online"
            element={
              <OnlineColleges
                collegeType={{ id: "study-online", title: "Study Online" }}
              />
            }
          />
          <Route path="*" element={<Custom404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
