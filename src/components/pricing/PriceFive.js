import React, { useState } from "react";

const PriceFive = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const pricingPlans = [
    {
      id: 1,
      title: "Starter Plan",
      description: "Make your work easier with an integrated system.",
      monthlyPrice: "$54",
      yearlyPrice: "$154",
      icon: "/icons/mk-4.svg",
      features: [
        "Get answers in real-time",
        "Report on what matters",
        "Collaborate seamlessly",
        "Update plans on the fly",
        "Every corner of the business",
        "Better investment decisions",
      ],
      btnClass: "",
    },
    {
      id: 2,
      title: "Pro Plan",
      description: "Make your work easier with an integrated system.",
      monthlyPrice: "$10",
      yearlyPrice: "$155",
      icon: "/icons/mk-2.svg",
      features: [
        "Get answers in real-time",
        "Report on what matters",
        "Collaborate seamlessly",
        "Update plans on the fly",
        "Every corner of the business",
        "Better investment decisions",
      ],
      btnClass: "btn-deep",
    },
    {
      id: 3,
      title: "Business Plan",
      description: "Make your work easier with an integrated system.",
      monthlyPrice: "$54",
      yearlyPrice: "$154",
      icon: "/icons/mk-3.svg",
      features: [
        "Get answers in real-time",
        "Report on what matters",
        "Collaborate seamlessly",
        "Update plans on the fly",
        "Every corner of the business",
        "Better investment decisions",
      ],
      btnClass: "",
    },
  ];

  return (
    <section className="mk-pricing-section ptb-120 bg-light-subtle">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xxl-4 col-lg-6">
            <div className="mk-title text-center text-lg-start">
              <span className="mk-subtitle fw-bold">Core Features</span>
              <h2 className="mk-heading mb-0 mt-3">
                Get Started for Free. Add a Plan Later.
              </h2>
            </div>
          </div>
          <div className="col-xl-5 col-lg-7">
            <div className="mk-pricing-desc mt-4 mt-xl-0 text-center text-lg-start">
              <p className="mb-3">
                Make your work easier with an integrated ecosystem that lets all
                departments work properly together.
              </p>
              <p className="text-center fw-bold mk-offer-text">Get 30% off</p>
              <div className="mk-pricing-control-wrapper d-flex align-items-center justify-content-center justify-content-lg-start">
                <ul className="mk-pricing-control list-unstyled p-0 m-0 d-flex align-items-center">
                  <li>
                    <a
                      href=""
                      rel="noopener noreferrer"
                      className={`mk_monthly_switch ${
                        isMonthly ? "active" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault(), setIsMonthly(true);
                      }}
                    >
                      Monthly
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      rel="noopener noreferrer"
                      className={`mk_yearly_switch ${
                        !isMonthly ? "active" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault(), setIsMonthly(false);
                      }}
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
            {pricingPlans.map((plan) => (
              <div key={plan.id} className="col-xl-4 col-md-6">
                <div className="mk-pricing-column bg-white">
                  <span
                    className={`icon-wrapper d-inline-flex align-items-center justify-content-center rounded ${plan.btnClass}`}
                  >
                    <img src={plan.icon} alt="icon" className="img-fluid" />
                  </span>
                  <h6 className="mk-heading mb-2 mt-3">{plan.title}</h6>
                  <p className="mb-4">{plan.description}</p>
                  <div className="d-flex align-items-center gap-0">
                    <h2 className="mk-heading mk-price-title mb-4">
                      {isMonthly ? plan.monthlyPrice : plan.yearlyPrice}
                    </h2>
                    <p>/{isMonthly ? "Monthly" : "year"}</p>
                  </div>
                  <ul className="mk-pricing-list list-unstyled">
                    {plan.features.map((feature, index) => (
                      <li key={index}>
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
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className={`mk-pricing-btn fw-bold mt-40 ${plan.btnClass}`}
                  >
                    Purchase Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceFive;
