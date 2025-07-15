import React, { useEffect, useState } from "react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

SwiperCore.use([Pagination]);

const slideData = [
  {
    imgSrc: "/crm/htw-1.png",
    title: "What is CRM?",
    description: "Bring in quality leads, nurture them, in a single place.",
    link: "/crm-home",
  },
  {
    imgSrc: "/crm/htw-1.png",
    title: "Grow your Small Business",
    description: "Bring in quality leads, nurture them, in a single place.",
    link: "/crm-home",
  },
  {
    imgSrc: "/crm/htw-2.png",
    title: "Grow your Small Business",
    description: "Bring in quality leads, nurture them, in a single place.",
    link: "/crm-home",
  },
  {
    imgSrc: "/crm/htw-1.png",
    title: "Grow your Small Business",
    description: "Bring in quality leads, nurture them, in a single place.",
    link: "/crm-home",
  },
  {
    imgSrc: "/crm/htw-2.png",
    title: "Grow your Small Business",
    description: "Bring in quality leads, nurture them, in a single place.",
    link: "/crm-home",
  },
];

const CrmHtm = () => {
  const [crmTotalSlide, setCrmTotalSlide] = useState("00");
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    setCrmTotalSlide(
      slideData.length < 10 ? `0${slideData.length}` : `${slideData.length}`
    );
  }, []);

  const handleSlideChange = (swiper) => {
    const index = swiper.realIndex;
    setCurrentSlideIndex(index);
  };

  const paginationStyle = {
    backgroundColor: "red",
    width: `${((currentSlideIndex + 1) / slideData.length) * 100}%`,
    height: "4px",
    transform: "translate3d(0px, 0px, 0px) scaleX(0.8) scaleY(1)",
    transitionDuration: "800ms", // Increased transition duration for a smoother effect
    transitionTimingFunction: "ease-in-out", // Smooth transition timing function
    borderRadius: "2px",
  };

  return (
    <section className="crm-how-it-works position-relative z-1 bg-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-6 col-xl-5 col-lg-7 ">
            <div className="crm-title">
              <span className="crm-subtitle">
                How It Works{" "}
                <img src="/shape/arrow-red.png" alt="arrow" className="ms-1" />
              </span>
              <h2 className="mb-3 text-white">
                Learn What Quiety Can <br className="d-none d-xxl-block" />
                Do For You.
              </h2>
              <p className="mb-0 text-white">
                Bring in quality leads, nurture them, and turn them into happy,
                paying customers. You've had with them, and more—all in a single
                place.
              </p>
              <Link href="/crm-home" className="btn crm-primary-btn mt-40">
                Explore More
              </Link>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-7 col-lg-5">
            <div className="crm-htw-slider swiper ms-lg-3 mt-4 mt-lg-0 py-5">
              <Swiper
                pagination={{ clickable: true }}
                className="swiper-wrapper"
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                }}
                onSlideChange={handleSlideChange}
              >
                {slideData.map((slide, index) => (
                  <SwiperSlide
                    key={index}
                    className="crm-htw-single bg-white text-center rounded"
                  >
                    <img
                      src={slide.imgSrc}
                      alt={slide.title}
                      className="img-fluid mb-30"
                    />
                    <h6 className="mb-2">{slide.title}</h6>
                    <p className="mb-4">{slide.description}</p>
                    <Link href={slide.link} className="read-more-link">
                      Explore More{" "}
                      <i className="fa-solid fa-arrow-right-long ms-1"></i>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="pagination-wrapper ">
                <span className="crm_init_value slide_counter">
                  {`${
                    currentSlideIndex + 1 < 10
                      ? `0${currentSlideIndex + 1}`
                      : currentSlideIndex + 1
                  }`}
                </span>
                <div
                  className="swiper-pagination"
                  style={paginationStyle}
                ></div>
                <span className="crm_total_value slide_counter">
                  {crmTotalSlide}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrmHtm;
