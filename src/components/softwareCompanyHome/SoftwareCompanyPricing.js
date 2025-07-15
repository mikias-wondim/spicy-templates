import React, { useState } from "react";

const SoftwareCompanyPricing = () => {
  const [pricingType, setPricingType] = useState("monthly");

  const handlePricingSwitch = (type) => {
    setPricingType(type);
  };
  return (
    <>
      <section className="sc-pricing-section position-relative z-1 overflow-hidden ptb-120 border-line-bg">
        <div className="container">
          <div className="row justify-content-between align-items-center g-3">
            <div className="col-xl-5 col-lg-6">
              <div className="section-title text-center text-lg-start">
                <h2 className="mb-0 sc-heading-color clr-text">
                  Entrust Your Growth to Professionals
                </h2>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="text-center text-lg-end mt-3 mt-lg-0">
                <div className="sc-pricing-switch d-inline-flex bg-white rounded overflow-hidden">
                  <button
                    type="button"
                    className={pricingType === "monthly" ? "active" : ""}
                    onClick={() => handlePricingSwitch("monthly")}
                  >
                    Monthly
                  </button>
                  <button
                    type="button"
                    className={pricingType === "yearly" ? "active" : ""}
                    onClick={() => handlePricingSwitch("yearly")}
                  >
                    Yearly
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4 mt-2 justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="sc-pricing-column bg-white rounded">
                <div className="sc-pricing-title d-flex align-items-center">
                  <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-4">
                    <svg
                      width="37"
                      height="36"
                      viewBox="0 0 37 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.35"
                        d="M34.0241 21.7544L6.62149 35.4567C3.57867 36.9781 0 34.7658 0 31.3651L0 4.58065C0 1.17996 3.57867 -1.03231 6.61958 0.489104L34.0222 14.1914C37.1397 15.7491 37.1397 20.1966 34.0241 21.7544Z"
                        fill="#4A3AFF"
                      />
                      <path
                        d="M23.778 19.2552L0 23.7141L0 12.2318L23.778 16.6908C25.198 16.9568 25.198 18.9891 23.778 19.2552Z"
                        fill="#4A3AFF"
                      />
                    </svg>
                  </span>
                  <div className="sc-pricing-title-right ms-3">
                    <h6 className="mb-0 text-dg-color">For individuals</h6>
                    <h4 className="mb-0 mt-1">Basic</h4>
                  </div>
                </div>
                <p className="mt-4 mb-4">
                  Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                  adipiscing elit.
                </p>
                <div className={`pricing-amount ${pricingType}`}>
                  <h1 className="d-inline-block mb-3">
                    {pricingType === "monthly" ? "$39" : "$199"}
                  </h1>
                  <h5 className="d-inline-block text-dg-color fw-normal mb-3">
                    {pricingType === "monthly" ? "/monthly" : "/yearly"}
                  </h5>
                </div>
                <h6 className="mb-4">What's included</h6>
                <ul className="pricing-features mb-40 list-unstyled">
                  <li>
                    <span className="me-3">
                      <i className="fa-solid fa-circle-check"></i>
                    </span>
                    All analytics features
                  </li>
                  <li>
                    <span className="me-3">
                      <i className="fa-solid fa-circle-check"></i>
                    </span>
                    Up to 250,000 tracked visits
                  </li>
                  <li>
                    <span className="me-3">
                      <i className="fa-solid fa-circle-check"></i>
                    </span>
                    24 hours support
                  </li>
                </ul>
                <a href="#" className="btn sc-outline-btn">
                  Get started now
                </a>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="sc-pricing-column popular rounded">
                <div className="sc-pricing-title d-flex align-items-center">
                  <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-4">
                    <svg
                      width="37"
                      height="36"
                      viewBox="0 0 37 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.35"
                        d="M34.0241 21.7544L6.62149 35.4567C3.57867 36.9781 0 34.7658 0 31.3651L0 4.58065C0 1.17996 3.57867 -1.03231 6.61958 0.489104L34.0222 14.1914C37.1397 15.7491 37.1397 20.1966 34.0241 21.7544Z"
                        fill="#4A3AFF"
                      />
                      <path
                        d="M23.778 19.2552L0 23.7141L0 12.2318L23.778 16.6908C25.198 16.9568 25.198 18.9891 23.778 19.2552Z"
                        fill="#4A3AFF"
                      />
                    </svg>
                  </span>
                  <div className="sc-pricing-title-right ms-3">
                    <h6 className="mb-0 text-dg-color">For individuals</h6>
                    <h4 className="mb-0 mt-1">Enterprise</h4>
                  </div>
                </div>
                <p className="mt-4 mb-4">
                  Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                  adipiscing elit.
                </p>
                <div className={`pricing-amount ${pricingType}`}>
                  <h1 className="d-inline-block mb-3">
                    {pricingType === "monthly" ? "$59" : "$299"}
                  </h1>
                  <h5 className="d-inline-block text-dg-color fw-normal mb-3">
                    {pricingType === "monthly" ? "/monthly" : "/yearly"}
                  </h5>
                </div>
                <h6 className="mb-4">What's included</h6>
                <ul className="pricing-features mb-40 list-unstyled">
                  <li>
                    <span className="me-3">
                      <i className="fa-solid fa-circle-check"></i>
                    </span>
                    All analytics features
                  </li>
                  <li>
                    <span className="me-3">
                      <i className="fa-solid fa-circle-check"></i>
                    </span>
                    Up to 250,000 tracked visits
                  </li>
                  <li>
                    <span className="me-3">
                      <i className="fa-solid fa-circle-check"></i>
                    </span>
                    24 hours support
                  </li>
                </ul>
                <a href="#" className="btn btn-primary">
                  Get started now
                </a>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="sc-pricing-column bg-white rounded">
                <div className="sc-pricing-title d-flex align-items-center">
                  <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-4">
                    <svg
                      width="37"
                      height="36"
                      viewBox="0 0 37 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.35"
                        d="M34.0241 21.7544L6.62149 35.4567C3.57867 36.9781 0 34.7658 0 31.3651L0 4.58065C0 1.17996 3.57867 -1.03231 6.61958 0.489104L34.0222 14.1914C37.1397 15.7491 37.1397 20.1966 34.0241 21.7544Z"
                        fill="#4A3AFF"
                      />
                      <path
                        d="M23.778 19.2552L0 23.7141L0 12.2318L23.778 16.6908C25.198 16.9568 25.198 18.9891 23.778 19.2552Z"
                        fill="#4A3AFF"
                      />
                    </svg>
                  </span>
                  <div className="sc-pricing-title-right ms-3">
                    <h6 className="mb-0 text-dg-color">For individuals</h6>
                    <h4 className="mb-0 mt-1">Premium</h4>
                  </div>
                </div>
                <p className="mt-4 mb-4">
                  Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                  adipiscing elit.
                </p>
                <div className={`pricing-amount ${pricingType}`}>
                  <h1 className="d-inline-block mb-3">
                    {pricingType === "monthly" ? "$79" : "$350"}
                  </h1>
                  <h5 className="d-inline-block text-dg-color fw-normal mb-3">
                    {pricingType === "monthly" ? "/monthly" : "/yearly"}
                  </h5>
                </div>
                <h6 className="mb-4">What's included</h6>
                <ul className="pricing-features mb-40 list-unstyled">
                  <li>
                    <span className="me-3">
                      <i className="fa-solid fa-circle-check"></i>
                    </span>
                    All analytics features
                  </li>
                  <li>
                    <span className="me-3">
                      <i className="fa-solid fa-circle-check"></i>
                    </span>
                    Up to 250,000 tracked visits
                  </li>
                  <li>
                    <span className="me-3">
                      <i className="fa-solid fa-circle-check"></i>
                    </span>
                    24 hours support
                  </li>
                </ul>
                <a href="#" className="btn sc-outline-btn">
                  Get started now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SoftwareCompanyPricing;
