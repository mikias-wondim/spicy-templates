import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";

const AiImageGenerationLogoSlider = () => {
  const logos = [
    "/creative-agency-2/logo.png",
    "/creative-agency-2/logo_2.png",
    "/creative-agency-2/logo_3.png",
    "/creative-agency-2/logo_4.png",
    "/creative-agency-2/logo_5.png",
    "/creative-agency-2/logo.png",
  ];
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <div className="aiart-logo-area bg-white pt-60 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center">
                  <h6 className="text-black fs-20 fw-800 ff-risk-pri mt-20 mb-30">
                    237,059+ websites are powered by{" "}
                    <span className="aiart-gd-text">Writebot</span>
                  </h6>
                </div>
                <Swiper
                  modules={[Autoplay, Pagination, Scrollbar, A11y]}
                  // pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 }}
                  loop={true}
                  slidesPerView={5} // Adjust based on how many logos you want to show at once
                  spaceBetween={30}
                  breakpoints={{
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 30,
                    },
                  }}
                >
                  {logos.map((logo, index) => (
                    <SwiperSlide key={index}>
                      <div className="single-logo">
                        <img
                          src={logo}
                          className="img-fluid"
                          alt="logo"
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
      )}
    </>
  );
};

export default AiImageGenerationLogoSlider;
