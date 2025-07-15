import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Autoplay, Pagination } from "swiper";

const testimonials = [
  {
    id: 1,
    name: "Leslie Alexander",
    text: "“Interactively redefine progressive networks. Synergistically integrate dynamic solutions vis-a-vis resource maximizing ROI.”",
    image: "/risk_managment/testimonial.png",
    icon: "/risk_managment/testimonial_icon.png",
  },
  {
    id: 1,
    name: "Leslie Alexander",
    text: "“Interactively redefine progressive networks. Synergistically integrate dynamic solutions vis-a-vis resource maximizing ROI.”",
    image: "/risk_managment/testimonial.png",
    icon: "/risk_managment/testimonial_icon.png",
  },
  {
    id: 1,
    name: "Leslie Alexander",
    text: "“Interactively redefine progressive networks. Synergistically integrate dynamic solutions vis-a-vis resource maximizing ROI.”",
    image: "/risk_managment/testimonial.png",
    icon: "/risk_managment/testimonial_icon.png",
  },
  {
    id: 1,
    name: "Leslie Alexander",
    text: "“Interactively redefine progressive networks. Synergistically integrate dynamic solutions vis-a-vis resource maximizing ROI.”",
    image: "/risk_managment/testimonial.png",
    icon: "/risk_managment/testimonial_icon.png",
  },
];

const PaymentGatewayNewTestimonial = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <div className="rm-testimonial-area pay-gw-style risk-slider__controls ">
          <div className="container">
            <div className="bgc-white ptb-80 pl-50 pr-50 rounded-12 position-relative z-1">
              <div className="row align-items-center justify-content-between">
                <div className="col-lg-6">
                  <h2 className="pay-gw-title pay-gw-color fs-42 ff-risk-pri fw-800 mb-20 pr-20">
                    Real Stories Real Impact
                  </h2>
                  <p className="risk-color-two ff-dmsans fs-16 flh-28 mb-0 fch-50">
                    Move from feeling ill-equipped and anxious about imminent
                    catastrophe to outsmarting the bad actors & protecting.
                  </p>
                </div>
                <div className="col-lg-4">
                  <div className="text-end">
                    <a
                      href="request-demo.html"
                      className="btn pay-bg-color text-white rounded-3"
                    >
                      Read their Stories
                    </a>
                  </div>
                </div>
              </div>
              <div className="risk-testimonial-items ptb-20 risk-slider__pagination">
                <Swiper
                  className="pb-80-i"
                  modules={[Pagination, Autoplay]}
                  autoplay={{
                    delay: 3000,
                  }}
                  breakpoints={{
                    1300: {
                      slidesPerView: 3, // Show 2 slides when screen width is 1700px or more
                      spaceBetween: 20, // Increase space between slides
                    },
                    1024: {
                      slidesPerView: 2,
                      spaceBetween: 20, // Default to 1 slide for widths below 1700px
                    },
                    624: {
                      slidesPerView: 1,
                      spaceBetween: 20, // Default to 1 slide for widths below 1700px
                    },
                  }}
                  loop={true}
                  pagination={{ clickable: true }}
                >
                  {testimonials.map((testimonial, i) => (
                    <SwiperSlide key={i}>
                      <div className="risk-testimonial-item pay-bg-two padding-6 ptb-40 rounded-8 mt-20">
                        <div className="d-flex align-items-center gap-3">
                          <img src={testimonial.image} alt={testimonial.name} />
                          <div className="rm-testimonial-info">
                            <h6 className="risk-color fs-14 ff-dmsans fw-500 mb-0">
                              {testimonial.name}
                            </h6>
                            <img
                              src={testimonial.icon}
                              alt="Testimonial Icon"
                            />
                          </div>
                        </div>
                        <p className="risk-color-two fs-16 ff-dmsans flh-24 mt-20 mb-0">
                          {testimonial.text}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="risk-slider__controls pay-gw">
                  <div className="risk-slider__pagination"></div>
                </div>
              </div>
              <img
                src="/home_34/feedback-bg.png"
                alt="Background"
                className="s-one position-absolute z--1"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentGatewayNewTestimonial;
