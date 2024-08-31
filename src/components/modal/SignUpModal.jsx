import React from "react";

import signupImg from "../../assets/img/others/signup.png";

const SignUpModal = ({ setOpenModal }) => {
  return (
    <>
      <div className="modal-overlay">
        <div className="modal-container">
          <div className="d-flex justify-content-between align-items-center pb-10">
            <h5 className="modal-heading">
              Please help us with the details for accurate results
            </h5>
            <button className="modal-close-btn" onClick={() => setOpenModal(false)}>
              &times;
            </button>
          </div>
          <div>
            <p className="text-center">
              Get instant updates on latest articles handpicked <br /> for you
              and your preferences
            </p>
            <div
              className="row modal-content-bg"
              style={{ margin: "40px" }}
            >
              <div className="col-12 col-lg-6 d-flex justify-content-center">
                <img
                  src={signupImg}
                  alt="signup"
                  style={{ maxWidth: "250px" }}
                />
              </div>
              <div className="col-12 col-lg-6 modal-form">
                <div className="row pb-20">
                  <span className="col-auto">Already a Member?</span>
                  <a className="col-auto p-0" href="#">
                    Login
                  </a>
                </div>
                <div className="row align-items-center gap-3">
                  <input className="col-5 modal-input-field" type="text" placeholder="Name" />
                  <input className="col-5 modal-input-field" type="email" placeholder="Email" />
                  <input className="col-5 modal-input-field" type="phone" placeholder="Phone" />
                  <input className="col-5 modal-input-field" type="text" placeholder="OTP" />
                  <span className="mt-20 col-5 modal-clickable-text">Send OTP</span>
                  <button className="mt-20 col-5 modal-button">Proceed</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-center">
              Check your mail for creating a password for your account.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpModal;
