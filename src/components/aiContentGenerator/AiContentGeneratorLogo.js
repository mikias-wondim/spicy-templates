import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const logos = [
  { src: "/brand-logo/google.svg", alt: "Google logo" },
  { src: "brand-logo/facebook.svg", alt: "Facebook logo" },
  { src: "/brand-logo/youtube.svg", alt: "YouTube logo" },
  { src: "/brand-logo/printerest.svg", alt: "Printerest logo" },
  { src: "/brand-logo/webflow.svg", alt: "Webflow logo" },
  { src: "/brand-logo/company.svg", alt: "Company logo" },
];

const AiContentGeneratorLogo = () => {
  return (
    <section className="digtal-marketing-logo pt-120">
      <div className="container">
        <div className="style-dark py-5 px-4 rounded-3 position-relative z-2 mt-40">
          <div className="row justify-content-center">
            <div className="col-auto">
              <h5 className="mb-4 clr-text">
                Trusted by the best companies in the world
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-auto">
              <Swiper
                className="digi-logo-slider"
                modules={[Autoplay]}
                slidesPerView={5}
                spaceBetween={30}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  480: { slidesPerView: 2 },
                  700: { slidesPerView: 3 },
                  1080: { slidesPerView: 3.5 },
                  1200: { slidesPerView: 4 },
                  1400: { slidesPerView: 5 },
                }}
                autoplay={{
                  delay: 0, // Set to 0 for continuous autoplay
                  disableOnInteraction: false, // Keeps autoplay running even after user interaction
                }}
                loop={true}
                speed={3000}
              >
                {logos.map((logo, index) => (
                  <SwiperSlide key={index}>
                    <div className="single-logo">
                      <img
                        src={logo.src}
                        className="img-fluid"
                        height="30"
                        alt={logo.alt}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiContentGeneratorLogo;
