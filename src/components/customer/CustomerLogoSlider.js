import React, { useEffect, useState } from "react";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
const CustomerLogoSlider = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <section className="cyber-brand-logo pt-80">
      <div className="container">
        <div className="row">
          {isClient && (
            <div className="brand-logo-slider">
              <Swiper
                loop={true}
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },

                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },

                  991: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="cyber-brand-logo text-center">
                    <img
                      src="/brand-logo/slack_logo.png"
                      width={135}
                      height={34}
                      alt="logo"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cyber-brand-logo text-center">
                    <img
                      src="/brand-logo/logo2.png"
                      width={172}
                      height={28}
                      alt="logo "
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cyber-brand-logo text-center">
                    <img
                      src="/brand-logo/logo3.png"
                      width={161}
                      height={29}
                      alt="logo"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cyber-brand-logo text-center">
                    <img
                      src="/brand-logo/logo4.png"
                      width={150}
                      height={26}
                      alt="logo"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cyber-brand-logo text-center">
                    <img
                      src="/brand-logo/logo5.png"
                      width={153}
                      height={29}
                      alt="logo"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CustomerLogoSlider;
