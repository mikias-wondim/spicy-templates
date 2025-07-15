import Link from "next/link";

const AiImageGenerationCta = () => {
  return (
    <>
      <div className="aiart-cta-area pb-120">
        <div className="container">
          <div className="aiart-cta-wrapper risk-bg-color-two ptb-80 rounded-3 position-relative z-1">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-10">
                <div className="text-center">
                  <h6 className="aiart-sub-title aiart-clr fs-18 fw-600 d-inline-flex align-items-center gap-3 mb-20">
                    <span>
                      <svg
                        width="22"
                        height="24"
                        viewBox="0 0 22 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.5 20.75L20.5 1.75"
                          stroke="#ED6D4B"
                          strokeWidth="3"
                        />
                        <path
                          d="M10.5 22.25L20.5 12.25"
                          stroke="#ED6D4B"
                          strokeWidth="3"
                        />
                      </svg>
                    </span>
                    Frequently asked Question
                  </h6>
                  <h2 className="aiart-title text-white fs-48 ff-risk-pri mb-30">
                    Eager to craft{" "}
                    <span className="aiart-gd-text">breathtaking </span>Visuals
                    using AI?
                  </h2>
                  <Link
                    href="/"
                    className="btn aiart-btn-gd text-white rounded-3 border-0"
                  >
                    Get Stated Now
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

export default AiImageGenerationCta;
