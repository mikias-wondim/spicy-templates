import React, { useState } from "react";

const AiCompanyPricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  // Define your pricing data
  const pricingPlans = [
    {
      title: "Basic",
      subtitle: "For individuals",
      monthlyPrice: 50,
      yearlyPrice: 600,
      features: [
        "All analytics features",
        "Up to 250,000 tracked visits",
        "24 hours support",
      ],
    },
    {
      title: "Standard",
      subtitle: "For individuals",
      monthlyPrice: 75,
      yearlyPrice: 900,
      features: [
        "All analytics features",
        "Up to 250,000 tracked visits",
        "24 hours support",
      ],
      isPopular: true,
    },
    {
      title: "Enterprise",
      subtitle: "For individuals",
      monthlyPrice: 99,
      yearlyPrice: 1188,
      features: [
        "All analytics features",
        "Up to 250,000 tracked visits",
        "24 hours support",
      ],
    },
  ];

  return (
    <div className="aih-price-area ptb-120">
      <div className="container">
        <div className="mb-40">
          <div className="row align-items-center">
            <div className="col-xxl-5 col-lg-7">
              <h2 className="aih-title aih-color-two fs-48 fw-600 mb-0">
                Pricing Plans Tailored For Your Business
              </h2>
            </div>
            <div className="col-xxl-7 col-lg-5">
              <div className="text-md-end">
                <div className="btn-group">
                  <button
                    type="button"
                    className={`btn select-pricing-btn ${
                      isMonthly ? "active" : ""
                    }`}
                    onClick={() => setIsMonthly(true)}
                  >
                    Monthly
                  </button>
                  <button
                    type="button"
                    className={`btn select-pricing-btn ${
                      !isMonthly ? "active" : ""
                    }`}
                    onClick={() => setIsMonthly(false)}
                  >
                    Yearly
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              subtitle={plan.subtitle}
              monthlyPrice={plan.monthlyPrice}
              yearlyPrice={plan.yearlyPrice}
              isMonthly={isMonthly}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const PricingCard = ({
  title,
  subtitle,
  monthlyPrice,
  yearlyPrice,
  isMonthly,
  features,
  isPopular,
}) => {
  return (
    <div className={`col-md-6 col-lg-4 ${isPopular ? "popular" : ""}`}>
      <div className="qty-price-card">
        <div className="qty-price-card__head">
          <div className="qty-price-card__head-icon flex-shrink-0">
            <img
              src={`/icon-price-${isPopular ? "2" : "1"}.png`}
              alt="price icon"
              className="img-fluid"
            />
          </div>
          <div className="qty-price-card__title flex-grow-1">
            <span className="qty-price-card__title-sub">{subtitle}</span>
            <span className="qty-price-card__title-name">{title}</span>
          </div>
        </div>
        <p className="qty-price-card__details">
          Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
          elit.
        </p>
        <div
          className={`qty-price-card__price 
            qty-price-card__price-monthly`}
        >
          <span className="qty-price-card__price-is">
            ${isMonthly === true ? monthlyPrice : yearlyPrice}
          </span>
          <span className="qty-price-card__price-text">
            {isMonthly ? "/monthly" : "/yearly"}
          </span>
        </div>
        <span className="qty-price-card__feature-title">What’s included</span>
        <ul className="list gap-3">
          {features.map((feature, index) => (
            <li key={index} className={index >= 3 ? "opacity-25" : ""}>
              <div className="d-flex align-items-center gap-3">
                <span className="flex-shrink-0 qty-price-card__feature-icon">
                  <i className="fa-solid fa-circle-check"></i>
                </span>
                <span className="d-block flex-grow-1 qty-price-card__feature-text">
                  {feature}
                </span>
              </div>
            </li>
          ))}
        </ul>
        <a href="#" className="qty-price-card__btn">
          <span className="qty-price-card__btn-content">
            <img src="/icon-arrow-down.png" alt="image" className="img-fluid" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default AiCompanyPricing;
