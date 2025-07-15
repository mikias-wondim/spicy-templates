const SoftwareCompanyCta = () => {
  return (
    <>
      <section className="sc-cta-section position-relative z-1 overflow-hidden bg-white border-line-bg">
        <div className="container">
          <div className="sc-cta-box position-relative z-1 rounded-4 overflow-hidden">
            <img
              src="/software-company/cta-curve.png"
              alt="not found"
              className="position-absolute start-0 top-0 z--1"
            />
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-7 col-lg-6">
                <div className="sc-cta-content">
                  <h3 className="mb-40 text-white">
                    Assemble your own nerd? More
                    <br className="d-none d-xl-block" /> than 400 businesses
                    came before you.
                  </h3>
                  <a href="contact-us.html" className="btn btn-primary">
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="sc-cta-right position-relative z-1 mt-100 mt-lg-0">
                  <img
                    src="/software-company/cta-man.png"
                    alt="not found"
                    className="img-fluid"
                  />
                  <img
                    src="/software-company/cta-shape.png"
                    alt="cta shape"
                    className="position-absolute cta-shape z--1 img-fluid"
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

export default SoftwareCompanyCta;
