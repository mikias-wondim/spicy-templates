import Link from "next/link";

const DigitalAgencyCta = () => {
  return (
    <>
      <section className="dg-cta-section ptb-120 position-relative overflow-hidden z-1 bg-light-subtle">
        <img
          src="/digital-agency/cta-curve-left.png"
          alt="curve shape"
          className="position-absolute ct-curve left top-0 h-100 z--1 d-none d-xxl-block"
        />
        <img
          src="/digital-agency/cta-curve-right.png"
          alt="curve shape"
          className="position-absolute ct-curve right top-0 h-100 z--1 d-none d-xxl-block"
        />
        <img
          src="/digital-agency/cta-line.png"
          alt="cta line"
          className="position-absolute start-50 bottom-0 translate-middle-x z--1 d-none d-md-block"
        />
        <span className="dg-circle-style-1 position-absolute z--1 dg-circle rounded-circle start-50"></span>
        <div className="container">
          <div className="row g-4 justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="dg-cta-content">
                <span className="text-dg-primary fw-bold">WHAT WE DO</span>
                <h2 className="mt-2 mb-3 heading-dg-color clr-text">
                  Rethink just how safe renting can be with Quiety
                </h2>
                <p className="mb-40 heading-dg-color">
                  Available in Portugal, Spain, Italy, U.K. and France.
                </p>
                <div className="dg-cta-btns d-flex align-items-center flex-wrap">
                  <Link
                    href="/contact-us"
                    className="btn dg-primary-btn rounded-pill"
                  >
                    Get in touch
                  </Link>
                  <Link
                    href="/service-single"
                    className="btn dg-outline-btn rounded-pill"
                  >
                    Browse all Service
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="dg-cta-imgs d-flex mt-5 mt-lg-0">
                <div className="thumb">
                  <img
                    src="/digital-agency/bulp.jpg"
                    alt="not found"
                    className="img-fluid rounded-4"
                  />
                </div>
                <div className="thumb mt-4">
                  <img
                    src="/digital-agency/art.jpg"
                    alt="not found"
                    className="img-fluid rounded-4"
                  />
                </div>
                <div className="thumb align-self-end">
                  <img
                    src="/digital-agency/art-2.jpg"
                    alt="not found"
                    className="img-fluid rounded-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyCta;
