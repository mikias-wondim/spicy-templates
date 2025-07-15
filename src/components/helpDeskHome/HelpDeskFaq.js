import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import Link from "next/link";
const HelpDeskFaq = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const faqItems = [
    {
      id: 1,
      question: "What is a help desk?",
      answer:
        "Globally whiteboard global web-readiness rather than holistic action items. Uniquely communicate synergistic markets.",
    },
    {
      id: 2,
      question: "IT service desk receives repetitive questions",
      answer:
        "Distinctively initiate viral ideas for goal-oriented partnerships. Appropriately network cross-media opportunities platform total linkage. Uniquely create turnkey value rather than revolutionary applications. Dynamically architect.",
    },
    {
      id: 3,
      question: "IT help desk for internal teams",
      answer:
        "Globally whiteboard global web-readiness rather than holistic action items. Uniquely communicate synergistic markets.",
    },
    {
      id: 4,
      question: "What is a help desk?",
      answer:
        "Globally whiteboard global web-readiness rather than holistic action items. Uniquely communicate synergistic markets.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <>
      <section className="hd-faq-section pb-80">
        <div className="container">
          <div className="row g-5 justify-content-center">
            <div className="col-xl-5 col-lg-8">
              <div className="hd-chat-box">
                <h3 className="text-white mb-3">
                  24/7 Chat Support
                  <br />
                  for all Quiety Desk Users
                </h3>
                <p className="text-white mb-4">
                  Distinctively initiate viral ideas for goal-oriented
                  partnerships. Appropriately network cross-media opportunities
                  platform total linkage. Uniquely create turnkey value rather
                  than revolutionary applications. Dynamically architect.
                </p>
                <Link
                  href="/contact-us"
                  className="read-more-link text-warning"
                >
                  Chat with us Right Now <FaAngleRight className="ms-1" />
                </Link>
                <img
                  src="/help-desk/illustration.png"
                  alt="illustration"
                  className="img-fluid mt-4"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-8 align-self-end">
              <div className="hd-faq-wrapper">
                <div className="hd-title">
                  <h2 className="clr-text">
                    Got Questions? <br /> We've Got{" "}
                    <mark className="bg-transparent p-0 position-relative">
                      Answers{" "}
                      <img
                        src="/shape/line-shape.png"
                        alt="line shape"
                        className="position-absolute line-shape"
                      />
                    </mark>
                  </h2>
                </div>
                <div
                  className="accordion hd-accordion hd-accordion2 mt-60"
                  id="hd_accordion2"
                >
                  {faqItems.map((item, index) => (
                    <div
                      className={`accordion-item ${
                        activeIndex === index ? "active" : ""
                      }`}
                      key={item.id}
                    >
                      <div className="accordion-header">
                        <a
                          href={`#hd2_acc${item.id}`}
                          className={`d-flex justify-content-between ${
                            activeIndex === index ? "" : "collapsed"
                          }`}
                          onClick={() => toggleAccordion(index)}
                          data-bs-toggle="collapse"
                        >
                          {item.question}
                          <span>
                            {activeIndex === index ? <FaMinus /> : <FaPlus />}
                          </span>
                        </a>
                      </div>
                      <div
                        className={`accordion-collapse collapse ${
                          activeIndex === index ? "show" : ""
                        }`}
                        id={`hd2_acc${item.id}`}
                        data-bs-parent="#hd_accordion2"
                      >
                        <div className="accordion-body pt-0">
                          <p className="mb-0">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpDeskFaq;
