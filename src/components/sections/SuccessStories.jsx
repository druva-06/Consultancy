import onlineImage from "../../assets/img/others/about_img04.jpg";

export default function SuccessStories() {
  return (
    <section className="about-area-two grey-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6">
            <div className="about__title-wrap">
              <div className="section__title">
                <span className="sub-title">Who we are</span>
                <h2 className="title tg-svg">
                  The Leading Global{" "}
                  <span className="position-relative">
                    <span
                      className="svg-icon"
                      id="about-svg"
                      data-svg-icon="assets/img/icons/title_shape.svg"
                    />
                    Marketplace
                  </span>{" "}
                  for Learning and Instruction
                </h2>
              </div>
              <p className="fw-medium">
                Borem ipsum dolor sit amet, consectetur adipiscing eliawe ellus
                luctus nec ullamcorper mattisBorem
              </p>
              <p>
                Bipsum dolor awtnse awctetur adipis we followelit. Borem.Borem
                ipsum dolamet consectetur adipiscing eliawe awUt elit ellutnse
                awcon sectetur adipiscing ectetur.
              </p>
              <div className="tg-button-wrap">
                <a href="/courses" className="btn tg-svg">
                  <span className="text">Explore Courses</span>{" "}
                  <span
                    className="svg-icon"
                    id="about-btn"
                    data-svg-icon="assets/img/icons/btn-arrow.svg"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 col-md-11">
            <div className="about__images-wrap">
              <div className="column">
                <img src={onlineImage} alt="img" />
                <img src={onlineImage} alt="img" />
              </div>
              <div className="column">
                <img src={onlineImage} alt="img" />
                <img src={onlineImage} alt="img" />
              </div>
              <div className="about__shapes">
                <img
                  src="/assets/img/objects/about_shape01.png"
                  alt="img"
                  className="about-shape-01"
                  data-aos="fade-down-left"
                />
                <img
                  src="/assets/img/objects/about_shape02.png"
                  alt="img"
                  className="about-shape-02"
                  data-aos="fade-up-right"
                />
                <img
                  src="/assets/img/objects/about_shape03.png"
                  alt="img"
                  className="about-shape-03 rotateme"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
