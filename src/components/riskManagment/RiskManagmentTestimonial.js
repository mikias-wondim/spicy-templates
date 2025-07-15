import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import Link from "next/link";

const RiskManagementTestimonial = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const testimonials = [
    {
      image: "/risk_managment/testimonial.png",
      name: "Leslie Alexander",
      icon: "/risk_managment/testimonial_icon.png",
      quote:
        "“Interactively redefine progressive networks. Synergistically integrate dynamic solutions vis-a-vis resource maximizing ROI.”",
    },
    {
      image: "/risk_managment/testimonial.png",
      name: "Leslie Alexander",
      icon: "/risk_managment/testimonial_icon.png",
      quote:
        "“Interactively redefine progressive networks. Synergistically integrate dynamic solutions vis-a-vis resource maximizing ROI.”",
    },
    {
      image: "/risk_managment/testimonial.png",
      name: "Leslie Alexander",
      icon: "/risk_managment/testimonial_icon.png",
      quote:
        "“Interactively redefine progressive networks. Synergistically integrate dynamic solutions vis-a-vis resource maximizing ROI.”",
    },
    {
      image: "/risk_managment/testimonial.png",
      name: "Leslie Alexander",
      icon: "/risk_managment/testimonial_icon.png",
      quote:
        "“Interactively redefine progressive networks. Synergistically integrate dynamic solutions vis-a-vis resource maximizing ROI.”",
    },
    {
      image: "/risk_managment/testimonial.png",
      name: "Leslie Alexander",
      icon: "/risk_managment/testimonial_icon.png",
      quote:
        "“Interactively redefine progressive networks. Synergistically integrate dynamic solutions vis-a-vis resource maximizing ROI.”",
    },
    // Add more testimonials as needed
  ];

  return (
    <>
      {isClient && (
        <div className="rm-testimonial-area ptb-60">
          <div className="container">
            <div className="risk-bg-color-three ptb-80 pl-50 pr-50 rounded-12 position-relative z-1">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h2 className="risk-title risk-color fs-42 ff-risk-pri flh-56 fw-800 mb-20 pr-20">
                    Real Stories_
                    <span className="risk-gd-text">Real Impact</span>
                  </h2>
                  <p className="risk-color-two ff-dmsans fs-16 flh-28 mb-0 fch-50">
                    Move from feeling ill-equipped and anxious about imminent
                    catastrophe to outsmarting the bad actors & protecting.
                  </p>
                </div>
                <div className="col-lg-6">
                  <div className="text-end">
                    <Link
                      href="/risk-managment"
                      className="btn risk-btn-bg risk-outline-btn-hover clr-white ff-risk-pri fs-14 fw-600"
                    >
                      Read their Stories
                    </Link>
                  </div>
                </div>
              </div>
              <div className="risk-testimonial-items ptb-20 swiper risk-slider__controls">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={25}
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 3000,
                  }}
                  loop={true}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                  }}
                  className="risk-slider__pagination pb-80-i"
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <div className="risk-testimonial-item bgc-white padding-6 ptb-40 rounded-8 risk-shadow mt-20">
                        <div className="d-flex align-items-center gap-3">
                          <img src={testimonial.image} alt={testimonial.name} />
                          <div className="rm-testimonial-info">
                            <h6 className="risk-color fs-14 ff-dmsans fw-500 mb-0">
                              {testimonial.name}
                            </h6>
                            <img src={testimonial.icon} alt="Icon" />
                          </div>
                        </div>
                        <p className="risk-color-two fs-16 ff-dmsans flh-24 mt-20 mb-0">
                          {testimonial.quote}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="risk-slider__controls">
                  <div className="risk-slider__pagination"></div>
                </div>
              </div>
              <img
                src="/risk_managment/shape/testimonial.png"
                alt="Background Shape"
                className="s-one position-absolute z--1"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RiskManagementTestimonial;
