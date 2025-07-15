import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const AiCompanyLogSlider = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <div className="aih-logo-slider ah-bg ptb-60">
          <div className="container-fluid container-xmax p-0">
            <div className="row g-0 justify-content-center">
              <div className="col-12">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={4}
                  autoplay={{
                    delay: 0, // Set to 0 for continuous autoplay
                    disableOnInteraction: false, // Keeps autoplay running even after user interaction
                  }}
                  speed={3000}
                  loop={true}
                  // Default number of slides per view
                  breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 },
                    480: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 3, spaceBetween: 20 },
                    1024: { slidesPerView: 4, spaceBetween: 20 },
                    1400: { slidesPerView: 6, spaceBetween: 20 },
                  }}
                >
                  {[
                    { imgSrc: "/brand-img-1.png", text: "Slack" },
                    { imgSrc: "/brand-img-2.png", text: "Dribbble" },
                    { imgSrc: "/brand-img-3.png", text: "Spotify" },
                    { imgSrc: "/brand-img-4.png", text: "Figma" },
                    { imgSrc: "/brand-img-5.png", text: "Google" },
                    { imgSrc: "/brand-img-6.png", text: "Bootstrap" },
                    { imgSrc: "/brand-img-7.png", text: "Vscode" },
                    { imgSrc: "/brand-img-8.png", text: "Mailchimp" },
                  ].map((brand, index) => (
                    <SwiperSlide key={index}>
                      <div className="qty-brand">
                        <div className="qty-brand__img">
                          <img
                            src={brand.imgSrc}
                            alt={brand.text}
                            className="img-fluid"
                          />
                        </div>
                        <div className="qty-brand__text">{brand.text}</div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AiCompanyLogSlider;
