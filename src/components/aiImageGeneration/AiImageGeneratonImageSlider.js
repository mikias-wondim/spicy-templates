import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
const AiImageGeneratonImageSlider = () => {
  const imagesOne = [
    "/aiart_home/image-slider-1.png",
    "/aiart_home/image-slider-2.png",
    "/aiart_home/image-slider-3.png",
    "/aiart_home/image-slider-4.png",
    "/aiart_home/image-slider-5.png",
    "/aiart_home/image-slider-2.png",
    "/aiart_home/image-slider-7.png",
    "/aiart_home/image-slider-8.png",
  ];
  const imagesTwo = [
    "/aiart_home/image-slider-7.png",
    "/aiart_home/image-slider-8.png",
    "/aiart_home/image-slider-9.png",
    "/aiart_home/image-slider-10.png",
    "/aiart_home/image-slider-11.png",
    "/aiart_home/image-slider-12.png",
    "/aiart_home/image-slider-13.png",
  ];
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <div className="aiart-image-slider-area pt-60 pb-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
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
                      ></path>
                      <path
                        d="M11 22.25L21 12.25"
                        stroke="#175cff"
                        strokeWidth="3"
                      ></path>
                    </svg>
                  </span>
                  Dive into the world of
                </h6>
                <h2 className="aiart-title text-black fs-48 ff-risk-pri mb-30">
                  <span className="aiart-gd-text">Art Created </span>by
                  Artificial Intelligence
                </h2>
              </div>
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              className="scroller-x mb-4"
              data-direction="left"
              data-speed="slow"
            >
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                loop={true}
                speed={5000}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  1424: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                  1524: {
                    slidesPerView: 6,
                    spaceBetween: 10,
                  },
                }}
                className="list list-row "
              >
                {imagesOne.map((src, i) => (
                  <SwiperSlide key={i}>
                    <div className="aiart-image-slider-item">
                      <img src={src} alt="" className="img-fluid" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div
              className="scroller-x"
              data-direction="right"
              data-speed="slow"
            >
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                autoplay={{ delay: 0, reverseDirection: true }}
                speed={5000}
                loop={true}
                direction="horizontal"
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  1424: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                  1524: {
                    slidesPerView: 6,
                    spaceBetween: 10,
                  },
                }}
                className="list list-row align-items-center flex-row-reverse "
              >
                {imagesTwo.map((src, i) => (
                  <SwiperSlide key={i}>
                    <div className="aiart-image-slider-item">
                      <img src={src} alt="" className="img-fluid" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AiImageGeneratonImageSlider;
