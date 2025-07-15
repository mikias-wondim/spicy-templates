import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Import Swiper styles
import SwiperCore, { Pagination } from "swiper";

// Initialize Swiper modules
SwiperCore.use([Pagination]);

const DigitalAgencyFeedback = () => {
  // State to manage if the component is mounted
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure the component only renders on the client side
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return null or a loading state during SSR
  }

  return (
    <>
      <section className="dg-feedback-section ptb-120 bg-light-subtle">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title text-center">
                <span className="fw-bold text-dg-primary">
                  OUR TESTIMONIALS
                </span>
                <h2 className="mt-2 clr-text">What our customers say.</h2>
              </div>
            </div>
          </div>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            // pagination={{ clickable: true }}
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
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1400: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="dg-feedback-slider swiper "
          >
            <SwiperSlide className="dg-feedback-single bg-white rounded-3">
              <img
                src="/digital-agency/company-logo-1.png"
                alt="company logo"
                className="img-fluid"
              />
              <p className="mt-4 mb-4">
                Synergistically integrate dynamic solutions vis maximizing ROI.
                Appropriately target leadership. Interactively orchestrate
              </p>
              <div className="dg-feedback-info d-flex align-items-center justify-content-between">
                <div className="dg-clients-info d-inline-flex align-items-center">
                  <img
                    src="/digital-agency/client-1.jpg"
                    className="img-fluid rounded-circle clients-thumbnail bg-white rounded-circle p-2"
                    alt="client"
                  />
                  <div className="ms-4">
                    <h6 className="heading-dg-color mb-0">Leslie Alexander</h6>
                    <span className="fs-sm text-dg-color d-block">
                      Design Director
                    </span>
                  </div>
                </div>
                <span className="serial-number fw-semibold position-relative">
                  1
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="dg-feedback-single bg-white rounded-3">
              <img
                src="/digital-agency/webflow.png"
                alt="company logo"
                className="img-fluid"
              />
              <p className="mt-4 mb-4">
                Synergistically integrate dynamic solutions vis maximizing ROI.
                Appropriately target leadership. Interactively orchestrate
              </p>
              <div className="dg-feedback-info d-flex align-items-center justify-content-between">
                <div className="dg-clients-info d-inline-flex align-items-center">
                  <img
                    src="/digital-agency/client-1.jpg"
                    className="img-fluid rounded-circle clients-thumbnail bg-white rounded-circle p-2"
                    alt="client"
                  />
                  <div className="ms-4">
                    <h6 className="heading-dg-color mb-0">Leslie Alexander</h6>
                    <span className="fs-sm text-dg-color d-block">
                      Design Director
                    </span>
                  </div>
                </div>
                <span className="serial-number fw-semibold position-relative color-2">
                  2
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="dg-feedback-single bg-white rounded-3">
              <img
                src="/digital-agency/google.png"
                alt="company logo"
                className="img-fluid"
              />
              <p className="mt-4 mb-4">
                Synergistically integrate dynamic solutions vis maximizing ROI.
                Appropriately target leadership. Interactively orchestrate
              </p>
              <div className="dg-feedback-info d-flex align-items-center justify-content-between">
                <div className="dg-clients-info d-inline-flex align-items-center">
                  <img
                    src="/digital-agency/client-1.jpg"
                    className="img-fluid rounded-circle clients-thumbnail bg-white rounded-circle p-2"
                    alt="client"
                  />
                  <div className="ms-4">
                    <h6 className="heading-dg-color mb-0">Leslie Alexander</h6>
                    <span className="fs-sm text-dg-color d-block">
                      Design Director
                    </span>
                  </div>
                </div>
                <span className="serial-number fw-semibold position-relative color-3">
                  3
                </span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyFeedback;
