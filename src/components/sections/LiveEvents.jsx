import onlineImage from "../../assets/img/others/online_img.jpg";
export default function LiveEvents() {
  return (
    <>
      <section className="online-area tg-motion-effects">
        <div className="container max-width-1000 d-flex flex-column gap-3">
          <h1 className="text-center section__heading mb-25">
            Registration For Online Counselling
          </h1>
          <div className="row align-items-center section">
            <div className="col-xl-6 col-lg-6">
              <div className="online__image-wrap">
                <div className="main-img">
                  <img src={onlineImage} alt="img" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="">
                <div className="section__title">
                  <h2 className="title">Event Title </h2>
                  <span className="sub-title">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </span>
                </div>
                <div className="section__btn">Register</div>
              </div>
            </div>
          </div>
          <div className="row align-items-center section">
            <div className="col-xl-6 col-lg-6">
              <div className="online__image-wrap">
                <div className="main-img">
                  <img src={onlineImage} alt="img" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="">
                <div className="section__title">
                  <h2 className="title">Event Title </h2>
                  <span className="sub-title">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </span>
                </div>
                <div className="section__btn">Register</div>
              </div>
            </div>
          </div>
          <div className="row align-items-center section">
            <div className="col-xl-6 col-lg-6">
              <div className="online__image-wrap">
                <div className="main-img">
                  <img src={onlineImage} alt="img" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="">
                <div className="section__title">
                  <h2 className="title">Event Title </h2>
                  <span className="sub-title">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </span>
                </div>
                <div className="section__btn">Register</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
