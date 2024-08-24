import onlineImage from "../../assets/img/others/online_img.jpg";

export default function OnlineCounselling() {
  return (
    <>
      <section className="online-area tg-motion-effects">
        <div className="container max-width-1000">
          <h1 className="text-center section__heading mb-25">
            Registration For Online Counselling
          </h1>
          <div className="row align-items-center section">
            <div className="col-xl-6 col-lg-6">
              <div className="">
                <div className="section__title">
                  <h2 className="title">We are Online Meet Our Advisors Now</h2>
                  <span className="sub-title">
                    Book a Free Consultation with our expert Counsellors for online counselling
                  </span>
                </div>
                <div className="section__btn">
                  Register
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
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
