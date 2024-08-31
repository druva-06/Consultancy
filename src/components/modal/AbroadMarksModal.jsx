export default function AbroadMarksModal({ setOpenModal }) {
  return (
    <>
      <div className="modal-overlay">
        <div className="modal-container">
          <div className="d-flex justify-content-between align-items-center pb-10">
            <h5 className="modal-heading">
              Please help us with details for accurate results
            </h5>
            <button
              className="modal-close-btn"
              onClick={() => setOpenModal(false)}
            >
              &times;
            </button>
          </div>
          <div className="modal-body">
            <div
              className="row modal-content-bg"
              style={{ margin: "20px", padding: "30px" }}
            >
              <div className="col-12 modal-form d-flex flex-col gap-4">
                <div className="row">
                  <label className="col-lg-3 modal-label">Select Exam</label>
                  <select className="offset-lg-2 col-lg-7 modal-select">
                    <option>GRE</option>
                    <option>GMAT</option>
                    <option>IELTS</option>
                    <option>DET</option>
                    <option>PTE</option>
                    <option>TOFEL</option>
                  </select>
                </div>
                <div className="row gap-3 align-items-center align-items-center">
                  <label className="modal-label col-lg-11">
                    Enter Marks for each Exam
                  </label>
                  <div className="row d-flex justify-content-between gap-2">
                  <input
                    className="col-lg-3 modal-input-field"
                    type="text"
                    placeholder="Writing"
                  />
                  <input
                    className="col-lg-3 modal-input-field"
                    type="text"
                    placeholder="Listening"
                  />
                  <input
                    className="col-lg-3 modal-input-field"
                    type="text"
                    placeholder="Speaking"
                  />
                  <input
                    className="col-3 modal-input-field"
                    type="text"
                    placeholder="Reading"
                  />
                  </div>
                </div>
                <div className="row gap-3">
                  <label className="col-lg-3 modal-label">
                    Preferred Location
                  </label>
                  <select
                    className="offset-lg-1 col-lg-7 modal-select"
                    defaultValue="Select Country"
                  >
                    <option disabled>Select Country</option>
                    <option>USA</option>
                    <option>Canada</option>
                    <option>Austraila</option>
                    <option>New Zealand</option>
                    <option>Dubai</option>
                    <option>UK</option>
                  </select>
                </div>
                <div className="row gap-3">
                  <label className="col-lg-3 modal-label">
                    Work Experience
                  </label>
                  <div className="offset-lg-1 col-lg-7 row gap-2 align-items-center justify-content-center">
                    <p className="modal-select-box col-5 text-center">Yes</p>
                    <p className="modal-select-box col-5 text-center">No</p>
                  </div>
                </div>
                <div className="row gap-3">
                  <label className="col-lg-3 modal-label">
                    Project/ Internship relevant to the field of study in MS?
                  </label>
                  <div className="offset-lg-1 col-lg-7 row gap-2 align-items-center justify-content-center">
                    <p className="modal-select-box col-5 text-center">Yes</p>
                    <p className="modal-select-box col-5 text-center">No</p>
                  </div>
                </div>
                <div className="row gap-3">
                  <label className="col-lg-3 modal-label">
                    Prefered Intake
                  </label>
                  <select
                    className="offset-lg-1 col-lg-7 modal-select"
                    defaultValue="Select Month"
                  >
                    <option disabled>Select Month</option>
                    <option>Jan</option>
                    <option>Feb</option>
                    <option>Mar</option>
                    <option>Apr</option>
                    <option>May</option>
                    <option>Jun</option>
                    <option>July</option>
                    <option>Aug</option>
                    <option>Sep</option>
                    <option>Oct</option>
                    <option>Nov</option>
                    <option>Dec</option>
                  </select>
                </div>
                <div className="row gap-3">
                  <label className="col-lg-3 modal-label">
                    Do You Require any premium service
                  </label>
                  <div className="offset-lg-1 col-lg-7 row gap-2 align-items-center justify-content-center">
                    <p className="modal-select-box col-5 text-center">
                      Education <br />
                      Loan Support
                    </p>
                    <p className="modal-select-box col-5 text-center">
                      Accommodation <br />
                      Assistance
                    </p>
                    <p className="modal-select-box col-5 text-center">
                      SOP Writing
                    </p>
                    <p className="modal-select-box col-5 text-center">
                      Scholarship Research
                    </p>
                    <p className="modal-select-box col-5 text-center">
                      Flight Booking
                    </p>
                    <p className="modal-select-box col-5 text-center">Forex</p>
                  </div>
                </div>
                <div className="row gap-3">
                  <p className="col-3 modal-clickable-text">Need Help?</p>
                  <button className="col-2 modal-button text-center">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
