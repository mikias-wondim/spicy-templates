import Link from "next/link";
import React from "react";

const pricingPlans = [
  {
    id: 1,
    name: "Weekly",
    price: "$7 / Weekly",
    billingCycle: "$14 billed Weekly",
    features: [
      "Create Unique Websites",
      "Automate Your Busy Work",
      "Optimize All Your Efforts",
      "Centralized Teams",
      "Shareable Team Libraries",
    ],
    btnClass: "btn-outline-primary",
  },
  {
    id: 2,
    name: "Monthly",
    price: "$14 / Monthly",
    billingCycle: "$14 billed Monthly",
    features: [
      "Create Unique Websites",
      "Automate Your Busy Work",
      "Optimize All Your Efforts",
      "Centralized Teams",
      "Shareable Team Libraries",
    ],
    btnClass: "btn-primary",
    highlight: true, // Add a highlight property for the special plan
  },
  {
    id: 3,
    name: "Weekly",
    price: "$8 / Weekly",
    billingCycle: "$8 billed weekly",
    features: [
      "Create Unique Websites",
      "Automate Your Busy Work",
      "Optimize All Your Efforts",
      "Centralized Teams",
      "Shareable Team Libraries",
    ],
    btnClass: "btn-outline-primary",
  },
];

const CorporateAgencyPricing = () => {
  return (
    <div className="sections pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-7">
            <div className="section-heading text-center">
              <h2 className="mb-4 heading-text">
                You see only 3% of full library. Get unlimited access to
                everything.
              </h2>
              <p>
                Credibly grow premier ideas rather than bricks-and-clicks
                strategic theme areas distributed for stand-alone web-readiness.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {pricingPlans.map((plan) => (
            <div className="col-lg-4 col-md-6" key={plan.id}>
              <div
                className={`position-relative single-pricing-wrap rounded-custom bg-white custom-shadow p-5 ${
                  plan.highlight ? "border border-primary" : ""
                }`}
              >
                <div className="pricing-header mb-32">
                  <h5 className="package-name text-center">{plan.name}</h5>
                  <h4 className="display-6 fw-semibold text-center mb-1">
                    {plan.price}
                  </h4>
                  <span className="d-block text-center fw-medium">
                    {plan.billingCycle}
                  </span>
                </div>
                <div className="pricing-info">
                  <ul className="pricing-feature-list list-unstyled text-center">
                    {plan.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-center mt-5">
                  <Link
                    href="/request-demo"
                    className={`btn ${plan.btnClass} rounded-pill`}
                  >
                    Get Started Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CorporateAgencyPricing;
