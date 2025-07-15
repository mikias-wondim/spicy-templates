import Link from "next/link";

const RiskManagmentCta = () => {
  return (
    <>
      <div className="rm-cta-area risk-bg-color-two ptb-80 position-relative z-1">
        <div className="container">
          <div className="position-relative">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-7">
                <div className="text-center">
                  <img
                    src="/risk_managment/cta.png"
                    alt=""
                    className="risk-cta-img position-absolute z--1"
                  />
                  <h6 className="risk-sub-text fs-16 ff-risk-pri fw-700 mb-20">
                    Explore How Can I Help You
                  </h6>
                  <h2 className="risk-title text-white fs-42 ff-risk-pri flh-56 fw-800">
                    Discover the Value of Risk Intelligence.
                  </h2>
                  <Link
                    href="/risk-managment"
                    className="btn risk-btn-bg risk-btn-hover clr-white ff-risk-pri fs-14 fw-600 mt-20"
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RiskManagmentCta;
