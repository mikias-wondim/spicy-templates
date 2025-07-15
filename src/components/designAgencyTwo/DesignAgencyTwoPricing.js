import { useState } from "react";

const DesignAgencyTwoPricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  //   console.log("isMonthly", isMonthly);

  const handleToggle = (planType) => {
    setIsMonthly(planType === "monthly");
  };
  return (
    <>
      <section className="mk-pricing-section pt-120 pb-60 position-relative dat-bg dat-section-after">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xxl-4 col-lg-6">
              <div className="mk-title text-center text-lg-start">
                <h2 className="mk-heading mb-0 mt-3 clr-text">
                  Get Started for Free. Add a Plan Later.
                </h2>
              </div>
            </div>
            <div className="col-xl-5 col-lg-7">
              <div className="mk-pricing-desc mt-4 mt-xl-0 text-center text-lg-start">
                <p className="mb-3">
                  Make your work easier with an integrated ecosystem that lets
                  all departments work properly together.
                </p>
                <p className="text-center fw-bold text-pink-2">Get 30% off</p>
                <div className="mk-pricing-control-wrapper d-flex align-items-center justify-content-center justify-content-lg-start">
                  <ul className="mk-pricing-control style-two list-unstyled p-0 m-0 d-flex align-items-center">
                    <li>
                      <a
                        type="submit"
                        className={
                          isMonthly
                            ? "active mk_monthly_switch"
                            : "mk_monthly_switch"
                        }
                        onClick={() => handleToggle("monthly")}
                      >
                        Monthly
                      </a>
                    </li>
                    <li>
                      <a
                        type="submit"
                        className={
                          !isMonthly
                            ? "active mk_yearly_switch"
                            : "mk_yearly_switch"
                        }
                        onClick={() => handleToggle("yearly")}
                      >
                        Yearly
                      </a>
                    </li>
                  </ul>
                  <img
                    src="/shape/arrow-shape.png"
                    alt="arrow"
                    className="mk-arrow-shape"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="row justify-content-center g-4">
              <div className="col-xl-4 col-md-6">
                <div className="mk-pricing-column bg-white rounded">
                  <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded blue-bg">
                    <img
                      src="/icons/mk-4.svg"
                      alt="icon"
                      className="img-fluid"
                    />
                  </span>
                  <h6 className="mk-heading mb-2 mt-3">Starter Plan</h6>
                  <p className="mb-4">
                    Make your work easier with an integrated properly together.
                  </p>
                  {isMonthly === true ? (
                    <h2 className="mk-heading mk-price-title mb-4 mk_monthly_price">
                      $54<span>/month</span>
                    </h2>
                  ) : (
                    <h2 className="mk-heading mk-price-title mb-4 mk_monthly_price">
                      $154<span>/year</span>
                    </h2>
                  )}

                  <ul className="mk-pricing-list list-unstyled">
                    <li>
                      <span className="me-2">
                        <svg
                          width="13"
                          height="10"
                          viewBox="0 0 13 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 5.26667L4.73333 9L12.2 1"
                            stroke="#FF724B"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Get answers in real-time
                    </li>
                    <li>
                      <span className="me-2">
                        <svg
                          width="13"
                          height="10"
                          viewBox="0 0 13 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 5.26667L4.73333 9L12.2 1"
                            stroke="#FF724B"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Report on what matters
                    </li>
                    <li>
                      <span className="me-2">
                        <svg
                          width="13"
                          height="10"
                          viewBox="0 0 13 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 5.26667L4.73333 9L12.2 1"
                            stroke="#FF724B"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Collaborate seamlessly
                    </li>
                    <li>
                      <span className="me-2">
                        <svg
                          width="13"
                          height="10"
                          viewBox="0 0 13 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 5.26667L4.73333 9L12.2 1"
                            stroke="#FF724B"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Update plans on the fly
                    </li>
                    <li>
                      <span className="me-2">
                        <svg
                          width="13"
                          height="10"
                          viewBox="0 0 13 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 5.26667L4.73333 9L12.2 1"
                            stroke="#FF724B"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Every corner of the business
                    </li>
                    <li>
                      <span className="me-2">
                        <svg
                          width="13"
                          height="10"
                          viewBox="0 0 13 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 5.26667L4.73333 9L12.2 1"
                            stroke="#FF724B"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Better investment decisions
                    </li>
                  </ul>
                  <a href="#" className="btn price-dat-btn fw-6 mt-40">
                    Purchase Now
                  </a>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="mk-pricing-column bg-white rounded">
                  <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded warning-bg">
                    <img
                      src="/icons/mk-2.svg"
                      alt="icon"
                      className="img-fluid"
                    />
                  </span>
                  <h6 className="mk-heading mb-2 mt-3">Starter Plan</h6>
                  <p className="mb-4">
                    Make your work easier with an integrated properly together.
                  </p>
                  {isMonthly === true ? (
                    <h2 className="mk-heading mk-price-title mb-4 mk_monthly_price">
                      $10<span>/month</span>
                    </h2>
                  ) : (
                    <h2 className="mk-heading mk-price-title mb-4 mk_monthly_price">
                      $155<span>/year</span>
                    </h2>
                  )}

                  <ul className="mk-pricing-list list-unstyled">
                    <li>
                      <span className="me-2">
                        <svg
                          width="13"
                          height="10"
                          viewBox="0 0 13 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 5.26667L4.73333 9L12.2 1"
                            stroke="#FF724B"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Get answers in real-time
                    </li>
                    <li>
                      <span className="me-2">
                        <svg
                          width="13"
                          height="10"
                          viewBox="0 0 13 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 5.26667L4.73333 9L12.2 1"
                            stroke="#FF724B"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Report on what matters
                    </li>
                    <li>
                      <span className="me-2">
                        <svg
                          width="13"
                          height="10"
                          viewBox="0 0 13 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 5.26667L4.73333 9L12.2 1"
                            stroke="#FF724B"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Collaborate seamlessly
                    </li>
                    <li>
                      <span className="me-2">
                        <svg
                          width="13"
                          height="10"
                          viewBox="0 0 13 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 5.26667L4.73333 9L12.2 1"
                            stroke="#FF724B"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Update plans on the fly
                    </li>
                    <li>
                      <span className="me-2">
                        <svg
                          width="13"
                          height="10"
                          viewBox="0 0 13 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 5.26667L4.73333 9L12.2 1"
                            stroke="#FF724B"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Every corner of the business
                    </li>
                    <li>
                      <span className="me-2">
                        <svg
                          width="13"
                          height="10"
                          viewBox="0 0 13 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 5.26667L4.73333 9L12.2 1"
                            stroke="#FF724B"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Better investment decisions
                    </li>
                  </ul>
                  <a href="#" className="btn btn-dat-two text-white fw-6 mt-40">
                    Purchase Now
                  </a>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="mk-pricing-column bg-white rounded">
                  <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded">
                    <img
                      src="/icons/mk-3.svg"
                      alt="icon"
                      className="img-fluid"
                    />
                  </span>
                  <h6 className="mk-heading mb-2 mt-3">Starter Plan</h6>
                  <p className="mb-4">
                    Make your work easier with an integrated properly together.
                  </p>
                  {isMonthly === true ? (
                    <h2 className="mk-heading mk-price-title mb-4 mk_monthly_price">
                      $54<span>/month</span>
                    </h2>
                  ) : (
                    <h2 className="mk-heading mk-price-title mb-4 mk_monthly_price">
                      $154<span>/year</span>
                    </h2>
                  )}

                  <ul className="mk-pricing-list list-unstyled">
                    <li>
                      <span className="me-2">
                        <svg
                          width="13"
                          height="10"
                          viewBox="0 0 13 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 5.26667L4.73333 9L12.2 1"
                            stroke="#FF724B"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Get answers in real-time
                    </li>
                    <li>
                      <span className="me-2">
                        <svg
                          width="13"
                          height="10"
                          viewBox="0 0 13 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 5.26667L4.73333 9L12.2 1"
                            stroke="#FF724B"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Report on what matters
                    </li>
                    <li>
                      <span className="me-2">
                        <svg
                          width="13"
                          height="10"
                          viewBox="0 0 13 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 5.26667L4.73333 9L12.2 1"
                            stroke="#FF724B"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Collaborate seamlessly
                    </li>
                    <li>
                      <span className="me-2">
                        <svg
                          width="13"
                          height="10"
                          viewBox="0 0 13 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 5.26667L4.73333 9L12.2 1"
                            stroke="#FF724B"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Update plans on the fly
                    </li>
                    <li>
                      <span className="me-2">
                        <svg
                          width="13"
                          height="10"
                          viewBox="0 0 13 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 5.26667L4.73333 9L12.2 1"
                            stroke="#FF724B"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Every corner of the business
                    </li>
                    <li>
                      <span className="me-2">
                        <svg
                          width="13"
                          height="10"
                          viewBox="0 0 13 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 5.26667L4.73333 9L12.2 1"
                            stroke="#FF724B"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Better investment decisions
                    </li>
                  </ul>
                  <a href="#" className="btn price-dat-btn fw-6 mt-40">
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DesignAgencyTwoPricing;
