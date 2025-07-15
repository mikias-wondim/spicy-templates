const SoftwareCompanyHero = () => {
  return (
    <>
      <section className="sc-hero-section ptb-120 position-relative overflow-hidden z-1">
        <img
          src="/software-company/hero-curve-line.png"
          alt="curve line"
          className="position-absolute end-0 top-0 z--1"
        />
        <img
          src="/software-company/section-line.png"
          alt="section line"
          className="position-absolute z--1 start-50 top-0 translate-middle-x"
        />
        <img
          src="/software-company/prism.png"
          alt="prism"
          className="position-absolute prism z--1"
        />
        <img
          src="/software-company/coin.png"
          alt="coin"
          className="position-absolute coin z--1"
        />
        <img
          src="/software-company/hero-bg-shape.png"
          alt="bg shape"
          className="position-absolute bottom-0 start-0 z-1 w-100"
        />
        <img
          src="/software-company/hero-line.png"
          alt="hero line"
          className="position-absolute hero-line bottom-0 translate-middle-x z-1"
        />
        <span className="skew-1 position-absolute"></span>
        <span className="skew-2 position-absolute"></span>
        <div className="container">
          <div className="row g-4 align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="sc-hero-content">
                <h1 className="mb-4 text-white display-5 fw-bold">
                  Make Digital Business Very Easy Way!
                </h1>
                <p className="mb-5 text-white">
                  Make your work easier with an integrated ecosystem that lets
                  <br className="d-none d-xl-block" />
                  all departments work properly together.
                </p>
                <a href="#" className="btn btn-primary">
                  Explore our works
                </a>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="sc-hero-right position-relative mt-5 mt-lg-0">
                <img
                  src="/software-company/hero-img.png"
                  alt="not found"
                  className="img-fluid"
                />
                <img
                  src="/software-company/circle-shape-lg.png"
                  alt="shape"
                  className="position-absolute z--1 w-100 hero-circle-shape"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SoftwareCompanyHero;
