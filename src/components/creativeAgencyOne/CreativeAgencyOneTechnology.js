import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const CreativeAgencyOneTechnology = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const accordionData = [
    {
      id: "collapseOne",
      title: "Architectural Design & Planning",
      content:
        "Globally whiteboard global web-readiness rather than holistic action items. Uniquely communicate synergistic markets.",
    },
    {
      id: "collapseTwo",
      title: "Help Desk Analytics",
      content:
        "Globally whiteboard global web-readiness rather than holistic action items. Uniquely communicate synergistic markets.",
    },
    {
      id: "collapseThree",
      title: "Ticket Tagging",
      content:
        "Globally whiteboard global web-readiness rather than holistic action items. Uniquely communicate synergistic markets.",
    },
  ];

  return (
    <>
      <div className="section-space bgc-background">
        <div className="container">
          <div className="row g-4 gy-5 gx-lg-5 gy-lg-0">
            <div className="col-lg-6">
              <div className="tech-img h-100">
                <div className="d-flex gap-8 h-100">
                  <div className="tech-img__item align-self-start">
                    <img
                      src="/creative-agency/tech-img-1.png"
                      alt="image"
                      className="img-fluid w-100 object-fit-cover"
                    />
                  </div>
                  <div className="tech-img__item align-self-end">
                    <img
                      src="/creative-agency/tech-img-2.png"
                      alt="image"
                      className="img-fluid w-100 object-fit-cover"
                    />
                  </div>
                </div>
                <span className="width-30 height-30 rounded-circle bgc-warning position-absolute top-0 end-25p d-none d-lg-inline-block"></span>
                <span className="width-30 height-30 rounded-circle bgc-secondary position-absolute bottom-0 start-25p d-none d-lg-inline-block"></span>
              </div>
            </div>
            <div className="col-lg-6">
              <h4 className="heading-4 margin-bottom-8 clr-text">
                Technology Is Best When People Together
              </h4>
              <p className="clr-paragraph margin-bottom-10">
                Distinctively initiate viral ideas for goal-oriented
                partnerships. Appropriately network cross-media opportunities
                with cross-platform total linkage. Uniquely create turnkey value
                rather than revolutionary applications.
              </p>
              <a
                href="#"
                className="link d-inline-flex padding-y-3 padding-x-10 margin-bottom-10 text-center rounded-pill bgc-primary font-weight-bold clr-white"
              >
                More About Us
              </a>
              <div className="accordion ca-accordion" id="technologicalQuery">
                {accordionData.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header ">
                      <button
                        className={`accordion-button d-flex align-items-center justify-content-between  ${
                          activeIndex === index ? "" : "collapsed"
                        }`}
                        type="button"
                        onClick={() => handleToggle(index)}
                        aria-expanded={activeIndex === index}
                        aria-controls={item.id}
                      >
                        {item.title}
                        <span className="px-3">
                          {activeIndex === index ? (
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
                        activeIndex === index ? "show" : ""
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

export default CreativeAgencyOneTechnology;
