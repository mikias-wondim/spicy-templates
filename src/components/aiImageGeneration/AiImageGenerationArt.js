const AiImageGenerationArt = () => {
  return (
    <>
      <div className="aiart-wbart-area bg-white ptb-120 position-relative z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="text-center">
                <h6 className="aiart-sub-title text-primary fs-18 fw-600 d-inline-flex align-items-center gap-3 mb-20">
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
                  How it works
                </h6>
                <h2 className="aiart-title text-black fs-48 ff-risk-pri mb-40">
                  <span className="aiart-gd-text">Understanding</span> the
                  Functioning of Writebot Art
                </h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="aiart-art-item bg-white aiart-shadow p-4 d-inline-flex align-items-center flex-wrap gap-3 rounded-3 mb-20">
                <div className="aiart-counter text-black fs-36 fw-800 ff-risk-pri d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle">
                  01
                </div>
                <div className="aiart-counter-content">
                  <h5 className="text-black fs-20 ff-risk-pri fw-700">
                    Write a Prompt 📝
                  </h5>
                  <p className="fs-14 mb-0">
                    Trustpilot rates our AI Video Generator an impressive <br />{" "}
                    4.2 globally. Join our satisfied customers & unleash <br />{" "}
                    the potential of easy video creation.
                  </p>
                </div>
              </div>
              <div className="aiart-art-item bg-white aiart-shadow p-4 d-inline-flex align-items-center flex-wrap gap-3 rounded-3 mb-20">
                <div className="aiart-counter text-black fs-36 fw-800 ff-risk-pri d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle">
                  02
                </div>
                <div className="aiart-counter-content">
                  <h5 className="text-black fs-20 ff-risk-pri fw-700">
                    Select Styles 🎨
                  </h5>
                  <p className="fs-14 mb-0">
                    Trustpilot rates our AI Video Generator an impressive <br />{" "}
                    4.2 globally. Join our satisfied customers & unleash <br />{" "}
                    the potential of easy video creation.
                  </p>
                </div>
              </div>
              <div className="aiart-art-item bg-white aiart-shadow p-4 d-inline-flex align-items-center flex-wrap gap-3 rounded-3 mb-20">
                <div className="aiart-counter text-black fs-36 fw-800 ff-risk-pri d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle">
                  03
                </div>
                <div className="aiart-counter-content">
                  <h5 className="text-black fs-20 ff-risk-pri fw-700">
                    Generate Art 🪄
                  </h5>
                  <p className="fs-14 mb-0">
                    Trustpilot rates our AI Video Generator an impressive <br />{" "}
                    4.2 globally. Join our satisfied customers & unleash <br />{" "}
                    the potential of easy video creation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <img
                src="/aiart_home/art.png"
                alt=""
                className="aiart-art-img img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiImageGenerationArt;
