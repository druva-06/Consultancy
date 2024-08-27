import React from "react";
import "./SignUpModal.css";

import signupImg from "../../../assets/img/others/signup.png";

const SignUpModal = ({ setOpenModal }) => {
  return (
    <>
      <div className="modal-overlay">
        <div className="sign-up-modal">
          <div className="sign-up-modal-header">
            <h5 className="sign-up-modal-title">
              Please help us with the details for accurate results
            </h5>
            <button className="close-btn" onClick={() => setOpenModal(false)}>
              &times;
            </button>
          </div>
          <div className="sign-up-modal-body">
            <p className="text-center">
              Get instant updates on latest articles handpicked <br /> for you
              and your preferences
            </p>
            <div className="row mt-50">
              <div className="col-12 col-lg-6 d-flex justify-content-center">
                <img src={signupImg} alt="signup" style={{maxWidth: '400px'}}/>
              </div>
              <div className="col-12 col-lg-6">
                <div className="row pb-20">
                  <span className="col-auto">Already a Member?</span>
                  <a className="col-auto p-0" href="#">
                    Login
                  </a>
                </div>
                <div className="row gap-3">
                  <input className="col-5" type="text" placeholder="Name" />
                  <input className="col-5" type="email" placeholder="Email" />
                  <input className="col-5" type="phone" placeholder="Phone" />
                  <input className="col-5" type="text" placeholder="OTP" />
                  <span className="mt-20 col-5">Send OTP</span>
                  <button className="mt-20 col-5">Proceed</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpModal;
