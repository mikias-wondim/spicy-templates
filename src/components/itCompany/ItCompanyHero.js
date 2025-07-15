import { useEffect, useState } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const ItCompanyHero = () => {
  const logos = [
    {
      img: "/creative-agency-2/logo.png",
    },
    {
      img: "/creative-agency-2/logo_4.png",
    },
    {
      img: "/creative-agency-2/logo_2.png",
    },
    {
      img: "/creative-agency-2/logo_3.png",
    },
    {
      img: "/creative-agency-2/logo_4.png",
    },
    {
      img: "/creative-agency-2/logo_2.png",
    },
    {
      img: "/creative-agency-2/logo_2.png",
    },
    {
      img: "/creative-agency-2/logo_3.png",
    },
  ];
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <div className="it-company-hero-area it-company-bg-two pt-160 pb-40 position-relative z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="it-company-hero-title it-company-color fs-64 mb-30">
                <span className="fs-40 fw-600">Solve Your Business</span>
                Challenges With IT
              </h1>
              <p className="clr-paragraph fs-18 fw-500 flh-28 fch-50 mb-40">
                Be available right where your customers need it and give your
                team the automatically.
              </p>
              <a
                href="#"
                className="btn it-company-bg ca-two-bg-hover-two rounded-5 text-white fs-16"
              >
                Get Started
              </a>
            </div>
            <div className="col-lg-6">
              <img
                src="/it_company/hero.png"
                alt=""
                className="it-company-img img-fluid"
              />
            </div>
          </div>
          {isClient && (
            <div className="row">
              <div className="col-lg-12">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={30}
                  loop={true}
                  autoplay={{ delay: 3000 }}
                  className="swiper-wrapper align-items-center"
                  breakpoints={{
                    // when window width is >= 480px
                    480: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    // when window width is >= 768px
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                    // when window width is >= 900px
                    900: {
                      slidesPerView: 3.5,
                      spaceBetween: 35,
                    },
                    // when window width is >= 1024px
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    // when window width is >= 1280px
                    1280: {
                      slidesPerView: 5,
                      spaceBetween: 50,
                    },
                    // when window width is >= 1440px
                    1440: {
                      slidesPerView: 6,
                      spaceBetween: 60,
                    },
                  }}
                >
                  {logos?.map((img, i) => (
                    <SwiperSlide key={i} className="swiper-slide">
                      <div className="single-logo text-center p-3 risk-btn-hover">
                        <img
                          src={img.img}
                          className="img-fluid"
                          height="30"
                          alt="logo"
                        />
                      </div>
                    </SwiperSlide>
                  ))}

                  {/* Add more slides as needed */}
                </Swiper>
              </div>
            </div>
          )}
        </div>
        <img
          src="/it_company/shape/hero.png"
          alt=""
          className="s-one position-absolute"
        />
        <img
          src="/it_company/shape/hero_2.png"
          alt=""
          className="s-two position-absolute"
        />
      </div>
    </>
  );
};

export default ItCompanyHero;
