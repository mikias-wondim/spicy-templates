import Link from "next/link";

const DesignAgencyTwoAbout = () => {
  return (
    <>
      <section className="crm-about-section dat-section-after position-relative dat-bg pt-120 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6">
              <div className="crm-title text-center">
                <h2 className="mt-1 clr-text">Why Us Quiety</h2>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="row justify-content-center g-4">
              <div className="col-xl-6">
                <div className="crm-about-content-box crm-bg-light rounded overflow-hidden">
                  <div className="crm-content-top">
                    <h4 className="clr-text">Lead & Contact Management</h4>
                    <p className="mb-4">
                      Bring in quality leads, nurture them, and turn them into
                      happy, paying customers. Get a complete view of all
                      customer data—personal details, all communication you've
                      had with them, and more—all in a single place.
                    </p>
                    <Link
                      href="/design-agency-two"
                      className="read-more-link dat-about-btn"
                    >
                      Explore More{" "}
                      <i className="fa-solid fa-arrow-right-long ms-1"></i>
                    </Link>
                  </div>
                  <div className="text-center mt-4 position-relative z-1">
                    <span className="circle-shape position-absolute rounded-circle z--1"></span>
                    <img
                      src="/crm/vector-1.png"
                      alt="vector"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="row g-4 justify-content-center">
                  <div className="col-xl-12">
                    <div className="crm-about-content-box crm-bg-yellow-light rounded position-relative z-1 overflow-hidden">
                      <div className="crm-content-wrapper">
                        <h4 className="clr-text">Artificial Intelligence</h4>
                        <p className="mb-4">
                          Bring in quality leads, nurture them, and turn them
                          complete view of all customer data in a single place
                          into happy Get .
                        </p>
                        <Link
                          href="/design-agency-two"
                          className="read-more-link dat-about-btn"
                        >
                          Explore More{" "}
                          <i className="fa-solid fa-arrow-right-long ms-1"></i>
                        </Link>
                      </div>
                      <img
                        src="/crm/vector-2.png"
                        alt="vector"
                        className="crm-vector-img"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="crm-about-content-box crm-bg-light-green rounded position-relative z-1 overflow-hidden">
                      <div className="crm-content-wrapper">
                        <h4 className="clr-text">Collaborate With Our Team</h4>
                        <p className="mb-4">
                          Bring in quality leads, nurture them, and turn them
                          into happy, paying customers. Get a complete view of
                          single place.
                        </p>
                        <Link
                          href="/design-agency-two"
                          className="read-more-link dat-about-btn"
                        >
                          Explore More{" "}
                          <i className="fa-solid fa-arrow-right-long ms-1"></i>
                        </Link>
                      </div>
                      <img
                        src="/crm/vector-3.png"
                        alt="vector"
                        className="crm-vector-img"
                      />
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

export default DesignAgencyTwoAbout;
