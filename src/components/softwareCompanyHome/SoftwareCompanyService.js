import Link from "next/link";

const SoftwareCompanyService = () => {
  return (
    <>
      <section className="sc-service-section ptb-120 bg-white overflow-hidden position-relative z-1 border-line-bg">
        <span className="sc-shape-gradient sc-shape-gradient-1 position-absolute z--1"></span>
        <span className="sc-shape-gradient sc-shape-gradient-2 position-absolute z--1"></span>
        <span className="sc-shape-gradient sc-shape-gradient-3 position-absolute z--1"></span>
        <div className="container">
          <div className="row align-items-center justify-content-center justify-content-lg-between g-4">
            <div className="col-lg-6 col-md-8">
              <div className="section-title text-center text-lg-start">
                <h2 className="sc-heading-color mb-0">
                  Maak kennis onze meest gevraagde nerds
                </h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-end d-none d-lg-block">
                <Link href="/services" className="btn sc-outline-btn">
                  Browse all Service
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="row g-4 justify-content-center">
              <div className="col-xxl-3 col-xl-4 col-md-6">
                <div className="sc-service-card bg-white rounded">
                  <a href="service-single.html">
                    <h5 className="sc-heading-color mb-3">IT Consultation</h5>
                  </a>
                  <p className="mb-30">
                    We provide best IT solutions for any type of business as
                    company strategy management.
                  </p>
                  <div className="d-flex align-items-center justify-content-between">
                    <Link href="/services" className="explore-more">
                      Read More
                    </Link>
                    <img
                      src="/software-company/icon-1.png"
                      alt="icon"
                      className="img-fluid feature-icon"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-md-6">
                <div className="sc-service-card bg-white rounded">
                  <Link href="/services">
                    <h5 className="sc-heading-color mb-3">
                      Software Development
                    </h5>
                  </Link>
                  <p className="mb-30">
                    We provide best IT solutions for any type of business as
                    company strategy management.
                  </p>
                  <div className="d-flex align-items-center justify-content-between">
                    <Link href="/services" className="explore-more">
                      Read More
                    </Link>
                    <img
                      src="/software-company/icon-2.png"
                      alt="icon"
                      className="img-fluid feature-icon"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-md-6">
                <div className="sc-service-card bg-white rounded">
                  <Link href="/services">
                    <h5 className="sc-heading-color mb-3">Data Security</h5>
                  </Link>
                  <p className="mb-30">
                    We provide best IT solutions for any type of business as
                    company strategy management.
                  </p>
                  <div className="d-flex align-items-center justify-content-between">
                    <Link href="/services" className="explore-more">
                      Read More
                    </Link>
                    <img
                      src="/software-company/icon-3.png"
                      alt="icon"
                      className="img-fluid feature-icon"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-md-6">
                <div className="sc-service-card bg-white rounded">
                  <Link href="/services">
                    <h5 className="sc-heading-color mb-3">Machine Learning</h5>
                  </Link>
                  <p className="mb-30">
                    We provide best IT solutions for any type of business as
                    company strategy management.
                  </p>
                  <div className="d-flex align-items-center justify-content-between">
                    <Link href="/services" className="explore-more">
                      Read More
                    </Link>
                    <img
                      src="/software-company/icon-4.png"
                      alt="icon"
                      className="img-fluid feature-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center d-lg-none mt-5">
              <Link href="/services" className="btn sc-outline-btn">
                Browse all Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SoftwareCompanyService;
