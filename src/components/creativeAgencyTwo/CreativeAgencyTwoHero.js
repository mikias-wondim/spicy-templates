import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/swiper-bundle.min.css";
import Link from "next/link";
const CreativeAgencyTwoHero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <div className="ca-two-hero pt-120 pb-330 position-relative">
        <div className="container-fluid">
          <div className="container p-0">
            <div className="position-relative">
              <img
                src="/creative-agency-2/shape/1.png"
                alt=""
                className="one position-absolute"
              />
              <div className="row">
                <div className="col-xl-8">
                  <div className="position-relative">
                    <h1 className="clr-text fs-72 fw-600 mb-30">
                      We Drive Growth with Digital Creation.
                    </h1>
                    <div className="ca-two-hero-content d-flex align-items-center gap-15">
                      <p className="ca-two-body-clr flh-24 fch-55 mb-0">
                        Access your account via your mobile phone View balance,
                        transfer funds, view transactions wherever happy clients
                        all around.
                      </p>
                      <a
                        href=""
                        className="btn dg-outline-btn ca-two-body-clr ca-two-bg-hover-two"
                      >
                        Get in Touch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <img
                    src="/creative-agency-2/hero.png"
                    alt=""
                    className="ca-two-hero-img img-fluid"
                  />
                  {isClient && (
                    <div className="swiper digi-logo-slider mt-40">
                      <Swiper
                        className="swliper-wrapper align-items-center"
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        loop={true} // Optional: makes the slider loop continuously
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }} // Optional: enables auto-slide
                        breakpoints={{
                          // when window width is >= 480px
                          480: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                          },
                          // when window width is >= 640px
                          640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                          },
                          // when window width is >= 768px
                          768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                          },
                          // when window width is >= 900px
                          900: {
                            slidesPerView: 3.5,
                            spaceBetween: 35,
                          },
                          // when window width is >= 1024px
                          1024: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                          },
                          // when window width is >= 1280px
                          1280: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                          },
                          // when window width is >= 1440px
                          1440: {
                            slidesPerView: 6,
                            spaceBetween: 60,
                          },
                        }}
                      >
                        <SwiperSlide>
                          <div className="single-logo">
                            <img
                              src="/creative-agency-2/logo.png"
                              className="img-fluid"
                              height="30"
                              alt="logo"
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="single-logo">
                            <img
                              src="/creative-agency-2/logo_2.png"
                              className="img-fluid"
                              height="30"
                              alt="logo"
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="single-logo">
                            <img
                              src="/creative-agency-2/logo_3.png"
                              className="img-fluid"
                              height="30"
                              alt="logo"
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="single-logo">
                            <img
                              src="/creative-agency-2/logo_4.png"
                              className="img-fluid"
                              height="30"
                              alt="logo"
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="single-logo">
                            <img
                              src="/creative-agency-2/logo_5.png"
                              className="img-fluid"
                              height="30"
                              alt="logo"
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="single-logo">
                            <img
                              src="/creative-agency-2/logo.png"
                              className="img-fluid"
                              height="30"
                              alt="logo"
                            />
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <svg
            width="1840"
            height="1354"
            viewBox="0 0 1840 1354"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 24C0 10.7452 10.7451 0 24 0H1816C1829.25 0 1840 10.7452 1840 24V1179C1840 1192.25 1829.25 1203 1816 1203H1780C1766.75 1203 1756 1213.75 1756 1227V1330C1756 1343.25 1745.25 1354 1732 1354H1180C1166.75 1354 1156 1343.25 1156 1330V1227C1156 1213.75 1145.25 1203 1132 1203H473C465.82 1203 460 1208.82 460 1216C460 1223.18 454.18 1229 447 1229H273C265.82 1229 260 1223.18 260 1216C260 1208.82 254.18 1203 247 1203H24C10.7452 1203 0 1192.25 0 1179V24Z"
              fill="#222222"
              fillOpacity="0.04"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default CreativeAgencyTwoHero;
