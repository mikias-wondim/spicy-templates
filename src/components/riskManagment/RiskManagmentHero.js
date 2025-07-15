const RiskManagmentHero = () => {
  return (
    <>
      <div className="rm-hero pt-120 pb-120 position-relative overflow-hidden">
        <div className="container">
          <div className="position-relative">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-6">
                <h1 className="rm-hero-title text-white fs-72 fw-800 ff-risk-pri mb-20">
                  {" "}
                  Streamlined Risk{" "}
                  <span className="risk-gd-text">Management</span> <br />
                  <span className="text-ind">-Software</span>{" "}
                  <span>
                    <img src="/risk_managment/font.png" alt="" />
                  </span>
                </h1>
                <p className="text-white fs-20 ff-dmsans fw-500 flh-28">
                  There are many variations of passages of Loren epsom available
                  but the majority have suffered alteration by injected.
                </p>
                <a
                  href=""
                  className="btn risk-btn-bg risk-btn-hover clr-white ff-risk-pri fs-14 fw-600 mt-30"
                >
                  Start Free Trial
                </a>
                <div className="risk-customer-area mt-60">
                  <p className="text-white ff-risk-pri fw-600">
                    See how over 7,700 customers{" "}
                    <span className="risk-highlight-color fw-800">
                      Help the world work
                    </span>
                  </p>
                  <div className="risk-customer-logo-wrapper d-flex align-items-center gap-10 flex-wrap">
                    <img
                      className="risk-customer-logo"
                      src="/risk_managment/customer.png"
                      alt=""
                    />
                    <img
                      className="risk-customer-logo"
                      src="/risk_managment/customer_2.png"
                      alt=""
                    />
                    <img
                      className="risk-customer-logo"
                      src="/risk_managment/customer_3.png"
                      alt=""
                    />
                    <img
                      className="risk-customer-logo"
                      src="/risk_managment/customer_4.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-8">
                <div className="position-relative">
                  <img
                    src="/risk_managment/hero.png"
                    alt=""
                    className="risk-hero-img img-fluid"
                  />
                  <a
                    href=""
                    className="risk-click-btn risk-gd-bg rounded-circle d-flex align-items-center justify-content-center position-absolute"
                  >
                    <svg
                      width="25"
                      height="32"
                      viewBox="0 0 25 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.39397 1.4711C1.39397 1.4711 11.7558 16.9705 21.1011 30.9492M21.1011 30.9492C14.3501 20.851 23.4213 12.0896 23.4213 12.0896M21.1011 30.9492C14.3501 20.851 2.78667 25.8846 2.78667 25.8846"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </a>
                  <div className="risk-social d-flex align-items-center flex-column gap-20">
                    <a
                      className="d-flex align-items-center gap-1 ff-risk-pri fs-14 fw-700"
                      href=""
                    >
                      <span>
                        <i className="fa-brands fa-facebook-f"></i>
                      </span>
                      Facebook
                    </a>
                    <a
                      className="d-flex align-items-center gap-1 ff-risk-pri fs-14 fw-700"
                      href=""
                    >
                      <span>
                        <i className="fa-brands fa-linkedin"></i>
                      </span>
                      LinkedIn
                    </a>
                    <a
                      className="d-flex align-items-center gap-1 ff-risk-pri fs-14 fw-700"
                      href=""
                    >
                      <span>
                        <i className="fa-brands fa-instagram"></i>
                      </span>
                      Instagram
                    </a>
                    <a
                      className="d-flex align-items-center gap-1 ff-risk-pri fs-14 fw-700"
                      href=""
                    >
                      <span>
                        <i className="fa-brands fa-twitter"></i>
                      </span>
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/risk_managment/shape/hero.png"
              alt=""
              className="hero-shape position-absolute"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RiskManagmentHero;
