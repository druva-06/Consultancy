import { Link } from "react-router-dom";
import logo from "../../assets/img/logo/secondary_logo.png";

export default function Footer() {
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
                      <Link to="/study-aboard/usa">Study in USA</Link>
                    </li>
                    <li>
                      <Link to="/study-aboard/australia">Study in Australia</Link>
                    </li>
                    <li>
                      <Link to="/study-aboard/canada">Study in Canada</Link>
                    </li>
                    <li>
                      <Link to="/study-aboard/uk">Study in UK</Link>
                    </li>
                    <li>
                      <Link to="/study-aboard/italy">Study in Italy</Link>
                    </li>
                    <li>
                      <Link to="/study-aboard/ireland">Study in Ireland</Link>
                    </li>
                    <li>
                      <Link to="/study-aboard/germany">Study in Germany</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="footer-widget widget_nav_menu">
                  <h4 className="fw-title">Study India</h4>
                  <ul className="list-wrap">
                    <li>
                      <Link to="/study-india/bangalore">Study in Bangalore</Link>
                    </li>
                    <li>
                      <Link to="/study-india/delhi">Study in Delhi</Link>
                    </li>
                    <li>
                      <Link to="/study-india/mumbai">Study in Mumbai</Link>
                    </li>
                    <li>
                      <Link to="/study-india/hyderabad">Study in Hyderabad</Link>
                    </li>
                    <li>
                      <Link to="/study-india/kolkata">Study in Kolkata</Link>
                    </li>
                    <li>
                      <Link to="/study-india/jaipur">Study in Jaipur</Link>
                    </li>
                    <li>
                      <Link to="/study-india/chennai">Study in Chennai</Link>
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
