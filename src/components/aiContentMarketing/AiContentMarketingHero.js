import React, { useEffect, useState } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const logos = [
  { src: "/creative-agency-2/logo.png", alt: "Logo 1" },
  { src: "/creative-agency-2/logo_2.png", alt: "Logo 2" },
  { src: "/creative-agency-2/logo_3.png", alt: "Logo 3" },
  { src: "/creative-agency-2/logo_4.png", alt: "Logo 4" },
  { src: "/creative-agency-2/logo_5.png", alt: "Logo 5" },
  { src: "/creative-agency-2/logo_3.png", alt: "Logo 3" },
];
const AiContentMarketingHero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <div className="ai-wt-hero-area pl-20 pr-20">
          <div className="container-fluid">
            <div className="ai-wt-hero ai-wt-bg pt-160 pb-40 rounded-3 position-relative z-1 overflow-hidden">
              <div className="row justify-content-center">
                <div className="col-xxl-6 col-lg-8">
                  <div className="text-center">
                    <h1 className="text-white fs-72 ff-risk-pri mb-20">
                      AI Writing Tool For Generating_
                      <span className="ai-wt-brand-text fw-400">Marketing</span>
                    </h1>
                    <p className="text-white fs-18 ff-risk-pri">
                      AI writing tool for 1-click SEO-optimized articles, blog
                      posts & affiliate content. Available in 48 languages,
                      auto-posted to WordPress with AI Images.
                    </p>
                    <a
                      href="/"
                      className="btn ai-wt-gd-bg-2 dark-bg-hover rounded-5 text-white fs-16 border-0 mt-20"
                    >
                      Start Writing for free
                    </a>
                  </div>
                </div>
              </div>

              <div className="ai-wt-logo-slider pt-120">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-auto">
                      <h5 className="mb-4 text-white fs-20">
                        See how over 7,700+ customers{" "}
                        <span className="ai-wt-brand-text fw-400">
                          Help the world work
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-auto">
                      <div className="swiper digi-logo-slider">
                        <Swiper
                          className="digi-logo-slider"
                          modules={[Autoplay]}
                          slidesPerView={5}
                          spaceBetween={30}
                          breakpoints={{
                            320: { slidesPerView: 1 },
                            480: { slidesPerView: 2 },
                            700: { slidesPerView: 3 },
                            1080: { slidesPerView: 3.5 },
                            1200: { slidesPerView: 4 },
                            1400: { slidesPerView: 5 },
                          }}
                          autoplay={{
                            delay: 0, // Set to 0 for continuous autoplay
                            disableOnInteraction: false, // Keeps autoplay running even after user interaction
                          }}
                          loop={true}
                          speed={3000}
                        >
                          {logos.map((logo, index) => (
                            <SwiperSlide key={index}>
                              <div className="single-logo">
                                <img
                                  src={logo.src}
                                  className="img-fluid"
                                  height="30"
                                  alt={logo.alt}
                                />
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <img
                src="/ai-wt-home/shape/hero-1.png"
                alt="Hero Shape 1"
                className="shape-1 img-fluid position-absolute left-0 top-0 z--1"
              />
              <img
                src="/ai-wt-home/shape/hero-2.png"
                alt="Hero Shape 2"
                className="shape-2 img-fluid position-absolute left-0 bottom-0 z--1"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AiContentMarketingHero;
