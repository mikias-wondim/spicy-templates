import Link from "next/link";

const CreativeAgencyTwoInfocard = () => {
  return (
    <>
      <div className="ca-two-info-card-area pb-60 position-relative z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7">
              <h6 className="ca-two-subtitle ca-two-body-clr-two d-flex align-items-center">
                <span className="bg-black"></span>Why Choose Us
              </h6>
              <h2 className="ca-two-title ca-two-body-clr-two fs-36 fw-500 flh-48 pr-20 mt-60">
                We empower ambitious brands to gain a competitive edge by
                enabling creative innovation
              </h2>
            </div>
            <div className="col-xl-5">
              <div className="text-end ca-two-year">
                <h1 className="clr-text fw-500 fs-72 mb-0">Since 2010</h1>
              </div>
            </div>
          </div>
          <div className="ca-two-info-cards mt-30">
            <div className="row">
              <div className="col-xl-4 col-lg-6">
                <div className="ca-two-info-card ca-two-border ca-two-border-color rounded-16 padding-6 pt-40 ca-two-hover-bg ca-two-border-hover mt-20">
                  <div className="d-flex align-items-center gap-8">
                    <img
                      src="/creative-agency-2/info_icon.svg"
                      alt=""
                      className="ca-two-info-icon"
                    />
                    <div className="ca-two-card-content">
                      <h5 className="ca-two-body-clr-two fs-20 mb-20">
                        Creative Design
                      </h5>
                      <p className="ca-two-body-clr flh-24 fch-55 mb-0">
                        Creative design is the art of turning imagination into
                        reality.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <Link
                      href="/creative-agency-two"
                      className="ca-two-arrow-btn ca-two-bg d-inline-flex align-items-center justify-content-center"
                    >
                      <span className="clr-text fs-12">
                        <i className="fas fa-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="ca-two-info-card ca-two-border ca-two-border-color rounded-16 padding-6 pt-40 ca-two-hover-bg ca-two-border-hover mt-20">
                  <div className="d-flex align-items-center gap-8">
                    <img
                      src="/creative-agency-2/info_icon_2.svg"
                      alt=""
                      className="ca-two-info-icon"
                    />
                    <div className="ca-two-card-content">
                      <h5 className="ca-two-body-clr-two fs-20 mb-20">
                        Development
                      </h5>
                      <p className="ca-two-body-clr flh-24 fch-55 mb-0">
                        Creative design is the art of turning imagination into
                        reality.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <Link
                      href="/creative-agency-two"
                      className="ca-two-arrow-btn ca-two-bg d-inline-flex align-items-center justify-content-center"
                    >
                      <span className="clr-text fs-12">
                        <i className="fas fa-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="ca-two-info-card ca-two-border ca-two-border-color rounded-16 padding-6 pt-40 ca-two-hover-bg ca-two-border-hover mt-20">
                  <div className="d-flex align-items-center gap-8">
                    <img
                      src="/creative-agency-2/info_icon_3.svg"
                      alt=""
                      className="ca-two-info-icon"
                    />
                    <div className="ca-two-card-content">
                      <h5 className="ca-two-body-clr-two fs-20 mb-20">
                        Digital Marketing
                      </h5>
                      <p className="ca-two-body-clr flh-24 fch-55 mb-0">
                        Creative design is the art of turning imagination into
                        reality.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <Link
                      href="/creative-agency-two"
                      className="ca-two-arrow-btn ca-two-bg d-inline-flex align-items-center justify-content-center"
                    >
                      <span className="clr-text fs-12">
                        <i className="fas fa-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeAgencyTwoInfocard;
