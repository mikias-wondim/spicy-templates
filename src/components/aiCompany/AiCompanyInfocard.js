import Link from "next/link";

const AiCompanyInfocard = () => {
  return (
    <>
      <div className="aih-info-card-area ah-bg ptb-120 overflow-hidden">
        <div className="container">
          <div className="row align-items-center g-xxl-0">
            <div className="col-xxl-6 col-xl-5 col-lg-9">
              <div className="position-relative">
                <img
                  src="/ai_home/info_card.png"
                  alt=""
                  className="aih-info-card-img img-fluid"
                />
                <img
                  src="/ai_home/info_card_2.png"
                  alt=""
                  className="aih-info-card-img s-one position-absolute"
                />
                <img
                  src="/ai_home/info_card_3.png"
                  alt=""
                  className="aih-info-card-img s-two position-absolute"
                />
                <img
                  src="/ai_home/info_card_4.png"
                  alt=""
                  className="aih-info-card-img s-three position-absolute"
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-7">
              <h2 className="aih-title aih-color-two fs-48 fw-600 mb-20">
                One app with <br />
                thousands of <span className="aih-color">Benefits</span>
              </h2>
              <p className="aih-color-three mb-20">
                Globally expedite sticky platforms whereas end-to-end vortals.
                Energistically synergize emerging . Monotonectally incubate
                bleeding-edge e-business
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <div className="aih-info-card-item bgc-white aih-shadow-hover p-4 ptb-30 rounded-10 mt-20">
                    <img src="/ai_home/info_icon.svg" alt="" />
                    <h5 className="aih-color-two fs-24 fw-600 mt-30 mb-20">
                      Easy Interface Design
                    </h5>
                    <p className="ca-two-body-clr pb-20">
                      Globally expedite stick Energisticall synergize emerging
                      generation go incubate bleeding-edge.
                    </p>
                    <Link
                      href="/ai-company"
                      className="d-inline-flex align-items-center gap-2 aih-color-two fs-16 fw-600"
                    >
                      <svg
                        width="32"
                        height="22"
                        viewBox="0 0 32 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="11"
                          cy="11"
                          r="10"
                          stroke="#141414"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M25.1667 4.75L31 11M31 11L25.1667 17.25M31 11H10.375"
                          stroke="#141414"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>Explore More</span>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="aih-info-card-item bgc-white aih-shadow-hover p-4 ptb-30 rounded-10 mt-20">
                    <img src="/ai_home/info_icon_2.svg" alt="" />
                    <h5 className="aih-color-two fs-24 fw-600 mt-30 mb-20">
                      Easy Sign Up
                    </h5>
                    <p className="ca-two-body-clr pb-20">
                      Globally expedite stick Energisticall synergize emerging
                      generation go incubate bleeding-edge.
                    </p>
                    <Link
                      href="/ai-company"
                      className="d-inline-flex align-items-center gap-2 aih-color-two fs-16 fw-600"
                    >
                      <svg
                        width="32"
                        height="22"
                        viewBox="0 0 32 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="11"
                          cy="11"
                          r="10"
                          stroke="#141414"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M25.1667 4.75L31 11M31 11L25.1667 17.25M31 11H10.375"
                          stroke="#141414"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>Explore More</span>
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

export default AiCompanyInfocard;
