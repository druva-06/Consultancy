import { Link } from "react-router-dom";
import PageNotFoundImg from "../assets/img/others/error_img.svg";
export default function Custom404() {
  return (
    <>
      <section className="error-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="error-wrap text-center">
                <div className="error-img">
                  <img src={PageNotFoundImg} alt="img" />
                </div>
                <div className="error-content">
                  <h2 className="title">
                    ERROR PAGE! <span>Sorry! This Page is Not Available!</span>
                  </h2>
                  <div className="tg-button-wrap">
                    <Link to="/" className="btn tg-svg">
                      <span className="text">Go To Home APge</span>{" "}
                      <span
                        className="svg-icon"
                        id="error-btn"
                        data-svg-icon="assets/img/icons/btn-arrow.svg"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
