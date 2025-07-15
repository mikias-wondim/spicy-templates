import React from "react";

const HelpDeskPricing = () => {
  const pricingPlans = [
    {
      id: 1,
      title: "Basic Plan",
      description:
        "Free 14-day trial. No credit card required. Cancel anytime.",
      price: "$12",
      period: "/month",
      buttonText: "Start Free Trial",
      buttonClass: "hd-secondary-btn",
      features: [
        "All Messages in One Dashboard",
        "Customer Data in Tickets",
        "Automation to finish tasks",
        "Efficient team Management",
        "Real time progress Reporting",
      ],
    },
    {
      id: 2,
      title: "Team Plan",
      description:
        "Free 14-day trial. No credit card required. Cancel anytime.",
      price: "$26",
      period: "/month",
      note: "or $40 month-to-month",
      buttonText: "Start Free Trial",
      buttonClass: "crm-primary-btn",
      features: [
        "All Messages in One Dashboard",
        "Real time progress Reporting",
        "Customer Data in Tickets",
        "Automation to finish tasks",
        "Efficient team Management",
        "Customer Data in Tickets",
        "Automation to finish tasks",
        "Efficient team Management",
      ],
    },
  ];

  return (
    <section className="hd-pricing-section pt-120 overflow-hidden">
      <div className="container position-relative z-1">
        <img
          src="/shape/arrow-3.png"
          alt="arrow shape"
          className="arrow-shape position-absolute z--1"
        />
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-8">
            <div className="hd-title text-center">
              <h2 className="clr-text">
                Quiety Desk Best-in-Class Ticketing{" "}
                <mark className="bg-transparent p-0 position-relative">
                  Service{" "}
                  <img
                    src="/shape/line-shape.png"
                    alt="line-shape"
                    className="line-shape position-absolute"
                  />
                </mark>
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="row justify-content-center g-4">
            {pricingPlans.map((plan) => (
              <div className="col-xl-8" key={plan.id}>
                <div className="hd-pricing-single bg-white position-relative">
                  <div className="row align-items-center">
                    <div className="col-md-5">
                      <div className="hd-pricing-info">
                        <h4 className="mb-2">{plan.title}</h4>
                        <p className="mb-2">
                          {plan.description.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </p>
                        <h2 className="hd-pricing-amount mb-0">
                          <sup>$</sup>
                          {plan.price}
                          <span>{plan.period}</span>
                        </h2>
                        {plan.note && <p className="mt-2 mb-0">{plan.note}</p>}
                        <a href="#" className={`btn ${plan.buttonClass} mt-3`}>
                          {plan.buttonText}
                        </a>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <ul className="hd-pricing-features list-unstyled">
                        {plan.features.map((feature, index) => (
                          <li key={index}>
                            <span className="me-2">
                              <i className="far fa-check-circle"></i>
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpDeskPricing;
