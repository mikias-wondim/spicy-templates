import Link from "next/link";
import React from "react";

const AiCompanyComminute = () => {
  return (
    <div className="aih-cummiunte-area ah-bg pt-60 pb-120">
      <div className="container">
        <div className="row align-items-end justify-content-center">
          <div className="col-xxl-3 col-lg-4">
            <h2 className="aih-title aih-color-two fs-48 fw-600 mb-40">
              Join Our Comminute
            </h2>
            <Link
              href="/ai-company"
              className="btn aih-btn aih-bg-color aih-color-two ff-poppins fs-20 fw-600 d-inline-flex align-items-center gap-2"
            >
              <span>Join comminute</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.25 10C1.25 14.8325 5.16751 18.75 10 18.75C14.8325 18.75 18.75 14.8325 18.75 10C18.75 5.16751 14.8325 1.25 10 1.25C5.16751 1.25 1.25 5.16751 1.25 10ZM20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM5.625 9.375C5.27982 9.375 5 9.65482 5 10C5 10.3452 5.27982 10.625 5.625 10.625H12.8661L10.1831 13.3081C9.93898 13.5521 9.93898 13.9479 10.1831 14.1919C10.4271 14.436 10.8229 14.436 11.0669 14.1919L14.8169 10.4419C15.061 10.1979 15.061 9.80213 14.8169 9.55806L11.0669 5.80806C10.8229 5.56398 10.4271 5.56398 10.1831 5.80806C9.93898 6.05214 9.93898 6.44787 10.1831 6.69194L12.8661 9.375H5.625Z"
                  fill="#141414"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="col-xxl-4 col-xl-5 col-lg-6">
            <div className="position-relative pl-40 pr-15 aih-border-style-two">
              <p className="aih-color-five fs-16 flh-24">
                Dramatically streamline long-term high-impact manufactured
                products for emerging "outside the box" thinking.{" "}
                <span className="aih-color ff-poppins">Synergistically</span>{" "}
                pursue real-time bandwidth through pandemic.
              </p>
              <div className="d-flex align-items-center gap-3 mt-30">
                <img src="/ai_home/comminute_icon.png" alt="Comminute Icon" />
                <h6 className="aih-color-two fs-20 fw-600 flh-28">
                  1000+ worldwide trust clients
                </h6>
              </div>
              <img
                src="/ai_home/aih-star.png"
                alt="Star Icon"
                className="aih-star-icon rotate-ani position-absolute"
              />
            </div>
          </div>
          <div className="col-xxl-5">
            <img
              src="/ai_home/comminute.png"
              alt="Comminute"
              className="aih-comminute-img img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiCompanyComminute;
