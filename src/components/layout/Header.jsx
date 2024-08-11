import MobileMenu from "./MobileMenu";
import logo from "../../assets/img/logo/logo.png";
import cart from "../../assets/img/icons/cart.svg";

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
                      <a href="/">
                        <img src={logo} alt="Logo" />
                      </a>
                    </div>
                    <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                      <ul className="navigation">
                        <li className="">
                          <a href="/">About Us</a>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="/">Explore</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="/courses">All Courses</a>
                            </li>
                            <li>
                              <a href="/course-details">Course Details</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="/">Funds</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="/about-us">About Us</a>
                            </li>
                            <li>
                              <a href="/instructors">Our Instructors</a>
                            </li>
                            <li>
                              <a href="/instructor-details">
                                Instructor Details
                              </a>
                            </li>
                            <li>
                              <a href="/mentors">Our Mentors</a>
                            </li>
                            <li>
                              <a href="/events">Our Events</a>
                            </li>
                            <li>
                              <a href="/events-details">Event Details</a>
                            </li>
                            <li>
                              <a href="/faq">Asked Question</a>
                            </li>
                            <li>
                              <a href="/404">404 Page</a>
                            </li>
                            <li>
                              <a href="/contact">contact</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="/">Events</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="/shop">Shop Page</a>
                            </li>
                            <li>
                              <a href="/shop-details">Shop Details</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="/">Services</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="/blog-grid">Blog Grid</a>
                            </li>
                            <li>
                              <a href="/blog">Blog Standard</a>
                            </li>
                            <li>
                              <a href="/blog-details">Blog Details</a>
                            </li>
                          </ul>
                        </li>
                        <li className="">
                          <a href="/">Blog</a>
                        </li>
                        <li className="">
                          <a href="/">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                    <div className="tgmenu__action">
                      <ul className="list-wrap">
                        <li className="mini-cart-icon">
                          <a href="/shop" className="cart-count">
                            <img src={cart} alt="cart" />
                            <span className="mini-cart-count">0</span>
                          </a>
                        </li>
                        <li className="header-btn login-btn">
                          <a href="/contact" className="btn">
                            Log in
                          </a>
                        </li>
                        <li className="header-btn free-btn">
                          <a href="/contact" className="btn">
                            Try For Free
                          </a>
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
                      <a href="/">
                        <img src={logo} alt="Logo" />
                      </a>
                    </div>
                    <div className="tgmobile__menu-outer">
                      <MobileMenu />
                    </div>
                    <div className="tgmenu__action">
                      <ul className="list-wrap">
                        <li className="header-btn login-btn">
                          <a href="/" className="btn">
                            Log in
                          </a>
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
