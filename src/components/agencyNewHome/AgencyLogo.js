import React, { useEffect, useState } from "react";
import { Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";

const AgencyLogo = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const logos = [
    { src: "/brand-logo/google.svg", alt: "Google" },
    { src: "/brand-logo/facebook.svg", alt: "Facebook" },
    { src: "/brand-logo/youtube.svg", alt: "YouTube" },
    { src: "/brand-logo/printerest.svg", alt: "Pinterest" },
    { src: "/brand-logo/webflow.svg", alt: "Webflow" },
    { src: "/brand-logo/company.svg", alt: "Company" },
  ];
  return (
    <>
      {isClient && (
        <section className="digtal-marketing-logo ah-bg pb-60">
          <div className="container">
            <div className="bg-light-subtle style-dark shadow-sm py-5 px-4 rounded-3">
              <div className="row justify-content-center">
                <div className="col-auto">
                  <h5 className="mb-4 clr-text">
                    Trusted by the best companies in the world
                  </h5>
                </div>
              </div>
              <div className="row">
                <div className="col-auto">
                  <div className="swiper digi-logo-slider">
                    <Swiper
                      className="swiper-wrapper"
                      slidesPerView={4}
                      modules={[Autoplay]}
                      autoplay={{ delay: 3000 }}
                      spaceBetween={30}
                      loop={true}
                      breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1000: { slidesPerView: 4 },
                        1200: { slidesPerView: 5 },
                        1400: { slidesPerView: 6 },
                      }}
                    >
                      {logos.map((logo, index) => (
                        <SwiperSlide key={index}>
                          <div className="single-logo">
                            <img
                              src={logo.src}
                              className="img-fluid"
                              alt={logo.alt}
                              height="30"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AgencyLogo;
