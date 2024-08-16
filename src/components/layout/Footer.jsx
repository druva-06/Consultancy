import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo/secondary_logo.png";
import { addCountry } from "../../features/abroadEducation/abroadEducationFilterSlice";
import { countryCheck } from "../../features/abroadEducation/abroadEducationSlice";
import { addCity } from "../../features/indiaEducation/indiaEducationFilterSlice";
import { cityCheck } from "../../features/indiaEducation/indiaEducationSlice";
import { clearAbroadStoreFilters } from "../../features/utils/abroadUtils";
import { clearIndiaStoreFilters } from "../../features/utils/indiaUtils";
import { useDispatch } from "react-redux";

export default function Footer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAbroadNavigate = (countryId, countryValue) => {
    clearAbroadStoreFilters(dispatch);
    dispatch(addCountry(countryValue));
    dispatch(countryCheck(countryId));
  };

  const handleIndiaNavigate = (cityId, cityValue) => {
    clearIndiaStoreFilters(dispatch);
    dispatch(addCity(cityValue));
    dispatch(cityCheck(cityId));
  };

  return (
    <>
      <footer className="footer-bg" data-bg-color="var(--tg-common-color-dark)">
        <div className="footer__top-wrap">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="footer-widget">
                  <div className="footer__about">
                    <div className="footer__logo logo">
                      <Link to="/">
                        <img src={logo} alt="img" />
                      </Link>
                    </div>
                    <p>
                      when an unknown printer took galley of type and scrambled
                      it to make pspecimen bookt has.
                    </p>
                    <ul className="list-wrap m-0 p-0">
                      <li className="address">463 7th Ave, NY 10018, USA</li>
                      <li className="number">+123 88 9900 456</li>
                      <li className="socials">
                        <Link to="/">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link to="/">
                          <i className="fab fa-twitter" />
                        </Link>
                        <Link to="/">
                          <i className="fab fa-whatsapp" />
                        </Link>
                        <Link to="/">
                          <i className="fab fa-aedin-in" />
                        </Link>
                        <Link to="/">
                          <i className="fab fa-youtube" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="footer-widget widget_nav_menu">
                  <h4 className="fw-title">Quick Links</h4>
                  <ul className="list-wrap">
                    <li>
                      <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link to="/explore">Explore</Link>
                    </li>
                    <li>
                      <Link to="/funds">Funds</Link>
                    </li>
                    <li>
                      <Link to="/events">Events</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                      <Link to="/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="footer-widget widget_nav_menu">
                  <h4 className="fw-title">Study Aboard</h4>
                  <ul className="list-wrap">
                    <li>
                      <Link
                        to="/study-abroad"
                        onClick={() => handleAbroadNavigate(1, "usa")}
                      >
                        Study in USA
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/study-abroad"
                        onClick={() => handleAbroadNavigate(2, "australia")}
                      >
                        Study in Australia
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/study-abroad"
                        onClick={() => handleAbroadNavigate(3, "canada")}
                      >
                        Study in Canada
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/study-abroad/"
                        onClick={() => handleAbroadNavigate(4, "uk")}
                      >
                        Study in UK
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/study-abroad"
                        onClick={() => handleAbroadNavigate(5, "italy")}
                      >
                        Study in Italy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/study-abroad"
                        onClick={() => handleAbroadNavigate(6, "ireland")}
                      >
                        Study in Ireland
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/study-abroad"
                        onClick={() => handleAbroadNavigate(7, "germany")}
                      >
                        Study in Germany
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="footer-widget widget_nav_menu">
                  <h4 className="fw-title">Study India</h4>
                  <ul className="list-wrap">
                    <li>
                      <Link
                        to="/study-india"
                        onClick={() => handleIndiaNavigate(1, "delhi")}
                      >
                        Study in Delhi
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/study-india"
                        onClick={() => handleIndiaNavigate(2, "mumbai")}
                      >
                        Study in Mumbai
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/study-india"
                        onClick={() => handleIndiaNavigate(3, "bangalore")}
                      >
                        Study in Bangalore
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/study-india"
                        onClick={() => handleIndiaNavigate(4, "hyderabad")}
                      >
                        Study in Hyderabad
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/study-india"
                        onClick={() => handleIndiaNavigate(5, "pune")}
                      >
                        Study in Pune
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/study-india"
                        onClick={() =>
                          handleIndiaNavigate(6, "himachal-pradesh")
                        }
                      >
                        Study in Himaclal Pradesh
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/study-india"
                        onClick={() => handleIndiaNavigate(7, "dehradun")}
                      >
                        Study in Dehradun
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/study-india"
                        onClick={() => handleIndiaNavigate(8, "andhra-pradesh")}
                      >
                        Study in Andhra Pradesh
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright__wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="copyright__text">
                  <p>
                    Copyright © {new Date().getFullYear()} eduvalt. All rights
                    reserved.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="copyright__menu">
                  <ul className="list-wrap d-flex flex-wrap justify-content-center justify-content-lg-end">
                    <li>
                      <Link to="#">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="#">Terms Conditions</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
