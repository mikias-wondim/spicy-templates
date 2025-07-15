import Link from "next/link";

const SoftwareCompanyPortfolio = () => {
  return (
    <>
      <section className="sc-portfolio-section ptb-120 bg-white position-relative z-1 overflow-hidden border-line-bg">
        <span className="sc-shape-gradient sc-shape-gradient-7 position-absolute z--1"></span>
        <span className="sc-shape-gradient sc-shape-gradient-8 position-absolute z--1"></span>
        <span className="sc-shape-gradient sc-shape-gradient-9 position-absolute z--1"></span>
        <span className="sc-shape-gradient sc-shape-gradient-10 position-absolute z--1"></span>
        <span className="sc-shape-gradient sc-shape-gradient-11 position-absolute z--1"></span>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-5 col-xl-8 col-lg-7">
              <div className="section-title text-center">
                <h2 className="mb-40">
                  Maak kennis onze meest gevraagde nerds
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-4 justify-content-center masonry_grid">
            <div className="col-xl-5 col-lg-7 col-md-6 grid_item">
              <div className="sc-portfolio-card position-relative rounded overflow-hidden active">
                <img
                  src="/software-company/pf-1.jpg"
                  alt="not found"
                  className="img-fluid"
                />
                <div className="pf-content-box bg-white p-4 rounded">
                  <Link
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="d-inline-block text-dark badge bg-primary-soft"
                  >
                    App Design
                  </Link>
                  <a href="#">
                    <h5 className="mb-0 mt-3 sc-heading-color">
                      Holisticly benchmark reliable sources before holistic
                    </h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-md-6 grid_item">
              <div className="sc-portfolio-card position-relative rounded overflow-hidden card-sm">
                <img
                  src="/software-company/pf-2.jpg"
                  alt="not found"
                  className="img-fluid"
                />
                <div className="pf-content-box bg-white p-4 rounded">
                  <Link
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="d-inline-block text-dark badge bg-primary-soft"
                  >
                    App Design
                  </Link>
                  <a href="#">
                    <h5 className="mb-0 mt-3 sc-heading-color">
                      Holisticly bench mark sources before holistic
                    </h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-7 col-md-6 grid_item">
              <div className="sc-portfolio-card position-relative rounded overflow-hidden card-sm">
                <img
                  src="/software-company/pf-3.jpg"
                  alt="not found"
                  className="img-fluid"
                />
                <div className="pf-content-box bg-white p-4 rounded">
                  <Link
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="d-inline-block text-dark badge bg-primary-soft"
                  >
                    App Design
                  </Link>
                  <a href="#">
                    <h5 className="mb-0 mt-3 sc-heading-color">
                      Holisticly bench mark sources before holistic
                    </h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6 grid_item">
              <div className="sc-portfolio-card position-relative rounded overflow-hidden card-sm">
                <img
                  src="/software-company/pf-4.jpg"
                  alt="not found"
                  className="img-fluid"
                />
                <div className="pf-content-box bg-white p-4 rounded">
                  <Link
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="d-inline-block text-dark badge bg-primary-soft"
                  >
                    App Design
                  </Link>
                  <a href="#">
                    <h5 className="mb-0 mt-3 sc-heading-color">
                      Holisticly bench mark sources before holistic
                    </h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-7 col-md-6 grid_item">
              <div className="sc-portfolio-card position-relative rounded overflow-hidden card-sm">
                <img
                  src="/software-company/pf-5.jpg"
                  alt="not found"
                  className="img-fluid"
                />
                <div className="pf-content-box bg-white p-4 rounded">
                  <Link
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="d-inline-block text-dark badge bg-primary-soft"
                  >
                    App Design
                  </Link>
                  <a href="#">
                    <h5 className="mb-0 mt-3 sc-heading-color">
                      Holisticly benchmark reliable sources before holistic
                    </h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-md-6 grid_item">
              <div className="sc-portfolio-card position-relative rounded overflow-hidden card-sm">
                <img
                  src="/software-company/pf-6.jpg"
                  alt="not found"
                  className="img-fluid"
                />
                <div className="pf-content-box bg-white p-4 rounded">
                  <Link
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="d-inline-block text-dark badge bg-primary-soft"
                  >
                    App Design
                  </Link>
                  <a href="#">
                    <h5 className="mb-0 mt-3 sc-heading-color">
                      Holisticly bench mark sources before holistic
                    </h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <Link href="/software-company" className="btn sc-outline-btn">
              View all Item
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SoftwareCompanyPortfolio;
