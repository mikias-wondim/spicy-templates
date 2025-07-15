import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";

const HelpDeskSupport = () => {
  // State to manage which accordion item is active
  const [activeItemId, setActiveItemId] = useState("hd_acc1");

  // Data for the accordion items
  const accordionItems = [
    {
      id: "hd_acc1",
      title: "Feedback Requests",
      content:
        "Globally whiteboard global web-readiness rather than holistic action items. Uniquely communicate synergistic markets.",
    },
    {
      id: "hd_acc2",
      title: "HelpDesk Analytics",
      content:
        "Globally whiteboard global web-readiness rather than holistic action items. Uniquely communicate synergistic markets.",
    },
    {
      id: "hd_acc3",
      title: "Ticket Tagging",
      content:
        "Globally whiteboard global web-readiness rather than holistic action items. Uniquely communicate synergistic markets.",
    },
  ];

  // Handle click event to toggle active accordion item
  const handleToggle = (id) => {
    setActiveItemId((prevId) => (prevId === id ? null : id));
  };
  return (
    <>
      <section className="hd-support-section ptb-120 overflow-hidden">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="hd-suppport-content">
                <div className="hd-title text-center text-lg-start">
                  <h2 className="clr-text">
                    Improve the Quality of Your IT Help{" "}
                    <mark className="bg-transparent p-0 position-relative">
                      Desk Support{" "}
                      <img
                        src="/shape/line-shape.png"
                        alt="line shape"
                        className="line-shape position-absolute"
                      />
                    </mark>
                  </h2>
                </div>
                <div className="accordion hd-accordion mt-60" id="hd_accordion">
                  {accordionItems.map((item) => (
                    <div
                      className={`accordion-item ${
                        item.id === activeItemId ? "active" : ""
                      }`}
                      key={item.id}
                    >
                      <div className="accordion-header">
                        <a
                          href={`#${item.id}`}
                          className={`d-flex justify-content-between ${
                            item.id === activeItemId ? "" : "collapsed"
                          }`}
                          data-bs-toggle="collapse"
                          onClick={() => handleToggle(item.id)}
                        >
                          {item.title}
                          <span>
                            {item.id === activeItemId ? (
                              <FaMinus />
                            ) : (
                              <FaPlus />
                            )}
                          </span>
                        </a>
                      </div>
                      <div
                        className={`accordion-collapse collapse ${
                          item.id === activeItemId ? "show" : ""
                        }`}
                        id={item.id}
                        data-bs-parent="#hd_accordion"
                      >
                        <div className="accordion-body pt-0">
                          <p className="mb-0">{item.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hd-support-right position-relative z-1">
                <img
                  src="/help-desk/support-1.png"
                  alt="support"
                  className="img-fluid"
                />
                <div className="hd_exbox d-inline-block position-absolute z-1">
                  <div className="hd_exbox_content bg-white">
                    <h2 className="mb-0">12+</h2>
                    <p className="mb-0">Years of Expertise</p>
                  </div>
                </div>
                <img
                  src="/shape/arrow-blue.png"
                  alt="arrow blue"
                  className="position-absolute arrow-blue z--1"
                />
              </div>
            </div>
          </div>
          <div className="pt-120">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="hd-support-img">
                  <img
                    src="/help-desk/support-2.png"
                    alt="support"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-6  order-1 order-lg-2">
                <div className="hd-support-content">
                  <div className="hd-title">
                    <h2 className="mb-30 clr-text">
                      Support any Channel <br /> With on{" "}
                      <mark className="bg-transparent p-0 position-relative">
                        Platform{" "}
                        <img
                          src="/shape/line-shape.png"
                          alt="arrow"
                          className="position-absolute line-shape"
                        />
                      </mark>
                    </h2>
                    <p className="mb-0">
                      Distinctively initiate viral ideas for goal-oriented
                      partnerships. Appropriately network cross-media
                      opportunities with cross-platform total linkage. Uniquely
                      create turnkey value rather than revolutionary
                      applications. Dynamically architect.
                    </p>
                  </div>
                  <div className="hd-support-box-wrapper mt-5 d-flex align-items-center flex-wrap">
                    <div className="hd-support-box rounded d-inline-flex align-items-center flex-shrink-0 bg-white">
                      <span className="icon-wrapper">
                        <i className="fa-regular fa-envelope"></i>
                      </span>
                      <p className="mb-0 ms-3">Messaging</p>
                    </div>
                    <div className="hd-support-box rounded d-inline-flex align-items-center flex-shrink-0 bg-white">
                      <span className="icon-wrapper">
                        <i className="fa-brands fa-whatsapp"></i>
                      </span>
                      <p className="mb-0 ms-3">WhatsApp</p>
                    </div>
                    <div className="hd-support-box rounded d-inline-flex align-items-center flex-shrink-0 bg-white">
                      <span className="icon-wrapper">
                        <i className="fa-brands fa-discord"></i>
                      </span>
                      <p className="mb-0 ms-3">Discord</p>
                    </div>
                    <div className="hd-support-box rounded d-inline-flex align-items-center flex-shrink-0 bg-white">
                      <span className="icon-wrapper">
                        <i className="fa-brands fa-slack"></i>
                      </span>
                      <p className="mb-0 ms-3">Slack</p>
                    </div>
                    <div className="hd-support-box rounded d-inline-flex align-items-center flex-shrink-0 bg-white">
                      <span className="icon-wrapper">
                        <i className="fa-brands fa-skype"></i>
                      </span>
                      <p className="mb-0 ms-3">Skype</p>
                    </div>
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

export default HelpDeskSupport;
