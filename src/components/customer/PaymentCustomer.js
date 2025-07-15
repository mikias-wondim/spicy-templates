import React, { useEffect, useState } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Import Swiper styles

export default function PaymentCustomer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="payment-brand-logo pt-120 pb-80 bg-light-subtle">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="text-center mb-4">
              <h5>
                Join these Companies Making
                <span className="gr-text ms-2">Business Flow</span>
              </h5>
            </div>
          </div>
        </div>
        {isClient && (
          <div className="row">
            <div className="col-12">
              <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                  991: {
                    slidesPerView: 5,
                    spaceBetween: 15,
                  },
                }}
                className="payment-brand-logo-slider swiper-wrapper" // Avoid reusing the same class
              >
                <SwiperSlide>
                  <div className="logo-grid-item">
                    <img
                      src="/brand-logo/tb-1.png"
                      className="img-fluid"
                      alt="logo"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="logo-grid-item">
                    <img
                      src="/brand-logo/tb-2.png"
                      className="img-fluid"
                      alt="logo"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="logo-grid-item">
                    <img
                      src="/brand-logo/tb-3.png"
                      className="img-fluid"
                      alt="logo"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="logo-grid-item">
                    <img
                      src="/brand-logo/tb-4.png"
                      className="img-fluid"
                      alt="logo"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="logo-grid-item">
                    <img
                      src="/brand-logo/tb-5.png"
                      className="img-fluid"
                      alt="logo"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
