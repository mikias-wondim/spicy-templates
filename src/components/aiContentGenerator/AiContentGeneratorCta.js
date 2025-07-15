import Link from "next/link";

const AiContentGeneratorCta = () => {
  return (
    <>
      <div className="ail-cta-area">
        <div className="container">
          <div className="ail-cta-wrapper p-5 rounded-16 position-relative z-1">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2 className="ail-title text-black fs-48 fw-600">
                  A Better way to work today,{" "}
                  <span className="ail-highlighted-text">Together!</span>
                </h2>
                <Link
                  href="/ai-content-generator"
                  className="btn ail-gd-bg dark-bg-hover rounded-5 text-white fs-16 border-0 mt-20"
                >
                  Get Started Now
                </Link>
              </div>
              <div className="col-lg-6">
                <img
                  src="/ail_home/cta.png"
                  alt=""
                  className="w-100 img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiContentGeneratorCta;
