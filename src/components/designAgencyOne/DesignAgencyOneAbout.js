import Link from "next/link";

const DesignAgencyOneAbout = () => {
  return (
    <>
      <section className="dg-about-section-2 padding-top-large bg-design-agency-about position-relative z-1">
        <div className="container">
          <div className="row g-4 justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="dg-about-left pe-4">
                <img
                  src="/digital-agency/ab-1.jpg"
                  alt=""
                  className="rounded-4 img-fluid"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="dg-about-right ps-lg-4">
                <span className="fw-bold text-dg-primary">ABOUT COMPANY</span>
                <h2 className="mt-2 mb-4 clr-text heading-dg-color">
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
      </section>
    </>
  );
};

export default DesignAgencyOneAbout;
