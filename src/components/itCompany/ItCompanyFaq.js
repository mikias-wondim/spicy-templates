import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";
const accordionData = [
  {
    id: "collapseOne",
    title: "How Does we Work?",
    content:
      "Distinctively initiate viral ideas for goal-oriented partnerships. Appropriately network cross-media platform total linkage. Uniquely create turnkey.",
  },
  {
    id: "collapseTwo",
    title: "How long does a project last?",
    content:
      "Distinctively initiate viral ideas for goal-oriented partnerships. Appropriately network cross-media platform total linkage. Uniquely create turnkey.",
  },
  {
    id: "collapseThree",
    title: "IT help desk for internal teams",
    content:
      "Distinctively initiate viral ideas for goal-oriented partnerships. Appropriately network cross-media platform total linkage. Uniquely create turnkey.",
  },
];
const accordionDataTwo = [
  {
    id: "2",
    title: "How Does we Work?",
    content:
      "Distinctively initiate viral ideas for goal-oriented partnerships. Appropriately network cross-media platform total linkage. Uniquely create turnkey.",
  },
  {
    id: "3",
    title: "How long does a project last?",
    content:
      "Distinctively initiate viral ideas for goal-oriented partnerships. Appropriately network cross-media platform total linkage. Uniquely create turnkey.",
  },
  {
    id: "4",
    title: "IT help desk for internal teams",
    content:
      "Distinctively initiate viral ideas for goal-oriented partnerships. Appropriately network cross-media platform total linkage. Uniquely create turnkey.",
  },
];
const accordionDataThree = [
  {
    id: "5",
    title: "How Does we Work?",
    content:
      "Distinctively initiate viral ideas for goal-oriented partnerships. Appropriately network cross-media platform total linkage. Uniquely create turnkey.",
  },
  {
    id: "6",
    title: "How long does a project last?",
    content:
      "Distinctively initiate viral ideas for goal-oriented partnerships. Appropriately network cross-media platform total linkage. Uniquely create turnkey.",
  },
  {
    id: "7",
    title: "IT help desk for internal teams",
    content:
      "Distinctively initiate viral ideas for goal-oriented partnerships. Appropriately network cross-media platform total linkage. Uniquely create turnkey.",
  },
];
const ItCompanyFaq = () => {
  const [activeAccordion, setActiveAccordion] = useState(accordionData[0].id);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };
  return (
    <>
      <div className="it-company-faq-area ptb-120 position-relative overflow-hidden">
        <img
          src="/it_company/shape/faq.png"
          alt=""
          className="s-one position-absolute"
        />
        <img
          src="/it_company/shape/faq_2.png"
          alt=""
          className="s-two position-absolute"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <h2 className="it-company-title it-company-color fs-40 fw-600 flh-56 mb-40">
                  Frequently Asked Questions
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="accordion ca-accordion" id="technologicalQuery">
                {accordionData.map((item) => (
                  <div className="accordion-item" key={item.id}>
                    <h2 className="accordion-header ">
                      <button
                        className={`accordion-button d-flex align-items-center justify-content-between ${
                          activeAccordion === item.id ? "" : "collapsed"
                        }`}
                        type="button"
                        onClick={() => toggleAccordion(item.id)}
                        aria-expanded={activeAccordion === item.id}
                        aria-controls={item.id}
                      >
                        {item.title}
                        <span>
                          {activeAccordion === item.id ? (
                            <FaMinus size={20} />
                          ) : (
                            <FaPlus size={20} />
                          )}
                        </span>
                      </button>
                    </h2>
                    <div
                      id={item.id}
                      className={`accordion-collapse collapse ${
                        activeAccordion === item.id ? "show" : ""
                      }`}
                      data-bs-parent="#technologicalQuery"
                    >
                      <div className="accordion-body">{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="accordion ca-accordion" id="technologicalQuery">
                {accordionDataTwo.map((item) => (
                  <div className="accordion-item" key={item.id}>
                    <h2 className="accordion-header ">
                      <button
                        className={`accordion-button d-flex align-items-center justify-content-between ${
                          activeAccordion === item.id ? "" : "collapsed"
                        }`}
                        type="button"
                        onClick={() => toggleAccordion(item.id)}
                        aria-expanded={activeAccordion === item.id}
                        aria-controls={item.id}
                      >
                        {item.title}
                        <span>
                          {activeAccordion === item.id ? (
                            <FaMinus size={20} />
                          ) : (
                            <FaPlus size={20} />
                          )}
                        </span>
                      </button>
                    </h2>
                    <div
                      id={item.id}
                      className={`accordion-collapse collapse ${
                        activeAccordion === item.id ? "show" : ""
                      }`}
                      data-bs-parent="#technologicalQuery"
                    >
                      <div className="accordion-body">{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="accordion ca-accordion" id="technologicalQuery">
                {accordionDataThree.map((item) => (
                  <div className="accordion-item" key={item.id}>
                    <h2 className="accordion-header ">
                      <button
                        className={`accordion-button d-flex align-items-center justify-content-between ${
                          activeAccordion === item.id ? "" : "collapsed"
                        }`}
                        type="button"
                        onClick={() => toggleAccordion(item.id)}
                        aria-expanded={activeAccordion === item.id}
                        aria-controls={item.id}
                      >
                        {item.title}
                        <span>
                          {activeAccordion === item.id ? (
                            <FaMinus size={20} />
                          ) : (
                            <FaPlus size={20} />
                          )}
                        </span>
                      </button>
                    </h2>
                    <div
                      id={item.id}
                      className={`accordion-collapse collapse ${
                        activeAccordion === item.id ? "show" : ""
                      }`}
                      data-bs-parent="#technologicalQuery"
                    >
                      <div className="accordion-body">{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItCompanyFaq;
