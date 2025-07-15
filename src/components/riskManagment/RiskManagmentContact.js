const RiskManagmentContact = () => {
  return (
    <>
      <div className="rm-contact-area pt-120 pb-60 position-relative z-1">
        <img
          src="/risk_managment/shape/contact_2.png"
          alt=""
          className="s-two position-absolute z--1"
        />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h6 className="risk-sub-text fs-16 ff-risk-pri fw-700 mb-20">
                Get In touch
              </h6>
              <h2 className="risk-title risk-color fs-42 ff-risk-pri flh-56 fw-800 mb-20 pr-20">
                We’re
                <span className="risk-gd-text">Committed to</span> your Success.
              </h2>
              <p className="risk-color-two ff-dmsans fs-16 flh-28 mb-0 fch-50">
                Move from feeling ill-equipped and anxious about imminent
                catastrophe to outsmarting the bad actors and protecting your
                organization with confidence.
              </p>
            </div>
            <div className="col-lg-7">
              <div className="pl-50">
                <div className="risk-contact-form-bg risk-bg-color-two rounded-16 position-relative z-1 overflow-hidden">
                  <div className="risk-form-box bgc-white rounded-12">
                    <h5 className="risk-color fs-20 ff-risk-pri fw-800 flh-24 mb-30">
                      Get In Touch Now
                    </h5>
                    <form action="#" className="risk-contact-form">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="risk-form-item mb-20">
                            <h6 className="risk-color fs-14 ff-risk-pri fw-600">
                              First Name{" "}
                              <span className="risk-highlight-color">*</span>
                            </h6>
                            <input
                              type="text"
                              placeholder="First Name"
                              className="form-control risk-input ca-two-border ca-two-border-color"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="risk-form-item mb-20">
                            <h6 className="risk-color fs-14 ff-risk-pri fw-600">
                              Last Name{" "}
                              <span className="risk-highlight-color">*</span>
                            </h6>
                            <input
                              type="text"
                              placeholder="Last Name"
                              className="form-control risk-input ca-two-border ca-two-border-color"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="risk-form-item mb-20">
                            <h6 className="risk-color fs-14 ff-risk-pri fw-600">
                              Email{" "}
                              <span className="risk-highlight-color">*</span>
                            </h6>
                            <input
                              type="email"
                              placeholder="Email Adress"
                              className="form-control risk-input ca-two-border ca-two-border-color"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="risk-form-item mb-20">
                            <h6 className="risk-color fs-14 ff-risk-pri fw-600">
                              Company Name{" "}
                              <span className="risk-highlight-color">*</span>
                            </h6>
                            <input
                              type="text"
                              placeholder="Company Name"
                              className="form-control risk-input ca-two-border ca-two-border-color"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="risk-form-item mb-20">
                            <h6 className="risk-color fs-14 ff-risk-pri fw-600">
                              Phone Number*
                            </h6>
                            <input
                              type="number"
                              placeholder="Phone No"
                              className="form-control risk-input ca-two-border ca-two-border-color"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="risk-form-item mb-20">
                            <h6 className="risk-color fs-14 ff-risk-pri fw-600">
                              How did You Hear About Us?
                            </h6>
                            <input
                              type="text"
                              placeholder="Write Here"
                              className="form-control risk-input ca-two-border ca-two-border-color"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="risk-form-item mb-20">
                            <h6 className="risk-color fs-14 ff-risk-pri fw-600">
                              Country Reason
                            </h6>
                            <select
                              name="rs-country"
                              id="rs-country"
                              className="form-control risk-input ca-two-border ca-two-border-color"
                            >
                              <option value="Select Your Country">
                                Select Your Country
                              </option>
                              <option value="Select Your Country">
                                Select
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <p className="risk-color-two ff-dmsans fs-12 flh-16 mb-0">
                        Quiety will use the information provided to contact you
                        about products & services. You may opt out of receiving
                        these communications at any time. For more information
                        see Quiety
                        <a href="">Privacy Policy</a>
                      </p>
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="btn risk-btn-bg risk-outline-btn-hover clr-white ff-risk-pri fs-14 fw-600 mt-20"
                      >
                        Start Free Trial
                      </a>
                    </form>
                  </div>
                  <img
                    src="/risk_managment/shape/contact.png"
                    alt=""
                    className="s-one position-absolute z--1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RiskManagmentContact;
