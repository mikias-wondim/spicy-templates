import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
const MarketplaceAgencyFeedback = () => {
  return (
    <>
      <section className="bg-light-subtle ptb-120 position-relative z-1 overflow-hidden">
        <img
          src="/home_37/feedback-shape.png"
          alt="image"
          className="ma-feedback-bg img-fluid position-absolute start-0 bottom-0 z-n1"
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="d-flex justify-content-center">
                <div className="d-inline-block px-4 py-1 rounded-pill border border-warning mb-3">
                  <p className="ma-warning-text fw-bold mb-0">Testimonial</p>
                </div>
              </div>
              <div className="text-center">
                <h2 className="ail-title text-black fs-48 fw-600">
                  What Our Clients Say
                </h2>
              </div>
            </div>
          </div>
          <div className="mt-40">
            <div className="row">
              <div className="col-12">
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    nextEl: ".aiart-swiper-button-next",
                    prevEl: ".aiart-swiper-button-prev",
                  }}
                  breakpoints={{
                    840: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    1300: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1400: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                  }}
                  className="aiart-post-slider ma-style"
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="ma-feedback-item bg-white px-4 py-4 rounded shadow-sm">
                      <img
                        src="/home_37/feedback-icon.png"
                        alt="image"
                        className="img-fluid mb-2"
                      />
                      <p className="text-dark fs-18 fw-medium mb-5">
                        The financial analysis and reporting services provided
                        by Fenix have been instrumental in helping us make
                        strategic decisions & drive profitability. Their team's
                        expertise and attention to detail have exceeded our
                        expectations.
                      </p>
                      <div className="d-flex align-items-center">
                        <img
                          src="/testimonial/app-testimonial-1.png"
                          className="img-fluid me-3 rounded-circle"
                          width="50"
                          alt="user"
                        />
                        <div className="author-info">
                          <h6 className="mb-0">Chauffina Carr</h6>
                          <small>Founder</small>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="ma-feedback-item bg-white px-4 py-4 rounded shadow-sm">
                      <img
                        src="/home_37/feedback-icon.png"
                        alt="image"
                        className="img-fluid mb-2"
                      />
                      <p className="text-dark fs-18 fw-medium mb-5">
                        The financial analysis and reporting services provided
                        by Fenix have been instrumental in helping us make
                        strategic decisions & drive profitability. Their team's
                        expertise and attention to detail have exceeded our
                        expectations.
                      </p>
                      <div className="d-flex align-items-center">
                        <img
                          src="/testimonial/app-testimonial-2.png"
                          className="img-fluid me-3 rounded-circle"
                          width="50"
                          alt="user"
                        />
                        <div className="author-info">
                          <h6 className="mb-0">Chauffina Carr</h6>
                          <small>Founder</small>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="ma-feedback-item bg-white px-4 py-4 rounded shadow-sm">
                      <img
                        src="/home_37/feedback-icon.png"
                        alt="image"
                        className="img-fluid mb-2"
                      />
                      <p className="text-dark fs-18 fw-medium mb-5">
                        The financial analysis and reporting services provided
                        by Fenix have been instrumental in helping us make
                        strategic decisions & drive profitability. Their team's
                        expertise and attention to detail have exceeded our
                        expectations.
                      </p>
                      <div className="d-flex align-items-center">
                        <img
                          src="/testimonial/app-testimonial-2.png"
                          className="img-fluid me-3 rounded-circle"
                          width="50"
                          alt="user"
                        />
                        <div className="author-info">
                          <h6 className="mb-0">Chauffina Carr</h6>
                          <small>Founder</small>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="ma-feedback-item bg-white px-4 py-4 rounded shadow-sm">
                      <img
                        src="/home_37/feedback-icon.png"
                        alt="image"
                        className="img-fluid mb-2"
                      />
                      <p className="text-dark fs-18 fw-medium mb-5">
                        The financial analysis and reporting services provided
                        by Fenix have been instrumental in helping us make
                        strategic decisions & drive profitability. Their team's
                        expertise and attention to detail have exceeded our
                        expectations.
                      </p>
                      <div className="d-flex align-items-center">
                        <img
                          src="/testimonial/app-testimonial-1.png"
                          className="img-fluid me-3 rounded-circle"
                          width="50"
                          alt="user"
                        />
                        <div className="author-info">
                          <h6 className="mb-0">Chauffina Carr</h6>
                          <small>Founder</small>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="d-flex align-items-center justify-content-center gap-4 mt-5">
                  <div className="aiart-slider-nav aiart-swiper-button-prev">
                    <i className="fas fa-arrow-left fs-16"></i>
                  </div>
                  <div className="aiart-slider-nav aiart-swiper-button-next">
                    <i className="fas fa-arrow-right fs-16"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketplaceAgencyFeedback;
