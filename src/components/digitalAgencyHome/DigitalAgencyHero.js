import Link from "next/link";

const DigitalAgencyHero = () => {
  return (
    <>
      <section className="dg-hero-section position-relative z-1 overflow-hidden">
        <img
          src="/digital-agency/hero-left-shape.png"
          alt="hero shape"
          className="position-absolute hero-curve left z--1"
        />
        <img
          src="/digital-agency/hero-right-shape.png"
          alt="hero shape"
          className="position-absolute hero-curve right z--1"
        />
        <span className="dg-circle-blur position-absolute rounded-circle"></span>
        <img
          src="/digital-agency/hero-line-shape-1.png"
          alt="line shape"
          className="position-absolute hero-line-shape-1 z--1"
        />
        <img
          src="/digital-agency/hero-line-shape-2.png"
          alt="line shape"
          className="position-absolute hero-line-shape-2 z--1"
        />
        <img
          src="/digital-agency/hero-net-shape.png"
          alt="hero net"
          className="position-absolute hero-net-shape z--1"
        />
        <img
          src="/digital-agency/triangle-circle.png"
          alt="triangle"
          className="position-absolute triangle-circle z--1 d-none d-sm-block"
        />
        <span className="dg-hero-circle-1 dg-circle-style-1 position-absolute z--1 rounded-circle"></span>
        <span className="dg-hero-circle-2 dg-circle-style-1 position-absolute z--1 rounded-circle"></span>
        <span className="dg-hero-circle-3 dg-circle-style-2 position-absolute z--1 rounded-circle"></span>

        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-xl-6 col-lg-10">
              <div className="dg-hero-content">
                <span className="fw-bold text-warning mb-3">
                  QUIETY DIGITAL AGENCY
                </span>
                <h1 className="display-2 text-white mb-4 fw-bold">
                  We help you <br className="d-none d-xxl-block" />
                  to grow Business
                </h1>
                <p className="mb-5 text-white">
                  Make your work easier with an integrated ecosystem that lets
                  all departments work properly together.
                </p>
                <Link
                  href="/request-demo"
                  className="btn dg-primary-btn rounded-pill"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="dg-hero-right position-relative">
                <img
                  src="/digital-agency/doted.png"
                  alt="doted shape"
                  className="position-absolute doted-shape"
                />
                <img
                  src="/digital-agency/hero-man.png"
                  alt="man"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyHero;
