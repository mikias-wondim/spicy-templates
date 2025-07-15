import React from "react";

const faqData = [
  {
    id: "collapseOne3",
    title: "Gaming",
    icon: "/home_34/faq-icon-1.svg",
    content:
      "Enhance the convenience of your online store by seamlessly integrating card payments. Embrace the future of transactions.",
    isOpen: true,
  },
  {
    id: "collapseTwo3",
    title: "Online Shopping",
    icon: "/home_34/faq-icon-2.svg",
    content:
      "Enhance the convenience of your online store by seamlessly integrating card payments. Embrace the future of transactions.",
    isOpen: false,
  },
  {
    id: "collapseTwo31",
    title: "Management",
    icon: "/home_34/faq-icon-3.svg",
    content:
      "Enhance the convenience of your online store by seamlessly integrating card payments. Embrace the future of transactions.",
    isOpen: false,
  },
  {
    id: "collapseTwo32",
    title: "Freelancer",
    icon: "/home_34/faq-icon-3.svg",
    content:
      "Enhance the convenience of your online store by seamlessly integrating card payments. Embrace the future of transactions.",
    isOpen: false,
  },
];

const PaymentGatewayNewFaqOne = () => {
  return (
    <div className="pay-gw-faq-area pay-gw-gg-bg">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-5 col-lg-6">
            <div className="pay-gw-faq-content ptb-120">
              <h2 className="pay-gw-title text-white fs-42 ff-risk-pri">
                Simplify transactions with ease and efficiency
              </h2>
              <img src="/home_34/faq-card.png" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="pay-gw-faq ptb-120">
              <div className="accordion ca-accordion" id="technologicalQuery3">
                {faqData.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${
                          item.isOpen ? "" : "collapsed"
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${item.id}`}
                        aria-expanded={item.isOpen}
                        aria-controls={item.id}
                      >
                        <span className="d-flex align-items-center gap-4 fs-42 fw-500 ff-risk-pri">
                          <span className="pay-faq-icon">
                            <img src={item.icon} alt="" className="img-fluid" />
                          </span>
                          {item.title}
                        </span>
                      </button>
                    </h2>
                    <div
                      id={item.id}
                      className={`accordion-collapse collapse ${
                        item.isOpen ? "show" : ""
                      }`}
                      data-bs-parent="#technologicalQuery3"
                    >
                      <div className="accordion-body">{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="request-demo.html"
                className="btn bg-warning text-white rounded-3 mt-60"
              >
                View More Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentGatewayNewFaqOne;
