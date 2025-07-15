const AgencyFaq = () => {
  return (
    <>
      <section className="hd-faq-section ah-bg pb-60 pt-120">
        <div className="container">
          <div className="row g-5 justify-content-center">
            <div className="col-xl-5 col-lg-8">
              <div className="hd-chat-box mt-0">
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
                <a
                  href="contact-us.html"
                  className="read-more-link text-warning"
                >
                  Chat with us Right Now{" "}
                  <i className="fas fa-angle-right ms-1"></i>
                </a>
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
                      Answers
                      <img
                        src="/shape/line-shape.png"
                        alt="line shape"
                        className="position-absolute line-shape"
                      />
                    </mark>
                  </h2>
                </div>
                <div
                  className="accordion faq-accordion mt-5"
                  id="accordionExample"
                >
                  <div className="accordion-item border border-2 active">
                    <h5 className="accordion-header" id="faq-1">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-1"
                        aria-expanded="true"
                      >
                        How does back pricing work?
                      </button>
                    </h5>
                    <div
                      id="collapse-1"
                      className="accordion-collapse collapse show"
                      aria-labelledby="faq-1"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Dramatically formulate cross-unit products with
                        web-enabled action items. Quickly maximize extensible
                        methods of empowerment without out-of-the-box
                        initiatives. Proactively myocardinate functional total
                        linkage rather than seamless information. Holisticly
                        fabricate timely initiatives vis-a-vis high-quality
                        imperatives. Continually deploy open-source content
                        through professional customer service.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border border-2">
                    <h5 className="accordion-header" id="faq-2">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-2"
                        aria-expanded="false"
                      >
                        Can you show me an example?
                      </button>
                    </h5>
                    <div
                      id="collapse-2"
                      className="accordion-collapse collapse"
                      aria-labelledby="faq-2"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Continually innovate technically sound internal or
                        "organic" sources with market positioning content.
                        Completely drive optimal intellectual capital vis-a-vis
                        global human capital. Intrinsicly administrate robust
                        materials and bleeding-edge resources. Dynamically
                        envisioneer next-generation markets vis-a-vis
                        market-driven applications
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border border-2">
                    <h5 className="accordion-header" id="faq-3">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-3"
                        aria-expanded="false"
                      >
                        How do I processing I need?
                      </button>
                    </h5>
                    <div
                      id="collapse-3"
                      className="accordion-collapse collapse"
                      aria-labelledby="faq-3"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Phosfluorescently deliver cooperative testing procedures
                        after integrated communities. Dramatically simplify
                        resource-leveling models with unique outsourcing.
                        Professionally simplify covalent partnerships whereas
                        market positioning best practices. Collaboratively
                        utilize magnetic technology for robust technology.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item border border-2">
                    <h5 className="accordion-header" id="faq-4">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-4"
                        aria-expanded="false"
                      >
                        What happens if I go over my limit?
                      </button>
                    </h5>
                    <div
                      id="collapse-4"
                      className="accordion-collapse collapse"
                      aria-labelledby="faq-4"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Credibly facilitate leveraged process improvements for
                        equity invested infrastructures. Continually mesh
                        top-line human capital with backward-compatible
                        outsourcing. Rapidiously coordinate intuitive
                        deliverables rather than parallel metrics. Interactively
                        monetize customer directed convergence and parallel
                        sources. Enthusiastically architect client-centric
                        e-services whereas granular e-commerce.
                      </div>
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

export default AgencyFaq;
