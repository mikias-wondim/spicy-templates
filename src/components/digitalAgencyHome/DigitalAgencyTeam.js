import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Import Swiper styles

// Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination]);

const DigitalAgencyTeam = () => {
  // State to manage if the component is mounted
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true on client side
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return null or a loading state during SSR
  }

  return (
    <>
      <section className="dg-team-section pb-100 position-relative z-1 overflow-hidden ptb-120 bg-light-subtle">
        <img
          src="/digital-agency/team-curve-left.png"
          alt="team curve"
          className="position-absolute left tm-curve top-0 h-100 z--1 d-none d-xxl-block"
        />
        <img
          src="/digital-agency/team-curve-right.png"
          alt="team curve"
          className="position-absolute right tm-curve top-0 z--1 h-100 d-none d-xxl-block"
        />
        <img
          src="/digital-agency/team-line.png"
          alt="line shape"
          className="position-absolute team-line z--1 bottom-0"
        />
        <span className="dg-circle-style-1 dg-circle-1 rounded-circle position-absolute z--1"></span>
        <span className="dg-circle-style-2 dg-circle-2 rounded-circle position-absolute z--1"></span>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-xl-5 col-lg-6">
              <div className="dg-team-content text-center text-lg-start mb-4 mb-lg-0">
                <span className="fw-bold text-dg-primary mb-2">
                  MEET OUR EXPERTS
                </span>
                <h2 className="mb-4 clr-text">
                  Our awesome the trust from clients
                </h2>
                <p className="mb-40">
                  We wanted to rethink education and build a platform designed
                  for how people actually learn. Learn efficiently, but
                  thoroughly! With Supercharge. Dramatically incubate flexible.
                </p>
                <a
                  href="contact-us.html"
                  className="btn dg-primary-btn rounded-pill"
                >
                  Join Our Team
                </a>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1400: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                className="dg-team-slider swiper dg-slider-control pb-80-i"
              >
                <SwiperSlide className="dg-team-single rounded-3 position-relative overflow-hidden">
                  <img
                    src="/digital-agency/team-1.jpg"
                    alt="team"
                    className="img-fluid"
                  />
                  <div className="designation-box bg-white rounded-3 text-center">
                    <h6 className="heading-dg-color mb-0">Forrest Collman</h6>
                    <span className="fs-sm d-block">Founder & CEO</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="dg-team-single rounded-3 position-relative overflow-hidden">
                  <img
                    src="/digital-agency/team-2.jpg"
                    alt="team"
                    className="img-fluid"
                  />
                  <div className="designation-box bg-white rounded-3 text-center">
                    <h6 className="heading-dg-color mb-0">Forrest Collman</h6>
                    <span className="fs-sm d-block">Founder & CEO</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="dg-team-single rounded-3 position-relative overflow-hidden">
                  <img
                    src="/digital-agency/team-3.jpg"
                    alt="team"
                    className="img-fluid"
                  />
                  <div className="designation-box bg-white rounded-3 text-center">
                    <h6 className="heading-dg-color mb-0">Forrest Collman</h6>
                    <span className="fs-sm d-block">Founder & CEO</span>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyTeam;
