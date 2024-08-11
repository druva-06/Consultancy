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
                      <a href="/">
                        <img
                          src="/assets/img/logo/secondary_logo.png"
                          alt="img"
                        />
                      </a>
                    </div>
                    <p>
                      when an unknown printer took galley of type and scrambled
                      it to make pspecimen bookt has.
                    </p>
                    <ul className="list-wrap m-0 p-0">
                      <li className="address">463 7th Ave, NY 10018, USA</li>
                      <li className="number">+123 88 9900 456</li>
                      <li className="socials">
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fab fa-whatsapp" />
                        </a>
                        <a href="#">
                          <i className="fab fa-aedin-in" />
                        </a>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="footer-widget widget_nav_menu">
                  <h4 className="fw-title">Resources</h4>
                  <ul className="list-wrap">
                    <li>
                      <a href="/about-us">About</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                    <li>
                      <a href="/contact">Help Center</a>
                    </li>
                    <li>
                      <a href="#">Refund</a>
                    </li>
                    <li>
                      <a href="#">Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="footer-widget widget_nav_menu">
                  <h4 className="fw-title">Courses</h4>
                  <ul className="list-wrap">
                    <li>
                      <a href="/courses">Life Coach</a>
                    </li>
                    <li>
                      <a href="/courses">Business Coach</a>
                    </li>
                    <li>
                      <a href="/courses">Health Coach</a>
                    </li>
                    <li>
                      <a href="/courses">Development</a>
                    </li>
                    <li>
                      <a href="/courses">Web Design</a>
                    </li>
                    <li>
                      <a href="/courses">SEO Optimize</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="footer-widget">
                  <h4 className="fw-title">Working Hours</h4>
                  <div className="footer__working-list">
                    <div className="footer__working-item">
                      <span className="day">Mon - Fri</span>
                      <span className="time">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="footer__working-item">
                      <span className="day">Mon - Fri</span>
                      <span className="time">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="footer__working-item">
                      <span className="day">Mon - Fri</span>
                      <span className="time">10:00 AM - 8:00 PM</span>
                    </div>
                  </div>
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
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms Conditions</a>
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
