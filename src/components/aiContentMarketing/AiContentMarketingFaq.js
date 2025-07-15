import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const AiContentMarketingFaq = () => {
  const accordionData = [
    {
      question: "How Does it Work?",
      answer:
        "Distinctively initiate viral ideas for goal-oriented partnerships. Appropriately network cross-media platform total linkage. Uniquely create turnkey solutions.",
    },
    {
      question: "How long does a project last?",
      answer:
        "Distinctively initiate viral ideas for goal-oriented partnerships. Appropriately network cross-media platform total linkage. Uniquely create turnkey solutions.",
    },
    {
      question: "IT help desk for internal teams",
      answer:
        "Distinctively initiate viral ideas for goal-oriented partnerships. Appropriately network cross-media platform total linkage. Uniquely create turnkey solutions.",
    },
    {
      question: "Are the generated images unique?",
      answer:
        "Distinctively initiate viral ideas for goal-oriented partnerships. Appropriately network cross-media platform total linkage. Uniquely create turnkey solutions.",
    },
    {
      question: "Writebot AI Image Generator?",
      answer:
        "Distinctively initiate viral ideas for goal-oriented partnerships. Appropriately network cross-media platform total linkage. Uniquely create turnkey solutions.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <div className="ai-wt-faq-area ptb-120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5">
                <div className="pr-20">
                  <h2 className="aiwt-title text-black ff-risk-pri fs-48 mb-20">
                    Questions About Writebot{" "}
                    <span className="ai-wt-brand-text fw-400">
                      for Affiliate
                    </span>
                  </h2>
                  <p className="mb-0">
                    Streamline your video creation process by embedding your
                    videos colleagues they but that we haven't seen before.
                  </p>
                </div>
              </div>
              <div className="col-xl-7">
                <div className="aiwt-faq">
                  <div
                    className="accordion ca-accordion"
                    id="technologicalQuery"
                  >
                    {accordionData.map((item, index) => (
                      <div className="accordion-item" key={index}>
                        <h2 className="accordion-header">
                          <button
                            className={`accordion-button  d-flex align-align-items-center justify-content-between ${
                              activeIndex === index ? "" : "collapsed"
                            }`}
                            type="button"
                            onClick={() => handleToggle(index)}
                            aria-expanded={activeIndex === index}
                            aria-controls={`collapse${index}`}
                          >
                            {item.question}
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
                          <div className="accordion-body">{item.answer}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AiContentMarketingFaq;
