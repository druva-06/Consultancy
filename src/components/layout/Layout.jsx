import { useEffect, useState } from "react";
import DataBg from "../elements/DataBg";
// import Breadcrumb from './Breadcrumb'
// import PageHead from './PageHead'
import Header from "./Header";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
import { Outlet } from "react-router-dom";

export default function Layout({
  headTitle,
  breadcrumbTitle,
}) {
  const [scroll, setScroll] = useState(0);
  // Moblile Menu
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu
      ? document.body.classList.add("mobile-menu-visible")
      : document.body.classList.remove("mobile-menu-visible");
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, []);

  return (
    <>
      <Header
        scroll={scroll}
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
      />

      <main className="main-area fix">
        {/* {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />} */}

        <Outlet />
      </main>
      <Footer />
      <DataBg />
    </>
  );
}
