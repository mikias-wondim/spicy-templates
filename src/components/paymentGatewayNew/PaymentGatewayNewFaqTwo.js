import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const faqData = [
  {
    id: 1,
    question: "How Does it Work?",
    answer:
      "Distinctively initiate viral ideas for goal-oriented partnerships. Appropriately network cross-media platform total linkage. Uniquely create turnkey solutions.",
  },
  {
    id: 2,
    question: "How long does a project last?",
    answer:
      "Distinctively initiate viral ideas for goal-oriented partnerships. Appropriately network cross-media platform total linkage. Uniquely create turnkey solutions.",
  },
  {
    id: 3,
    question: "IT help desk for internal teams",
    answer:
      "Distinctively initiate viral ideas for goal-oriented partnerships. Appropriately network cross-media platform total linkage. Uniquely create turnkey solutions.",
  },
  {
    id: 4,
    question: "Are the generated images unique?",
    answer:
      "Distinctively initiate viral ideas for goal-oriented partnerships. Appropriately network cross-media platform total linkage. Uniquely create turnkey solutions.",
  },
];

const PaymentGatewayNewFaqTwo = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="pay-gw-faq-area ptb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img src="/home_34/faq.png" alt="FAQ" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <h2 className="pay-gw-title pay-gw-color fs-42 ff-risk-pri fw-800">
              Freely Asked Questions
            </h2>
            <p>
              Globally whiteboard global web-readiness rather than holistic
              action items. Uniquely communicate.
            </p>
            <div className="aiwt-faq pay-gw-style">
              <div className="accordion ca-accordion" id="technologicalQuery">
                {faqData.map((faq, index) => (
                  <div className="accordion-item" key={faq.id}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button d-flex align-align-items-center justify-content-between ${
                          activeIndex === index ? "" : "collapsed"
                        }`}
                        type="button"
                        onClick={() => handleToggle(index)}
                        aria-expanded={activeIndex === index}
                        aria-controls={`collapse${index}`}
                      >
                        {faq.question}
                        <span>
                          {activeIndex === index ? <FaMinus /> : <FaPlus />}
                        </span>
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className={`accordion-collapse collapse ${
                        activeIndex === index ? "show" : ""
                      }`}
                      data-bs-parent="#technologicalQuery"
                    >
                      <div className="accordion-body">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentGatewayNewFaqTwo;
