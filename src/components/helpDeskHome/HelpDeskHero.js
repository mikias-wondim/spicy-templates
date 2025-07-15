import React from "react";

const HelpDeskHero = () => {
  const handelHelpDeskHero = (e) => {
    e.preventDefault();
  };
  return (
    <section className="hd-hero-section position-relative z-1 overflow-hidden">
      <img
        src="/help-desk/hero-man.png"
        alt="man"
        className="position-absolute hd-hero-man"
      />
      <img
        src="/help-desk/hero-girl.png"
        alt="girl"
        className="position-absolute hd-hero-girl"
      />
      <img
        src="/help-desk/desk-girl.png"
        alt="desk girl"
        className="position-absolute desk-girl"
      />
      <img
        src="/shape/line-plan.png"
        alt="line shape"
        className="position-absolute line-plan z--1"
      />
      <img
        src="/shape/arrow-line-shape.png"
        alt="arrow line shape"
        className="position-absolute arrow-line-shape z--1 d-none d-sm-block"
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="hd-hero-content text-center">
              <h1 className="display-3 fw-semibold hd-hero-title clr-text">
                A Better Way to Talk With Your{" "}
                <mark className="bg-transparent p-0">
                  Customers{" "}
                  <img
                    src="/shape/line-shape.png"
                    alt="line shape"
                    className="position-absolute hd-line-shape"
                  />
                </mark>
              </h1>
              <p className="mt-40 mb-5">
                Be available right where your customers need it, and give your
                team the automatically.
              </p>
              <form
                onSubmit={handelHelpDeskHero}
                className="hd-hero-form bg-white d-flex align-items-center justify-content-between rounded"
              >
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="form-control"
                />
                <button type="submit" className="btn hd-secondary-btn">
                  Try For Free
                </button>
              </form>
              <ul className="crm-special-features list-unstyled p-0 m-0 d-flex align-items-center justify-content-center flex-wrap mt-4">
                <li>
                  <span className="dot me-2"></span>Free 7 Days trial
                </li>
                <li>
                  <span className="dot me-2"></span>No Credit Card Required
                </li>
                <li>
                  <span className="dot me-2"></span>Cancel anytime
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpDeskHero;
