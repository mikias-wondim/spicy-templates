const AiImageGenerationInfocard = () => {
  return (
    <>
      <div className="aiart-info-card-area ptb-120 position-relative z-1 overflow-hidden">
        <div className="container">
          <div className="position-relative z-1">
            <img
              src="/aiart_home/shape/info-1.png"
              alt=""
              className="shape-1 z--1 position-absolute"
            />
            <img
              src="/aiart_home/shape/info-2.png"
              alt=""
              className="shape-2 z--1 position-absolute"
            />
            <img
              src="/aiart_home/shape/info-3.png"
              alt=""
              className="shape-3 z--1 position-absolute"
            />
            <div className="row">
              <div className="col-lg-8">
                <h6 className="aiart-sub-title text-primary fs-18 fw-600 d-flex align-items-center gap-3 mb-20">
                  <span>
                    <svg
                      width="23"
                      height="24"
                      viewBox="0 0 23 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 20.75L21 1.75"
                        stroke="#175cff"
                        strokeWidth="3"
                      />
                      <path
                        d="M11 22.25L21 12.25"
                        stroke="#175cff"
                        strokeWidth="3"
                      />
                    </svg>
                  </span>
                  What We Do
                </h6>
                <h4 className="text-black fs-28 fw-800 ff-risk-pri mb-30">
                  Trustpilot rates our{" "}
                  <span className="aiart-gd-text">
                    AI Video Generator an impressive 4.2
                  </span>
                  globally. Join our satisfied customers & unleash the potential
                  of easy video creation.
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="aiart-info-card-item bg-white p-4 pt-40 risk-shadow rounded-3 mt-20">
                  <img src="/aiart_home/info-1.png" alt="" />
                  <h5 className="text-black fs-24 fw-800 ff-risk-pri mb-20">
                    For Designer
                  </h5>
                  <p>
                    Trustpilot rates our AI Video Generator an impressive 4.2
                    globally. Join our satisfied customers & unleash the
                    potential of easy video creation.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="aiart-info-card-item bg-white p-4 pt-40 risk-shadow rounded-3 mt-20">
                  <img src="/aiart_home/info-2.png" alt="" />
                  <h5 className="text-black fs-24 fw-800 ff-risk-pri mb-20">
                    For Developer
                  </h5>
                  <p>
                    Trustpilot rates our AI Video Generator an impressive 4.2
                    globally. Join our satisfied customers & unleash the
                    potential of easy video creation.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="aiart-info-card-item bg-white p-4 pt-40 risk-shadow rounded-3 mt-20">
                  <img src="/aiart_home/info-3.png" alt="" />
                  <h5 className="text-black fs-24 fw-800 ff-risk-pri mb-20">
                    For Marketer
                  </h5>
                  <p>
                    Trustpilot rates our AI Video Generator an impressive 4.2
                    globally. Join our satisfied customers & unleash the
                    potential of easy video creation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiImageGenerationInfocard;
