import Link from "next/link";

const DigitalAgencyAbout = () => {
  return (
    <>
      <section className="dg-about-section pt-120 bg-white position-relative z-1">
        <img
          src="/digital-agency/ab-shadow-shape.png"
          alt="shadows"
          className="position-absolute end-0 top-0 z--1"
        />
        <div className="container">
          <div className="row g-4 justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="dg-about-left pe-4">
                <img
                  src="/digital-agency/ab-1.jpg"
                  alt="About"
                  className="rounded-4 img-fluid"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="dg-about-right ps-lg-4">
                <span className="fw-bold text-dg-primary">ABOUT COMPANY</span>
                <h2 className="mt-2 mb-4 heading-dg-color">
                  Technology is best when
                  <br /> people together
                </h2>
                <p className="mb-5 text-dg-color">
                  Distinctively initiate viral ideas for goal-oriented
                  partnerships. Appropriately network cross-media opportunities
                  with cross-platform total linkage. Uniquely create turnkey
                  value rather than revolutionary applications. Dynamically
                  architect.
                </p>
                <Link
                  href="/services"
                  className="btn dg-outline-btn rounded-pill"
                >
                  Browse all Service
                </Link>
                <div className="dg-about-bottom position-relative mt-70">
                  <img
                    src="/digital-agency/ab-shape-box.jpg"
                    alt="not found"
                    className="rounded-3 shape-box"
                  />
                  <img
                    src="/digital-agency/ab-2.jpg"
                    alt="not found"
                    className="rounded-4 img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/digital-agency/doted-line-left.png"
          alt="doted line"
          className="position-absolute start-0 bottom-0 z--1"
        />
        <img
          src="/digital-agency/doted-line-right.png"
          alt="doted line"
          className="position-absolute end-0 bottom-0 z--1"
        />
        <span className="dg-circle-1 dg-circle-style-1 position-absolute z--1 rounded-circle"></span>
        <span className="dg-circle-2 dg-circle-style-1 position-absolute z--1 rounded-circle"></span>
        <span className="dg-circle-3 dg-circle-style-2 position-absolute z--1 rounded-circle"></span>
        <span className="dg-circle-4 dg-circle-style-2 position-absolute z--1 rounded-circle"></span>
      </section>
    </>
  );
};

export default DigitalAgencyAbout;
