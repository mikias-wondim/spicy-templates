import { useState } from "react";

const CrmPriceTable = () => {
  const [isYearly, setIsYearly] = useState(true);
  //   console.log("isYearly", isYearly);

  const handleSwitchToggle = () => {
    setIsYearly((prevState) => !prevState);
  };

  // Define pricing data
  const pricingData = [
    {
      title: "Standard",
      yearlyPrice: "$14",
      monthlyPrice: "$03",
    },
    {
      title: "Professional",
      yearlyPrice: "$20",
      monthlyPrice: "$04",
    },
    {
      title: "Enterprise",
      yearlyPrice: "$40",
      monthlyPrice: "$05",
    },
    {
      title: "Ultimate",
      yearlyPrice: "$64",
      monthlyPrice: "$06",
    },
  ];

  //   sale force
  const [openSection, setOpenSection] = useState("salesForce");

  // Define the feature rows for both sections
  const salesForceFeatures = [
    { name: "Basic Modules", checks: [true, true, true, true] },
    { name: "Tasks, Calls, Events", checks: [true, true, true, true] },
    { name: "Advanced filters", checks: [true, true, true, true] },
    { name: "Multiple pipelines", checks: [true, true, true, true] },
    { name: "Scoring Rules", checks: [true, true, true, true] },
    { name: "Sales forecasting", checks: [true, true, true, true] },
    { name: "Email insights", checks: [true, true, true, true] },
    { name: "Multiple Currencies", checks: [true, true, true, true] },
  ];

  const customerRelationshifFeatures = [
    { name: "Basic Modules", checks: [true, true, true, true] },
    { name: "Tasks, Calls, Events", checks: [true, true, true, true] },
    { name: "Advanced filters", checks: [true, true, true, true] },
    { name: "Multiple pipelines", checks: [true, true, true, true] },
    { name: "Scoring Rules", checks: [true, true, true, true] },
    { name: "Sales forecasting", checks: [true, true, true, true] },
    { name: "Email insights", checks: [true, true, true, true] },
    { name: "Multiple Currencies", checks: [true, true, true, true] },
  ];

  const marketingautomation = [
    { name: "Basic Modules", checks: [true, true, true, true] },
    { name: "Tasks, Calls, Events", checks: [true, true, true, true] },
    { name: "Advanced filters", checks: [true, true, true, true] },
    { name: "Multiple pipelines", checks: [true, true, true, true] },
    { name: "Scoring Rules", checks: [true, true, true, true] },
    { name: "Sales forecasting", checks: [true, true, true, true] },
    { name: "Email insights", checks: [true, true, true, true] },
    { name: "Multiple Currencies", checks: [true, true, true, true] },
  ];
  const supportservice = [
    { name: "Basic Modules", checks: [true, true, true, true] },
    { name: "Tasks, Calls, Events", checks: [true, true, true, true] },
    { name: "Advanced filters", checks: [true, true, true, true] },
    { name: "Multiple pipelines", checks: [true, true, true, true] },
    { name: "Scoring Rules", checks: [true, true, true, true] },
    { name: "Sales forecasting", checks: [true, true, true, true] },
    { name: "Email insights", checks: [true, true, true, true] },
    { name: "Multiple Currencies", checks: [true, true, true, true] },
  ];

  // Handle toggling sections
  const handleToggle = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };
  return (
    <>
      <section className="crm-pricing-section pt-120 crm-bg-yellow position-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="crm-title text-center">
                <span className="crm-subtitle">
                  Pricing Table{" "}
                  <img
                    src="/shape/arrow-red.png"
                    alt="arrow"
                    className="ms-1"
                  />
                </span>
                <h2 className="mb-3 clr-text">Explore the top Features</h2>
                <ul className="crm-special-features list-unstyled p-0 m-0 d-flex align-items-center justify-content-center flex-wrap">
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
          <div className="crm-pricing-table table-responsive bg-white mt-5">
            <table className="table">
              <thead>
                <tr>
                  <th className="crm-pricing-switch-wrapper position-relative">
                    <span className="title">Features</span>
                    <span className="crm-offer-badge">Get 30% Off</span>
                    <div className="crm-pricing-switch">
                      <button
                        className={`crm-monthly ${!isYearly ? "active" : ""}`}
                        onClick={() => setIsYearly(false)}
                      >
                        Monthly
                      </button>
                      <span className="crm-switch" onClick={handleSwitchToggle}>
                        <input
                          type="checkbox"
                          className="crm-checkbox-switch"
                          checked={isYearly}
                          readOnly
                        />
                        <span className="crm-switch-dot"></span>
                      </span>
                      <button
                        className={`crm-yearly ${isYearly ? "active" : ""}`}
                        onClick={() => setIsYearly(true)}
                      >
                        Yearly
                      </button>
                    </div>
                    <img
                      src="/shape/arrow-shape.png"
                      alt="arrow"
                      className="arrow-shape"
                    />
                  </th>
                  {pricingData.map((plan, index) => (
                    <th key={index} className="text-center crm-package-wrapper">
                      <span className="title-sm">{plan.title}</span>
                      <span className="crm-package-price">
                        {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <p className="mb-3 crm-package-subtitle">
                        /user/month billed annually
                      </p>
                      <a href="#" className="btn btn-sm crm-package-btn">
                        Try For Free
                      </a>
                    </th>
                  ))}
                </tr>
              </thead>
            </table>
          </div>
          <div
            className="crm_pricing_feature_accordion accordion bg-white"
            id="crm_pricing_accordion"
          >
            {/* Sales Force Automation Section */}
            <div className="accordion-item border-0">
              <div className="accordion-header bg-light-subtle">
                <a href="#crm_ft_2" onClick={() => handleToggle("salesForce")}>
                  Sales Force Automation
                </a>
              </div>
              <div
                className={`accordion-collapse collapse ${
                  openSection === "salesForce" ? "show" : ""
                }`}
                id="crm_ft_salesForce"
              >
                <div className="accordion-body p-0">
                  <div className="crm_pricing_feature_table table-responsive">
                    <table className="table">
                      <tbody>
                        {salesForceFeatures.map((feature, index) => (
                          <tr key={index}>
                            <td className="crm_pricing_features_name">
                              {feature.name}
                            </td>
                            {feature.checks.map((check, idx) => (
                              <td
                                key={idx}
                                className="crm_pricing_feature_check text-center"
                              >
                                {check ? <i className="fas fa-check"></i> : "-"}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Relationship Management Section */}
            <div className="accordion-item border-0">
              <div className="accordion-header bg-light-subtle">
                <a
                  href="#crm_ft_2"
                  onClick={() => handleToggle("customerRelationshif")}
                >
                  Customer Relationship Management
                </a>
              </div>
              <div
                className={`accordion-collapse collapse ${
                  openSection === "customerRelationshif" ? "show" : ""
                }`}
                id="crm_ft_customerRelationshif"
              >
                <div className="accordion-body p-0">
                  <div className="crm_pricing_feature_table table-responsive">
                    <table className="table">
                      <tbody>
                        {customerRelationshifFeatures.map((feature, index) => (
                          <tr key={index}>
                            <td className="crm_pricing_features_name">
                              {feature.name}
                            </td>
                            {feature.checks.map((check, idx) => (
                              <td
                                key={idx}
                                className="crm_pricing_feature_check text-center"
                              >
                                {check ? <i className="fas fa-check"></i> : "-"}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* marketing automation */}
            <div className="accordion-item border-0">
              <div className="accordion-header bg-light-subtle">
                <a
                  href="#crm_ft_2"
                  onClick={() => handleToggle("marketingautomation")}
                >
                  Marketing Automation
                </a>
              </div>
              <div
                className={`accordion-collapse collapse ${
                  openSection === "marketingautomation" ? "show" : ""
                }`}
                id="crm_ft_customerRelationshif"
              >
                <div className="accordion-body p-0">
                  <div className="crm_pricing_feature_table table-responsive">
                    <table className="table">
                      <tbody>
                        {marketingautomation.map((feature, index) => (
                          <tr key={index}>
                            <td className="crm_pricing_features_name">
                              {feature.name}
                            </td>
                            {feature.checks.map((check, idx) => (
                              <td
                                key={idx}
                                className="crm_pricing_feature_check text-center"
                              >
                                {check ? <i className="fas fa-check"></i> : "-"}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* support service*/}
            <div className="accordion-item border-0">
              <div className="accordion-header bg-light-subtle">
                <a
                  href="#crm_ft_2"
                  onClick={() => handleToggle("supportservice")}
                >
                  Support & Service
                </a>
              </div>
              <div
                className={`accordion-collapse collapse ${
                  openSection === "supportservice" ? "show" : ""
                }`}
                id="crm_ft_customerRelationshif"
              >
                <div className="accordion-body p-0">
                  <div className="crm_pricing_feature_table table-responsive">
                    <table className="table">
                      <tbody>
                        {supportservice.map((feature, index) => (
                          <tr key={index}>
                            <td className="crm_pricing_features_name">
                              {feature.name}
                            </td>
                            {feature.checks.map((check, idx) => (
                              <td
                                key={idx}
                                className="crm_pricing_feature_check text-center"
                              >
                                {check ? <i className="fas fa-check"></i> : "-"}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CrmPriceTable;
