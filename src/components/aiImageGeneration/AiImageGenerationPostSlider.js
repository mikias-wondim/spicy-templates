import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

const AiImageGenerationPostSlider = () => {
  const posts = [
    {
      imgSrc: "/aiart_home/post-1.png",
      title: "Photorealistic images",
      description:
        "Explore Our AI Image Generator tools for Creating Captivating AI Generated Art.",
    },
    {
      imgSrc: "/aiart_home/post-2.png",
      title: "Abstract Art image",
      description:
        "Explore Our AI Image Generator tools for Creating Captivating AI Generated Art.",
    },
    {
      imgSrc: "/aiart_home/post-3.png",
      title: "Stylistic images",
      description:
        "Explore Our AI Image Generator tools for Creating Captivating AI Generated Art.",
    },
  ];

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <div className="aiart-post-area ptb-120 position-relative z-1">
          <img
            src="/aiart_home/shape/ps-1.png"
            alt=""
            className="shape-1 position-absolute top-0 left-0 z--1"
          />
          <img
            src="/aiart_home/info-bg.png"
            alt=""
            className="shape-2 position-absolute z--1"
          />
          <div className="container">
            <div className="row align-items-end">
              <div className="col-xxl-6 col-lg-8">
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
                  Discover the potential of
                </h6>
                <h2 className="aiart-title text-black fs-48 ff-risk-pri">
                  What is Achievable <br /> Using an{" "}
                  <span className="aiart-gd-text">AI Art Generator?</span>
                </h2>
              </div>
              <div className="col-xxl-6 col-lg-4">
                <div className="d-flex align-items-center justify-content-lg-end gap-4">
                  <div className="aiart-slider-nav aiart-swiper-button-prev">
                    <i className="fas fa-arrow-left"></i>
                  </div>
                  <div className="aiart-slider-nav aiart-swiper-button-next">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  navigation={{
                    prevEl: ".aiart-swiper-button-prev",
                    nextEl: ".aiart-swiper-button-next",
                  }}
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                  }}
                  autoplay={{ delay: 3000 }}
                  loop={true}
                  className="aiart-post-slider mt-40 pb-20"
                >
                  {posts.map((post, index) => (
                    <SwiperSlide key={index}>
                      <div className="aiart-post-item bgc-white p-4 risk-shadow rounded-3 mt-3">
                        <div className="position-relative mb-30">
                          <img
                            src={post.imgSrc}
                            alt=""
                            className="w-100 img-fluid"
                          />
                          <a
                            href="#"
                            className="aiart-un-btn-sm d-flex align-items-center justify-content-center position-absolute top-0 right-0 rounded-circle"
                          >
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.8357 20.9234C0.8357 20.9234 11.271 10.4881 20.6824 1.07661M20.6824 1.07661C13.8836 7.87541 5.68232 2.18401 5.68232 2.18401M20.6824 1.07661C13.8836 7.87541 19.575 16.0767 19.575 16.0767"
                                stroke="url(#paint0_linear_1624_6502)"
                                strokeWidth="2"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_1624_6502"
                                  x1="22.8348"
                                  y1="3.229"
                                  x2="-3.46576"
                                  y2="10.7372"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#F22FB0" />
                                  <stop
                                    offset="1"
                                    stopColor="#FF7426"
                                    stopOpacity="0.62"
                                  />
                                </linearGradient>
                              </defs>
                            </svg>
                          </a>
                        </div>
                        <a href="#">
                          <h5 className="text-black fs-24 ff-risk-pri fw-700 mb-20">
                            {post.title}
                          </h5>
                        </a>
                        <p className="mb-0 fs-14">{post.description}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <p className="text-black fw-600 ff-risk-pri mt-20 mb-30">
                  Using an AI art generator opens up a{" "}
                  <span className="aiart-gd-text">
                    World of creative possibilities.
                  </span>{" "}
                  These illustrations, and designs with remarkable precision and
                  speed. Whether you're an artist looking.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="text-lg-end">
                  <a
                    href="request-demo.html"
                    className="btn btn-primary rounded-5"
                  >
                    See All AI Tools
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AiImageGenerationPostSlider;
