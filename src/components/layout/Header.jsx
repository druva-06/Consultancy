import MobileMenu from "./MobileMenu";
import logo from "../../assets/img/logo/logo.png";
import cart from "../../assets/img/icons/cart.svg";
import { Link } from "react-router-dom";

export default function Header({ scroll, isMobileMenu, handleMobileMenu }) {
  return (
    <>
      <header>
        <div
          id="sticky-header"
          className={`tg-header__area transparent-header ${
            scroll ? "sticky-menu" : ""
          }`}
        >
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="tg-flaticon-menu-1" />
                </div>
                <div className="tgmenu__wrap">
                  <nav className="tgmenu__nav">
                    <div className="logo">
                      <Link to="/">
                        <img src={logo} alt="Logo" />
                      </Link>
                    </div>
                    <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                      <ul className="navigation">
                        <li>
                          <Link to="/about-us">About Us</Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link to="/">Explore</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/study-abroad">Study Abroad</Link>
                            </li>
                            <li>
                              <Link to="/study-india">Study India</Link>
                            </li>
                            <li>
                              <Link to="/study-online">Study Online</Link>
                            </li>
                            <li>
                              <Link to="/jobs">Jobs</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/universities">Universities</Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link to="/funds">Funds</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/funds/education-loan-support">
                                Education Loan Support
                              </Link>
                            </li>
                            <li>
                              <Link to="funds/student-credit-cards">
                                Student Credit Cards
                              </Link>
                            </li>
                            <li>
                              <Link to="funds/forex-card-support">
                                Forex Card Support
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link to="/events">Events</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/events/group-discussions">
                                Group Discussions
                              </Link>
                            </li>
                            <li>
                              <Link to="/events/live-events">Live Events</Link>
                            </li>
                            <li>
                              <Link to="/events/in-house-events">
                                In-House Events
                              </Link>
                            </li>
                            <li>
                              <Link to="/events/career-sessions">
                                Career Sessions
                              </Link>
                            </li>
                            <li>
                              <Link to="/events/guest-lectures">
                                Guest Lectures
                              </Link>
                            </li>
                            <li>
                              <Link to="/events/workshops">Workshops</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link to="/services">Services</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/services/profile-development">
                                Profile Development
                              </Link>
                            </li>
                            <li>
                              <Link to="/services/course-selection">
                                Course Selection
                              </Link>
                            </li>
                            <li>
                              <Link to="/services/interview-preparation">
                                Interview Preparation
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/blogs">Blogs</Link>
                        </li>
                        <li>
                          <Link to="/contact-us">Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="tgmenu__action">
                      <ul className="list-wrap">
                        <li className="mini-cart-icon">
                          <Link to="/cart" className="cart-count">
                            <img src={cart} alt="cart" />
                            <span className="mini-cart-count">0</span>
                          </Link>
                        </li>
                        <li className="header-btn login-btn">
                          <Link to="/login" className="btn">
                            Log in
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                {/* Mobile Menu  */}
                <div className="tgmobile__menu">
                  <nav className="tgmobile__menu-box">
                    <div className="close-btn" onClick={handleMobileMenu}>
                      <i className="tg-flaticon-close-1" />
                    </div>
                    <div className="nav-logo">
                      <Link to="/">
                        <img src={logo} alt="Logo" />
                      </Link>
                    </div>
                    <div className="tgmobile__menu-outer">
                      <MobileMenu />
                    </div>
                    <div className="tgmenu__action">
                      <ul className="list-wrap">
                        <li className="header-btn login-btn">
                          <Link to="/" className="btn">
                            Log in
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div
                  className="tgmobile__menu-backdrop"
                  onClick={handleMobileMenu}
                />
                {/* End Mobile Menu */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
