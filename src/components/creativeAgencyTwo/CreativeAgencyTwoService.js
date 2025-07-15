import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";

const CreativeAgencyTwoService = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <div className="ca-two-ss-area ca-two-bg-five ptb-60">
          <div className="container-fluid">
            <div className="ca-two-service-slider-area swiper">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={3} // Number of slides per view
                loop={true}
                // pagination={{ clickable: true }}
                // navigation
                autoplay={{
                  delay: 3000, // Delay between slides in ms
                  disableOnInteraction: false, // Continue autoplay after user interactions
                }}
                breakpoints={{
                  // when window width is >= 480px
                  480: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  // when window width is >= 900px
                  900: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  // when window width is >= 1024px
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  // when window width is >= 1280px
                  1400: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  // when window width is >= 1440px
                  1900: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  },
                }}
                className="swiper-wrapper"
              >
                <SwiperSlide>
                  <div className="ca-two-ss-item d-flex align-items-center justify-content-center gap-5">
                    <svg
                      width="37"
                      height="38"
                      viewBox="0 0 37 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5 0.5L23.4967 14.0033L37 19L23.4967 23.9967L18.5 37.5L13.5033 23.9967L0 19L13.5033 14.0033L18.5 0.5Z"
                        fill="#141414"
                      />
                    </svg>
                    <h2 className="ca-two-title ca-two-body-clr-two fs-32 fw-500 flh-48 mb-0">
                      WEB DEVELOPMENT
                    </h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="ca-two-ss-item d-flex align-items-center justify-content-center gap-5">
                    <svg
                      width="37"
                      height="38"
                      viewBox="0 0 37 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5 0.5L23.4967 14.0033L37 19L23.4967 23.9967L18.5 37.5L13.5033 23.9967L0 19L13.5033 14.0033L18.5 0.5Z"
                        fill="#141414"
                      />
                    </svg>
                    <h2 className="ca-two-title ca-two-body-clr-two fs-32 fw-500 flh-48 mb-0">
                      UI & UX Design
                    </h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="ca-two-ss-item d-flex align-items-center justify-content-center gap-5">
                    <svg
                      width="37"
                      height="38"
                      viewBox="0 0 37 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5 0.5L23.4967 14.0033L37 19L23.4967 23.9967L18.5 37.5L13.5033 23.9967L0 19L13.5033 14.0033L18.5 0.5Z"
                        fill="#141414"
                      />
                    </svg>
                    <h2 className="ca-two-title ca-two-body-clr-two fs-32 fw-500 flh-48 mb-0">
                      BRANDING
                    </h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="ca-two-ss-item d-flex align-items-center justify-content-center gap-5">
                    <svg
                      width="37"
                      height="38"
                      viewBox="0 0 37 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5 0.5L23.4967 14.0033L37 19L23.4967 23.9967L18.5 37.5L13.5033 23.9967L0 19L13.5033 14.0033L18.5 0.5Z"
                        fill="#141414"
                      />
                    </svg>
                    <h2 className="ca-two-title ca-two-body-clr-two fs-32 fw-500 flh-48 mb-0">
                      DIGITAL MARKETING
                    </h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="ca-two-ss-item d-flex align-items-center justify-content-center gap-5">
                    <svg
                      width="37"
                      height="38"
                      viewBox="0 0 37 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5 0.5L23.4967 14.0033L37 19L23.4967 23.9967L18.5 37.5L13.5033 23.9967L0 19L13.5033 14.0033L18.5 0.5Z"
                        fill="#141414"
                      />
                    </svg>
                    <h2 className="ca-two-title ca-two-body-clr-two fs-32 fw-500 flh-48 mb-0">
                      SEO
                    </h2>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreativeAgencyTwoService;
