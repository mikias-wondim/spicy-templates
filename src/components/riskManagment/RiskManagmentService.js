import Link from "next/link";

const RiskManagmentService = () => {
  return (
    <>
      <div className="rm-service-area risk-bg-color-two pt-120 position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="position-relative">
                <img
                  src="/risk_managment/service.png"
                  alt=""
                  className="rm-service-img img-fluid"
                />
                <img
                  src="/risk_managment/shape/service.png"
                  alt=""
                  className="s-one position-absolute"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pr-40">
                <h6 className="risk-sub-text fs-16 ff-risk-pri fw-700 mb-20">
                  Explore How Can I Help You
                </h6>
                <h2 className="risk-title text-white fs-42 ff-risk-pri flh-56 fw-800 mb-20 pr-15">
                  Simplify Compliance & Manage
                  <span className="risk-gd-text">Risk with Quiety</span> One GRC
                  Software
                </h2>
                <p className="text-white ff-dmsans fs-16 flh-28 mb-0 mt-20">
                  All-in-one Governance, Risk, and Compliance (GRC) software.
                  Our comprehensive solution empowers your organization to
                  efficiently Navigate the complex landscape.
                </p>
                <ul className="risk-service-list list-unstyled mb-0 mt-40">
                  <li className="d-flex align-items-center flex-wrap gap-3 text-white fs-16 fw-700 ff-dmsans flh-28 mb-20">
                    <div className="risk-service-count d-flex align-items-center justify-content-center fs-12 rounded-circle">
                      1
                    </div>
                    Stay Compliant with Global Regulations
                  </li>
                  <li className="d-flex align-items-center flex-wrap gap-3 text-white fs-16 fw-700 ff-dmsans flh-28 mb-20">
                    <div className="risk-service-count d-flex align-items-center justify-content-center fs-12 rounded-circle">
                      2
                    </div>
                    Oversee of all your GRC initiatives
                  </li>
                  <li className="d-flex align-items-center flex-wrap gap-3 text-white fs-16 fw-700 ff-dmsans flh-28 mb-20">
                    <div className="risk-service-count d-flex align-items-center justify-content-center fs-12 rounded-circle">
                      3
                    </div>
                    Oversee of all your GRC initiatives
                  </li>
                </ul>
                <Link
                  href="/risk-managment"
                  className="btn risk-btn-bg risk-btn-hover clr-white ff-risk-pri fs-14 fw-600 mt-30"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
          <div className="risk-gd-border-line mt-60"></div>
        </div>
        <img
          src="/risk_managment/shape/service_2.png"
          alt=""
          className="s-two position-absolute"
        />
        <img
          src="/risk_managment/shape/service_3.png"
          alt=""
          className="s-three position-absolute"
        />
      </div>
    </>
  );
};

export default RiskManagmentService;
