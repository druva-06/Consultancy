import onlineImage from "../../assets/img/others/about_img04.jpg";

export default function SuccessStories() {
  return (
    <section className="online-area tg-motion-effects">
      <div className="container max-width-1000">
        <h1 className="text-center section__heading mb-25">Student Gallery</h1>

        <div className="row align-items-center section">
          <div className="col-xl-6">
            <div className="">
              <div className="section__title">
                <h2 className="title">
                  Quis autem vel eum iure reprehenderit 
                </h2>
                <span className="sub-title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </span>
              </div>
              <div className="section__btn">View All</div>
            </div>
          </div>
          <div className="col-xl-6 d-flex flex-column gap-2">
            <div className="row gap-2 d-flex flex-row justfiy-content-center">
              <span className="col-0 col-lg-1"></span>
              <img className="col-5 col-lg-5" src={onlineImage} alt="img" />
              <img className="col-5 col-lg-5" src={onlineImage} alt="img" />
            </div>
            <div className="row gap-2 d-flex flex-row justify-content-center">
              <span className="col-0 col-lg-1"></span>
              <img className="col-5 col-lg-5" src={onlineImage} alt="img" />
              <img className="col-5 col-lg-5" src={onlineImage} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
