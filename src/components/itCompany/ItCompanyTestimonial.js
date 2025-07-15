import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import { useEffect, useState } from "react";

const ItCompanyTestimonial = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <div className="it-company-testimonial-area it-company-bg-two ptb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center">
                  <h2 className="it-company-title it-company-color fs-40 fw-600 flh-56 mb-30">
                    Our Client Testimonials
                  </h2>
                </div>
                <div className="sc-feedback-slider mt-40 ">
                  <Swiper
                    modules={[Pagination]}
                    loop={true}
                    pagination={{ clickable: true }}
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
                    className="itc-testimonial-slide-dots pb-80-i"
                  >
                    <SwiperSlide className="swiper-slide">
                      <div className="sc-feedback-card bg-white rounded">
                        <img
                          src="/it_company/testimonial.png"
                          alt="Testimonial"
                          className="mb-4"
                        />
                        <p className="clr-paragraph fs-16 fw-500 flh-24 mb-30">
                          Synergistically integrate dynamic solutions vis
                          maximizing ROI. Appropriately target leadership.
                          Interactively orchestrate
                        </p>
                        <div className="d-flex align-items-center">
                          <img
                            src="/it_company/testimoniala.png"
                            alt="Client"
                            className="rounded-circle flex-shrink-0"
                          />
                          <div className="ms-4">
                            <h5 className="mb-1 it-company-color fs-16 fw-600">
                              Logan Jon Deo
                            </h5>
                            <span className="text-dg-color fs-sm bg-transparent">
                              Director at Webflow
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="sc-feedback-card bg-white rounded">
                        <img
                          src="/it_company/testimonial_2.png"
                          alt="Testimonial"
                          className="mb-4"
                        />
                        <p className="clr-paragraph fs-16 fw-500 flh-24 mb-30">
                          Synergistically integrate dynamic solutions vis
                          maximizing ROI. Appropriately target leadership.
                          Interactively orchestrate
                        </p>
                        <div className="d-flex align-items-center">
                          <img
                            src="/it_company/testimoniala_2.png"
                            alt="Client"
                            className="rounded-circle flex-shrink-0"
                          />
                          <div className="ms-4">
                            <h5 className="mb-1 it-company-color fs-16 fw-600">
                              Logan Jon Deo
                            </h5>
                            <span className="text-dg-color fs-sm bg-transparent">
                              Director at Webflow
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="sc-feedback-card bg-white rounded">
                        <img
                          src="/it_company/testimonial_3.png"
                          alt="Testimonial"
                          className="mb-4"
                        />
                        <p className="clr-paragraph fs-16 fw-500 flh-24 mb-30">
                          Synergistically integrate dynamic solutions vis
                          maximizing ROI. Appropriately target leadership.
                          Interactively orchestrate
                        </p>
                        <div className="d-flex align-items-center">
                          <img
                            src="/it_company/testimoniala_3.png"
                            alt="Client"
                            className="rounded-circle flex-shrink-0"
                          />
                          <div className="ms-4">
                            <h5 className="mb-1 it-company-color fs-16 fw-600">
                              Logan Jon Deo
                            </h5>
                            <span className="text-dg-color fs-sm bg-transparent">
                              Director at Webflow
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div className="itc-testimonial-slide-dots d-flex align-items-center justify-content-center mt-40">
                    <span className="swiper-pagination"></span>
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

export default ItCompanyTestimonial;
