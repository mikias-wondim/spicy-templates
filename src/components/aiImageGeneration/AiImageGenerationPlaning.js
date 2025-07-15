import React, { useState } from "react";

const AiImageGenerationPlaning = () => {
  const [isMonthly, setIsMonthly] = useState(true); // Track the pricing view
  console.log("isMonthly", isMonthly);
  const plans = [
    {
      name: "Free Plan",
      monthlyPrice: "00.00",
      yearlyPrice: "00.00",
      features: [
        "ChatGPT 3.5 Open AI Model",
        "37 AI Templates",
        "5000 Words per month",
        "10 Images per month",
        "2 Speech to Text per month",
        "2 MB Audio file size limit",
        "Stable Diffusion Images",
        "AI Art Wizard",
      ],
    },
    {
      name: "Standard Plan",
      monthlyPrice: "20.00",
      yearlyPrice: "40.00",
      features: [
        "ChatGPT 3.5 Open AI Model",
        "37 AI Templates",
        "5000 Words per month",
        "10 Images per month",
        "2 Speech to Text per month",
        "2 MB Audio file size limit",
        "Stable Diffusion Images",
        "AI Art Wizard",
      ],
    },
    {
      name: "Premium Plan",
      monthlyPrice: "90.00",
      yearlyPrice: "100.00",
      features: [
        "ChatGPT 3.5 Open AI Model",
        "37 AI Templates",
        "5000 Words per month",
        "10 Images per month",
        "2 Speech to Text per month",
        "2 MB Audio file size limit",
        "Stable Diffusion Images",
        "AI Art Wizard",
      ],
    },
  ];

  const togglePricing = () => setIsMonthly(!isMonthly);

  return (
    <>
      <div className="aiart-price-area pt-120 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="text-center">
                <h6 className="aiart-sub-title text-primary fs-18 fw-600 d-inline-flex align-items-center gap-3 mb-20">
                  <span>
                    <svg
                      width="23"
                      height="24"
                      viewBox="0 0 23 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 20.75L21 1.75"
                        stroke="#175cff"
                        strokeWidth="3"
                      ></path>
                      <path
                        d="M11 22.25L21 12.25"
                        stroke="#175cff"
                        strokeWidth="3"
                      ></path>
                    </svg>
                  </span>
                  Writebot AI Art
                </h6>
                <h2 className="aiart-title text-black fs-48 ff-risk-pri mb-40">
                  Choose the <span className="aiart-gd-text">Plan that’s </span>
                  Right for you
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="aiart-price-wrapper pt-80 pb-80 position-relative z-1">
          <div className="container">
            <div className="row g-0">
              <div className="col-lg-12">
                <div className="aiart-price-btn-area d-flex align-items-center justify-content-center gap-3 mt-20 mb-30">
                  <div className="text-black ff-risk-pri fs-14 fw-600">
                    Monthly
                  </div>
                  <div
                    className={`aiart-price-btn bg-body d-flex align-items-center   ${
                      isMonthly ? "" : "clicked"
                    }`}
                    onClick={togglePricing}
                  >
                    <div className="aiart-price-btn-sm aiart-gd-bg"></div>
                  </div>
                  <div className="text-black ff-risk-pri fs-14 fw-600  ">
                    Annually
                  </div>
                </div>
                <div className="row justify-content-center">
                  {plans.map((plan, index) => (
                    <div key={index} className="col-xl-4 col-md-6">
                      <div className="aiart-price-item bg-white pl-40 pr-40 pb-40 risk-shadow rounded-3 mt-20">
                        <div className="pt-40 pb-20 border-bottom">
                          <h4 className="aiart-month text-black fs-36 ff-risk-pri">
                            {isMonthly ? plan.monthlyPrice : plan.yearlyPrice}
                            <span className="fs-16 text-black">
                              {isMonthly ? "/Month" : "/Yearly"}
                            </span>
                          </h4>
                          <h5 className="text-black">{plan.name}</h5>
                          <p className="fs-14 fw-600">
                            Get started with our startup package
                          </p>
                        </div>
                        <ul className="ai-wt-price-list list-unstyled d-flex flex-column gap-3 mt-30 mb-30">
                          {plan.features.map((feature, index) => (
                            <li
                              key={index}
                              className="d-flex align-items-center gap-3"
                            >
                              <span className="aiart-gd-text">
                                <i className="fa-regular fa-circle-check"></i>
                              </span>
                              <p className="mb-0">
                                <span className="text-black fw-600">
                                  {feature}
                                </span>
                              </p>
                            </li>
                          ))}
                        </ul>
                        <a
                          href="login.html"
                          className="btn aiart-gd-btn w-100 rounded-5"
                        >
                          <span className="aiart-gd-text fs-14 fw-800">
                            Get Started
                          </span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiImageGenerationPlaning;
