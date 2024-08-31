import { Link } from "react-router-dom";
import CourseSlider from "../components/slider/CourseSlider";
import collegeImg from "../assets/img/instructor/instructor_details_img.jpg";
import cat01 from  '../assets/img/others/cat01.jpg'
import cat02 from  '../assets/img/others/cat02.jpg'
import cat03 from  '../assets/img/others/cat03.jpg'
import cat04 from  '../assets/img/others/cat04.jpg'

export default function CollegeDetails() {
  return (
    <>
      <div>
        <section className="instructor-details-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="instructor-details-wrap">
                  <div className="instructor-details-img">
                    <img src={collegeImg} alt="img" />
                  </div>
                  <div className="instructor-details-content">
                    <div className="content-top">
                      <div className="left-side-content">
                        <h2 className="title">Jenny Wilson</h2>
                        <span>Graphic Designer</span>
                      </div>
                      <div className="instructor-details-social">
                        <ul className="list-wrap">
                          <li>
                            <Link href="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-whatsapp" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-youtube" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="instructor-info-wrap">
                      <ul className="list-wrap">
                        <li>
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          (4.2 Reviews)
                        </li>
                        <li>
                          <i className="flaticon-email" />
                          <Link href="mailto:info@gmail.com">
                            info@gmail.com
                          </Link>
                        </li>
                        <li>
                          <i className="flaticon-group-1" />
                          1,135 Students
                        </li>
                        <li>
                          <i className="flaticon-file" />
                          12 Courses
                        </li>
                      </ul>
                    </div>
                    <div className="bio-content">
                      <h4 className="title">Short Bio:</h4>
                      <p>
                        suada faci lisis Lorem ipsum dolarorit more ametion
                        consectetur elit. Vesti bulum a nec odio aea theawr dumm
                        ipsumm ipsum that dolocons rsus suada and fadolorit
                        consectetur elit. All the Lorem Ipsum generators on
                        their the Internet tend repeat predefined chunks dumme
                        lisis Lorem.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-area section-py-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="contact-info-wrap">
                  <h2 className="title">Keep In Touch With Us</h2>
                  <p>
                    Neque convallis cras semper auctor. Libero id faucibus
                    getnvallis.id faucibus nisl tincidunt egetnvallis.
                  </p>
                  <ul className="list-wrap">
                    <li>
                      <div className="icon">
                        <i className="flaticon-pin-1" />
                      </div>
                      <div className="content">
                        <p>
                          68 Street Holakt Street world <br /> 10002 New York
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-phone-call" />
                      </div>
                      <div className="content">
                        <Link href="tel:0123456789">+123 555 69090</Link>
                        <Link href="tel:0123456789">+123 555 69090</Link>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-email" />
                      </div>
                      <div className="content">
                        <Link href="mailto:info@gmail.com">info@gmail.com</Link>
                        <Link href="mailto:info@gmail.com">info@gmail.com</Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="contact-form-wrap">
                  <h4 className="title">Get in Touch</h4>
                  <form
                    id="contact-form"
                    action="assets/mail.php"
                    method="POST"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            name="name"
                            type="text"
                            placeholder="Name *"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            name="email"
                            type="email"
                            placeholder="E-mail *"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            name="phone"
                            type="number"
                            placeholder="Phone *"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            name="subject"
                            type="text"
                            placeholder="Your Subject *"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-grp">
                      <textarea name="message" placeholder="Message" required />
                    </div>
                    <button type="submit" className="btn">
                      Send Message
                    </button>
                  </form>
                  <p className="ajax-response mb-0" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="courses-area-three instructor-courses-area">
          <div className="container">
            <div className="courses-title">
              <h4 className="title">My Courses</h4>
            </div>
            <CourseSlider />
          </div>
        </section> */}
        <section className="categories-area section-pt-120 section-pb-90">
          <div className="container">
            <div className="row align-items-center justify-content-center mb-55">
              <div className="col-xl-7 col-lg-8 col-md-10">
                <div className="categories__title-wrap text-center text-lg-start m-0">
                  <div className="section__title mb-0">
                    <span className="sub-title">Unique online courses</span>
                    <h2 className="title tg-svg">
                      Browse By{" "}
                      <span className="position-relative">
                        <span
                          className="svg-icon"
                          id="svg-5"
                          data-svg-icon="assets/img/icons/title_shape.svg"
                        />
                        Categories
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-4 col-md-6">
                <div className="tg-button-wrap mt-4 mt-lg-0 justify-content-center justify-content-lg-end">
                  <Link href="/courses" className="btn btn-border tg-svg">
                    <span className="text">All Categories</span>{" "}
                    <span
                      className="svg-icon"
                      id="svg-6"
                      data-svg-icon="assets/img/icons/btn-arrow.svg"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="row justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
              <div className="col">
                <div className="categories__item-three">
                  <Link href="/courses">
                    <div className="thumb">
                      <img src={cat01} alt="img" />
                    </div>
                    <div className="info">
                      <div className="list">
                        <span className="courses">19 Courses</span>
                      </div>
                      <div className="list">
                        <span className="name">Graphic Design</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="categories__item-three">
                  <Link href="/courses">
                    <div className="thumb">
                      <img src={cat02} alt="img" />
                    </div>
                    <div className="info">
                      <div className="list">
                        <span className="courses">22 Courses</span>
                      </div>
                      <div className="list">
                        <span className="name">Digital Marketing</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="categories__item-three">
                  <Link href="/courses">
                    <div className="thumb">
                      <img src={cat03} alt="img" />
                    </div>
                    <div className="info">
                      <div className="list">
                        <span className="courses">40 Courses</span>
                      </div>
                      <div className="list">
                        <span className="name">Finance Banking</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="categories__item-three">
                  <Link href="/courses">
                    <div className="thumb">
                      <img src={cat04} alt="img" />
                    </div>
                    <div className="info">
                      <div className="list">
                        <span className="courses">24 Courses</span>
                      </div>
                      <div className="list">
                        <span className="name">Development</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="categories__shapes-two">
            <div className="categories__shapes-item-two rotateme">
              <img
                src="/assets/img/objects/categories_shape05.png"
                alt="shape"
              />
            </div>
            <div className="categories__shapes-item-two" data-aos="fade-up">
              <img
                src="/assets/img/objects/categories_shape02.png"
                alt="shape"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
