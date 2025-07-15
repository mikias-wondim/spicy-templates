import Link from "next/link";

const AiImageGenerationHero = () => {
  return (
    <>
      <div className="aiart-hreo-area bgc-white pt-200 pb-60 position-relative z-1 overflow-hidden">
        <img
          src="/aiart_home/shape/hero-1.png"
          alt=""
          className="shape-1 z--1 position-absolute"
        />
        <img
          src="/aiart_home/shape/hero-2.png"
          alt=""
          className="shape-2 z--1 position-absolute"
        />
        <img
          src="/aiart_home/shape/hero-3.png"
          alt=""
          className="shape-3 z--1 position-absolute"
        />
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-xxl-8 col-xl-10">
                <h1 className="text-black fs-142 ff-risk-pri">
                  Unleash <br />
                  <span className="bg-white pr-40 pb-20 rounded-3">
                    Art Image
                  </span>{" "}
                  <br />
                  <span className="title-img">
                    <img src="/aiart_home/title.png" alt="" />
                  </span>
                  <span className="bgc-white fs-130 pr-40 pb-20 rounded-3">
                    <span className="aiart-outline-text">Generator</span>
                  </span>
                </h1>
                <div className="row">
                  <div className="col-lg-8">
                    <p className="text-black fw-700 ff-risk-pri mt-20 mb-30">
                      Your One-Stop Solution for Content{" "}
                      <span className="aiart-gd-text">
                        Creation, Audio Generation,
                      </span>{" "}
                      Image Crafting, & AI Chatbot Development alteration rando
                      missed.
                    </p>
                    <ul className="aiart-hero-list d-flex align-items-center flex-wrap gap-4 list-unstyled">
                      <li>
                        <Link
                          href="/ai-image-generation"
                          className="ca-two-body-clr fs-14 ff-risk-pri p-2 pl-20 pr-20 border rounded-5"
                        >
                          Creative
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/ai-image-generation"
                          className="ca-two-body-clr fs-14 ff-risk-pri p-2 pl-20 pr-20 border rounded-5"
                        >
                          Moody Lighting
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/ai-image-generation"
                          className="ca-two-body-clr fs-14 ff-risk-pri p-2 pl-20 pr-20 border rounded-5"
                        >
                          3d Modeling
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/ai-image-generation"
                          className="ca-two-body-clr fs-14 ff-risk-pri p-2 pl-20 pr-20 border rounded-5"
                        >
                          Color Grading
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/ai-image-generation"
                          className="ca-two-body-clr fs-14 ff-risk-pri p-2 pl-20 pr-20 border rounded-5"
                        >
                          Back light
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/ai-image-generation"
                          className="ca-two-body-clr fs-14 ff-risk-pri p-2 pl-20 pr-20 border rounded-5"
                        >
                          Depth of Filed
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/ai-image-generation"
                          className="ca-two-body-clr fs-14 ff-risk-pri p-2 pl-20 pr-20 border rounded-5"
                        >
                          Business
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-8">
                <div className="aiart-hero-right">
                  <img
                    src="/aiart_home/hero.png"
                    alt=""
                    className="aiart-hero-img position-absolute img-fluid z--1"
                  />
                  <Link
                    href="/ai-image-generation"
                    className="aiart-un-btn aiart-gd-bg text-white fw-700 rounded-circle d-flex align-items-center justify-content-center flex-column gap-0 position-absolute"
                  >
                    <span className="d-flex align-items-center justify-content-center gap-3">
                      Get
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.763587 17.2308C0.763587 17.2308 9.42193 8.57241 17.2308 0.76353M17.2308 0.76353C11.5897 6.40463 4.78493 1.68236 4.78493 1.68236M17.2308 0.76353C11.5897 6.40463 16.312 13.2094 16.312 13.2094"
                          stroke="white"
                          strokeWidth="2"
                        />
                      </svg>
                    </span>
                    Started Now
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

export default AiImageGenerationHero;
