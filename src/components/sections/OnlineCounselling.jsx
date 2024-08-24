import onlineImage from "../../assets/img/others/online_img.jpg";

export default function OnlineCounselling() {
  return (
    <>
      <section className="online-area tg-motion-effects">
        <div className="container max-width-800">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-5">
              <div className="online__content">
                <div className="section__title">
                  <span className="sub-title">Unique online courses</span>
                  <h2 className="title">
                    Online Learning <br /> Courses Designed <br /> For Real Life
                  </h2>
                </div>
                <p>
                  Borem ipsum dolor sit amet, consectetur adipiscing eliawe awUt
                  elit ellus, luctus nec ullamcorper mattisBorem ipsum dolor
                  awes atnse awctetur.
                </p>
                <div className="tg-button-wrap">
                  <a href="/courses" className="btn tg-svg">
                    <span className="text">Register</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="online__image-wrap">
                <div className="main-img">
                  <img src={onlineImage} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
