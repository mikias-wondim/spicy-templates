import Link from "next/link";

const DesignAgencyService = () => {
  return (
    <>
      <section className="sc-service-section pb-120 pt-200 bg-white overflow-hidden position-relative">
        <div className="container">
          <div className="row align-items-center justify-content-center justify-content-lg-between g-4">
            <div className="col-lg-6 col-md-8">
              <div className="section-title text-center text-lg-start">
                <h2 className="sc-heading-color mb-0">Our Awesome Services</h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-end d-none d-lg-block">
                <Link
                  href="/services"
                  className="btn dg-outline-btn rounded-pill"
                >
                  Browse all Service
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="row justify-content-cetner g-4 justify-content-center">
              <div className="col-xxl-3 col-xl-4 col-md-6">
                <div className="sc-service-card rounded">
                  <Link href="/services">
                    <h5 className="sc-heading-color mb-3">Product Design</h5>
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
                      src="/software-company/icon-1.png"
                      alt="icon"
                      className="img-fluid feature-icon"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-md-6">
                <div className="sc-service-card rounded">
                  <Link href="/services">
                    <h5 className="sc-heading-color mb-3">App Design</h5>
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
                <div className="sc-service-card rounded">
                  <Link href="/services">
                    <h5 className="sc-heading-color mb-3">3d Character</h5>
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
                    <h5 className="sc-heading-color mb-3">
                      Vector illustration
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
                      src="/software-company/icon-4.png"
                      alt="icon"
                      className="img-fluid feature-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center d-lg-none mt-5">
              <Link
                href="/services"
                className="btn dg-outline-btn rounded-pill"
              >
                Browse all Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DesignAgencyService;
