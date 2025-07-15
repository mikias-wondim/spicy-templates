import Link from "next/link";

const CreativeAgencyTwoPortfolio = () => {
  return (
    <>
      <div className="ca-two-portfolio-area ptb-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src="/creative-agency-2/portfolion.png"
                alt=""
                className="ca-two-pf-img img-fluid"
              />
            </div>
            <div className="col-lg-6">
              <div className="pl-40">
                <h6 className="ca-two-subtitle ca-two-body-clr-two d-flex align-items-center">
                  <span className="bg-black"></span>Portfolio Works
                </h6>
                <h2 className="ca-two-title ca-two-body-clr-two fs-36 fw-500 flh-48 pr-20 mt-20">
                  Want to know more about our way of working?
                </h2>
                <p className="ca-two-body-clr flh-24 fch-55 mb-0">
                  Our web development expertise goes beyond coding; it's about
                  building digital experiences that captivate
                </p>
                <div className="ca-two-btn-area d-flex align-items-center gap-10  mt-50">
                  <Link
                    href="/creative-agency-two"
                    className="btn dg-outline-btn ca-two-body-clr ca-two-bg-hover-two"
                  >
                    Get in Touch
                  </Link>
                  <Link
                    href="/creative-agency-two"
                    className="ca-two-call-btn ca-two-body-clr-two d-flex align-items-center gap-5"
                  >
                    <div className="call-btn bg-white d-flex align-items-center justify-content-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.6125 3.65994C9.29514 3.60131 9.00367 3.80384 8.94325 4.11363C8.88284 4.42342 9.086 4.72588 9.39473 4.7865C10.3242 4.96771 11.042 5.68722 11.2239 6.61991C11.2757 6.88839 11.512 7.08426 11.7842 7.08426C11.8207 7.08426 11.8573 7.08093 11.8944 7.07426C12.2032 7.01231 12.4063 6.71051 12.3459 6.40006C12.0744 5.00702 11.0021 3.93109 9.6125 3.65994Z"
                          fill="#141414"
                        />
                        <path
                          d="M9.57122 1.3386C9.4225 1.31728 9.27311 1.36125 9.15427 1.45585C9.0321 1.55179 8.95575 1.69036 8.93915 1.84558C8.90396 2.15937 9.13037 2.44317 9.44374 2.47848C11.6048 2.71965 13.2846 4.40316 13.5276 6.57101C13.5601 6.86147 13.8038 7.08066 14.0946 7.08066C14.1165 7.08066 14.1378 7.07932 14.1597 7.07666C14.3117 7.06 14.4472 6.98472 14.5428 6.8648C14.6377 6.74489 14.6809 6.59566 14.6636 6.44309C14.3608 3.73828 12.2675 1.63906 9.57122 1.3386Z"
                          fill="#141414"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.35466 8.64826C10.014 11.3069 10.6173 8.23115 12.3106 9.92321C13.943 11.5552 14.8812 11.8821 12.813 13.9498C12.5539 14.158 10.9079 16.6628 5.12323 10.8798C-0.662156 5.096 1.84122 3.4483 2.04948 3.1893C4.12274 1.1159 4.44407 2.05959 6.07649 3.69155C7.76974 5.38433 4.69527 5.98961 7.35466 8.64826Z"
                          fill="#141414"
                        />
                      </svg>
                    </div>
                    <h6 className="fw-500 fs-20">120 5478 6980</h6>
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

export default CreativeAgencyTwoPortfolio;
