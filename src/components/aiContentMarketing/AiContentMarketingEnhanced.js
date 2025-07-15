import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
const AiContentMarketingEnhanced = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const slidesGroup1 = [
    "/ai-wt-home/enc-slide-1.png",
    "/ai-wt-home/enc-slide-2.png",
    "/ai-wt-home/enc-slide-3.png",
    "/ai-wt-home/enc-slide-4.png",
    "/ai-wt-home/enc-slide-5.png",
    "/ai-wt-home/enc-slide-2.png",
    "/ai-wt-home/enc-slide-3.png",
    "/ai-wt-home/enc-slide-4.png",
    "/ai-wt-home/enc-slide-3.png",
    "/ai-wt-home/enc-slide-4.png",
    "/ai-wt-home/enc-slide-5.png",
    "/ai-wt-home/enc-slide-2.png",
  ];

  const slidesGroup2 = [
    "/ai-wt-home/enc-slide-6.png",
    "/ai-wt-home/enc-slide-7.png",
    "/ai-wt-home/enc-slide-8.png",
    "/ai-wt-home/enc-slide-9.png",
    "/ai-wt-home/enc-slide-10.png",
    "/ai-wt-home/enc-slide-6.png",
    "/ai-wt-home/enc-slide-7.png",
    "/ai-wt-home/enc-slide-8.png",
    "/ai-wt-home/enc-slide-9.png",
    "/ai-wt-home/enc-slide-10.png",
  ];

  const slidesGroup3 = [
    "/ai-wt-home/enc-slide-11.png",
    "/ai-wt-home/enc-slide-12.png",
    "/ai-wt-home/enc-slide-13.png",
    "/ai-wt-home/enc-slide-14.png",
    "/ai-wt-home/enc-slide-15.png",
    "/ai-wt-home/enc-slide-11.png",
    "/ai-wt-home/enc-slide-12.png",
    "/ai-wt-home/enc-slide-13.png",
    "/ai-wt-home/enc-slide-14.png",
    "/ai-wt-home/enc-slide-15.png",
  ];

  const renderSlides = (slides) =>
    slides.map((src, index) => (
      <SwiperSlide key={index}>
        <div className="ai-wt-enc-slider-item bg-white d-inline-flex align-items-center justify-content-center p-5 rounded-8">
          <img
            className="img-fluid shape-1 position-absolute"
            src={src}
            alt=""
          />
        </div>
      </SwiperSlide>
    ));

  return (
    <>
      {isClient && (
        <div className="ai-wt-enhanced-content ptb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-6 col-lg-9">
                <div className="text-center">
                  <h2 className="aiwt-title text-black ff-risk-pri fs-48 mb-30">
                    Enhanced Content that Caters to your-
                    <span className="ai-wt-brand-text fw-400">
                      Preferences.
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-8">
                <div className="ai-wt-enc-card bg-white p-4 pt-80 pb-40 risk-shadow rounded-3 mt-20">
                  <div className="row">
                    <div className="col-lg-6">
                      <h2 className="text-black ff-risk-pri fs-36 mb-20">
                        Generate
                        <span className="ai-wt-brand-text fw-400">
                          AI-Powered
                        </span>{" "}
                        Content–in 1 Click.
                      </h2>
                      <p>
                        You wrote an article and want to know if optimized? You
                        don't have to be a SEO expert. With our content to rank
                        for valuable keywords.
                      </p>
                      <a
                        href=""
                        className="d-flex align-items-center gap-3 ff-risk-pri fw-700"
                      >
                        Try SEO tool for free
                        <svg
                          width="23"
                          height="18"
                          viewBox="0 0 23 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M-7.02541e-06 9C-7.02541e-06 9 12.0181 9 22.8572 9M22.8572 9C15.0271 9 13.5818 1 13.5818 1M22.8572 9C15.0271 9 13.5818 17 13.5818 17"
                            stroke="#175cffd9"
                            strokeWidth="1.62873"
                          />
                        </svg>
                      </a>
                    </div>
                    <div className="col-lg-6">
                      <div className="position-relative">
                        <img
                          className="img-fluid"
                          src="/ai-wt-home/enc-card-1.png"
                          alt=""
                        />
                        <img
                          className="img-fluid shape-1 position-absolute"
                          src="/ai-wt-home/enc-card-2.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4">
                <div className="ai-wt-enc-slider ai-wt-bg rounded-3 overflow-hidden mt-20">
                  <div className="p-4">
                    <h3 className="text-white ff-risk-pri fs-24 mb-20">
                      Embed Your Marketing Your Every Fevorite Tools
                    </h3>
                    <p className="text-white">
                      You wrote an article & want to know if it is You don't
                      have to be a SEO expert.{" "}
                    </p>
                    <a
                      href=""
                      className="d-flex align-items-center gap-3 ff-risk-pri fw-700"
                    >
                      Try SEO tool for free
                      <svg
                        width="23"
                        height="18"
                        viewBox="0 0 23 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M-7.02541e-06 9C-7.02541e-06 9 12.0181 9 22.8572 9M22.8572 9C15.0271 9 13.5818 1 13.5818 1M22.8572 9C15.0271 9 13.5818 17 13.5818 17"
                          stroke="#175cffd9"
                          strokeWidth="1.62873"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div className="pb-20">
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      autoplay={{ delay: 0, disableOnInteraction: false }}
                      loop={true}
                      speed={5000}
                      breakpoints={{
                        400: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                        640: {
                          slidesPerView: 4,
                          spaceBetween: 20,
                        },
                        // when window width is >= 768px
                        768: {
                          slidesPerView: 6,
                          spaceBetween: 30,
                        },
                        // when window width is >= 900px
                        900: {
                          slidesPerView: 6,
                          spaceBetween: 35,
                        },
                        // when window width is >= 1024px
                        1024: {
                          slidesPerView: 7,
                          spaceBetween: 40,
                        },
                        // when window width is >= 1280px
                        1280: {
                          slidesPerView: 7.5,
                          spaceBetween: 40,
                        },
                        // when window width is >= 1440px
                        1400: {
                          slidesPerView: 4,
                          spaceBetween: 20,
                        },
                      }}
                      className="ai-wt-enc-slider-1"
                    >
                      {renderSlides(slidesGroup1)}
                    </Swiper>

                    <Swiper
                      modules={[Autoplay, Navigation, Pagination]}
                      autoplay={{ delay: 0, reverseDirection: true }}
                      speed={5000}
                      loop={true}
                      direction="horizontal" // Keep the direction horizontal
                      // Keep the direction horizontal
                      breakpoints={{
                        400: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                        640: {
                          slidesPerView: 4,
                          spaceBetween: 20,
                        },
                        // when window width is >= 768px
                        768: {
                          slidesPerView: 6,
                          spaceBetween: 30,
                        },
                        // when window width is >= 900px
                        900: {
                          slidesPerView: 6,
                          spaceBetween: 35,
                        },
                        // when window width is >= 1024px
                        1024: {
                          slidesPerView: 7,
                          spaceBetween: 40,
                        },
                        // when window width is >= 1280px
                        1280: {
                          slidesPerView: 7.5,
                          spaceBetween: 40,
                        },
                        // when window width is >= 1440px
                        1400: {
                          slidesPerView: 4,
                          spaceBetween: 20,
                        },
                      }}
                      className="ai-wt-enc-slider-2 reverse-swiper flex-row-reverse "
                    >
                      {renderSlides(slidesGroup2)}
                    </Swiper>

                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      spaceBetween={30}
                      slidesPerView={1}
                      autoplay={{ delay: 0 }}
                      speed={5000}
                      loop={true}
                      breakpoints={{
                        400: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                        640: {
                          slidesPerView: 4,
                          spaceBetween: 20,
                        },
                        // when window width is >= 768px
                        768: {
                          slidesPerView: 6,
                          spaceBetween: 30,
                        },
                        // when window width is >= 900px
                        900: {
                          slidesPerView: 6,
                          spaceBetween: 35,
                        },
                        // when window width is >= 1024px
                        1024: {
                          slidesPerView: 7,
                          spaceBetween: 40,
                        },
                        // when window width is >= 1280px
                        1280: {
                          slidesPerView: 7.5,
                          spaceBetween: 40,
                        },
                        // when window width is >= 1440px
                        1400: {
                          slidesPerView: 4,
                          spaceBetween: 20,
                        },
                      }}
                      className="ai-wt-enc-slider-3"
                    >
                      {renderSlides(slidesGroup3)}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6">
                <div className="bg-white p-4 pb-60 rounded-3 risk-shadow mt-20 position-relative z-1">
                  <img
                    className="img-fluid position-absolute left-0 top-0 z--1"
                    src="/ai-wt-home/shape/step-box-1.png"
                    alt=""
                  />
                  <div className="text-center">
                    <img
                      className="img-fluid mt-30"
                      src="/ai-wt-home/step-1.png"
                      alt=""
                    />
                  </div>
                  <h3 className="text-black ff-risk-pri fs-28 mb-20">
                    Adding Amazon <br />
                    Product list
                  </h3>
                  <p>
                    You wrote an article and want to know if it is You don't
                    have to be a SEO expert.
                  </p>
                  <a
                    href=""
                    className="d-flex align-items-center gap-3 ff-risk-pri fw-700"
                  >
                    Try SEO tool for free
                    <svg
                      width="23"
                      height="18"
                      viewBox="0 0 23 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-7.02541e-06 9C-7.02541e-06 9 12.0181 9 22.8572 9M22.8572 9C15.0271 9 13.5818 1 13.5818 1M22.8572 9C15.0271 9 13.5818 17 13.5818 17"
                        stroke="#175cffd9"
                        strokeWidth="1.62873"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="bg-white p-4 rounded-3 risk-shadow mt-20 position-relative z-1">
                  <img
                    className="img-fluid position-absolute right-0 bottom-0 z--1"
                    src="/ai-wt-home/shape/step-box-2.png"
                    alt=""
                  />
                  <h3 className="text-black ff-risk-pri fs-28 mb-20">
                    SEO tool to Optimize Your Content for First Page Rankings
                  </h3>
                  <p>
                    You wrote an article and want to know if it is You don't
                    have to be a SEO expert.
                  </p>
                  <a
                    href=""
                    className="d-flex align-items-center gap-3 ff-risk-pri fw-700"
                  >
                    Try SEO tool for free
                    <svg
                      width="23"
                      height="18"
                      viewBox="0 0 23 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-7.02541e-06 9C-7.02541e-06 9 12.0181 9 22.8572 9M22.8572 9C15.0271 9 13.5818 1 13.5818 1M22.8572 9C15.0271 9 13.5818 17 13.5818 17"
                        stroke="#175cffd9"
                        strokeWidth="1.62873"
                      ></path>
                    </svg>
                  </a>
                  <div className="text-center">
                    <img
                      className="img-fluid"
                      src="/ai-wt-home/step-2.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AiContentMarketingEnhanced;
