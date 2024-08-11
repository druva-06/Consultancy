import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import Home from "./pages/Home";
import Preloader from "./components/elements/Preloader";
import Colleges from "./pages/Colleges";
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

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    AOS.init({
      duration: 1000,
      mirror: true,
      once: true,
      disable: "mobile",
    });
  }, []);

  return (
    <>
      {!loading ? (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/colleges" element={<Colleges />} />
            <Route path="*" element={<Custom404 />} />
          </Route>
        </Routes>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default App;
