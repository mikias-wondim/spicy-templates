import Link from "next/link";

const RiskManagmentCard = () => {
  return (
    <>
      <div className="rm-info-card-area ptb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="text-center">
                <h6 className="risk-sub-text fs-16 ff-risk-pri fw-700 mb-20">
                  Explore How Can I Help You
                </h6>
                <h2 className="risk-title risk-color fs-42 ff-risk-pri flh-56 fw-800 mb-30">
                  ERM Solutions to{" "}
                  <span className="risk-gd-text">Bridge Your</span>
                  <span className="risk-highlight-color">Risk </span>Journey
                  Across
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-md-6">
              <div className="risk-info-card ca-two-border ca-two-border-color rounded-8 risk-border-hover padding-6 pt-40 mt-20">
                <img src="/risk_managment/info_card.svg" alt="" />
                <h5 className="risk-color fs-20 ff-risk-pri fw-800 flh-26 mt-30">
                  Enterprise <br />
                  <span className="risk-bg-color"></span>Management
                </h5>
                <p className="risk-color-two ff-dmsans fs-16 flh-24 mb-30 mt-20">
                  There are many variations of passages of available but the
                  alteration by injected.
                </p>
                <Link
                  href="/risk-managment"
                  className="risk-color-two fs-16 ff-risk-pri fw-700"
                >
                  Explore More
                </Link>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6">
              <div className="risk-info-card ca-two-border ca-two-border-color rounded-8 risk-border-hover padding-6 pt-40 mt-20">
                <img src="/risk_managment/info_card_2.svg" alt="" />
                <h5 className="risk-color fs-20 ff-risk-pri fw-800 flh-26 mt-30">
                  Third Party <br />
                  <span className="risk-bg-color"></span>Risk
                </h5>
                <p className="risk-color-two ff-dmsans fs-16 flh-24 mb-30 mt-20">
                  There are many variations of passages of available but the
                  alteration by injected.
                </p>
                <Link
                  href="/risk-managment"
                  className="risk-color-two fs-16 ff-risk-pri fw-700"
                >
                  Explore More
                </Link>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6">
              <div className="risk-info-card ca-two-border ca-two-border-color rounded-8 risk-border-hover padding-6 pt-40 mt-20">
                <img src="/risk_managment/info_card_3.svg" alt="" />
                <h5 className="risk-color fs-20 ff-risk-pri fw-800 flh-26 mt-30">
                  Financial
                  <br />
                  <span className="risk-bg-color"></span>Controls
                </h5>
                <p className="risk-color-two ff-dmsans fs-16 flh-24 mb-30 mt-20">
                  There are many variations of passages of available but the
                  alteration by injected.
                </p>
                <Link
                  href="/risk-managment"
                  className="risk-color-two fs-16 ff-risk-pri fw-700"
                >
                  Explore More
                </Link>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6">
              <div className="risk-info-card ca-two-border ca-two-border-color rounded-8 risk-border-hover padding-6 pt-40 mt-20">
                <img src="/risk_managment/info_card_4.svg" alt="" />
                <h5 className="risk-color fs-20 ff-risk-pri fw-800 flh-26 mt-30">
                  Compliance
                  <br />
                  <span className="risk-bg-color"></span>Management
                </h5>
                <p className="risk-color-two ff-dmsans fs-16 flh-24 mb-30 mt-20">
                  There are many variations of passages of available but the
                  alteration by injected.
                </p>
                <Link
                  href="/risk-managment"
                  className="risk-color-two fs-16 ff-risk-pri fw-700"
                >
                  Explore More
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-40">
            <p className="risk-color fs-16 ff-risk-pri fw-700 flh-24 mb-0">
              We Are Available For New Custom Prject.{" "}
              <span className="risk-gd-text fw-800">Let’s Connect Now</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RiskManagmentCard;
