import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";
// Sample data for the logos
const logos = [
  { src: "/brand-logo/google.svg", alt: "Google" },
  { src: "/brand-logo/facebook.svg", alt: "Facebook" },
  { src: "/brand-logo/youtube.svg", alt: "YouTube" },
  { src: "/brand-logo/printerest.svg", alt: "Pinterest" },
  { src: "/brand-logo/webflow.svg", alt: "Webflow" },
  { src: "/brand-logo/company.svg", alt: "Company" },
];

const AiCompnayLogoSlider = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <section className="digtal-marketing-logo ah-bg">
          <div className="container">
            <div className="bg-light-subtle style-dark py-5 px-4 rounded-3 position-relative z-2">
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
                      modules={[Navigation, Pagination, Autoplay]}
                      breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 3.5 },
                        1080: { slidesPerView: 4 },
                        1400: { slidesPerView: 5 },
                      }}
                      loop={true}
                      autoplay={{ delay: 4000 }}
                      className="digi-logo-slider"
                      // Add Swiper options here, like pagination, loop, etc.
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
              <div className="aih-shape position-absolute">
                <svg
                  width="170"
                  height="90"
                  viewBox="0 0 222 117"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M220.5 0.5H221.5V0H0L0.5 155.5V112C0.5 103.163 7.66344 96 16.5 96H189.5C197.784 96 204.5 89.2843 204.5 81V16.5C204.5 7.66344 211.663 0.5 220.5 0.5Z"
                    fill="#f3f5f8"
                  />
                </svg>
              </div>
              <div className="aih-shape-two position-absolute">
                <svg
                  width="170"
                  height="90"
                  viewBox="0 0 222 117"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M220.5 0.5H221.5V0H0L0.5 155.5V112C0.5 103.163 7.66344 96 16.5 96H189.5C197.784 96 204.5 89.2843 204.5 81V16.5C204.5 7.66344 211.663 0.5 220.5 0.5Z"
                    fill="#f3f5f8"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AiCompnayLogoSlider;
