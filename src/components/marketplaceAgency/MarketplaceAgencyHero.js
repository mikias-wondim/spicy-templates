import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
const MarketplaceAgencyHero = () => {
  return (
    <>
      <section className="marketplace-agency bg-light-subtle pt-200 position-relative">
        <img
          src="/home_37/ma-hero-bg.png"
          alt="image"
          className="img-fluid position-absolute top-0 end-0 h-100 w-100 pe-none"
        />
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-10">
              <h1 className="text-black fs-64 mb-3">
                We Craft Seamless & intuitive Digital{" "}
                <span className="ma-warning-text">Experiences.</span>
              </h1>
              <p className="fs-18 fw-500 flh-28 fch-65 mb-40">
                We are a web and mobile design and development agency. Making
                websites & apps, creating brand identities & launching startups.
                Our goal is to help design and technical performance.
              </p>
            </div>
            <div className="col-lg-2">
              <img
                src="/home_37/hero-logo.png"
                alt="image"
                className="img-fluid d-none d-lg-block"
              />
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-xl-3">
              <h4 className="text-black fs-36 mb-1">4 millon+</h4>
              <p className="fw-medium fs-18">Business Using Stripe</p>
            </div>
            <div className="col-lg-4 col-xl-3">
              <h4 className="text-black fs-36 mb-1">450 billon+</h4>
              <p className="fw-medium fs-18">Business Using Stripe</p>
            </div>
            <div className="col-lg-4 col-xl-3">
              <h4 className="text-black fs-36 mb-1">120+</h4>
              <p className="fw-medium fs-18">Empowered their business</p>
            </div>
          </div>
        </div>
        <div className="pt-60">
          <div className="position-relative">
            <div className="w-100 h-100 ma-white-gd position-absolute z-1 pe-none"></div>
            <img
              src="/home_37/hero-slide-shape-1.png"
              alt="image"
              className="img-fluid position-absolute top-0 end-0 h-100 pe-none"
            />
            <img
              src="/home_37/hero-slide-shape-2.png"
              alt="image"
              className="img-fluid position-absolute top-0 start-0 h-100 pe-none"
            />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                      nextEl: ".crm-next-control",
                      prevEl: ".crm-prev-control",
                    }}
                    className="ma-hero-slider swiper"
                  >
                    <SwiperSlide>
                      <div className="position-relative">
                        <div className="ma-hero-slide-content d-inline-block bg-black px-4 py-5 rounded-4 position-absolute">
                          <div className="d-inline-block px-4 py-1 rounded-pill border border-white mb-3">
                            <p className="text-white fw-bold mb-0">Business</p>
                          </div>
                          <a href="#">
                            <h5 className="text-white fs-24 fch-30 mb-3">
                              Consulting – Business Consultation WordPress Theme
                            </h5>
                          </a>
                          <div className="d-flex align-items-center gap-4 flex-wrap">
                            <p className="text-white fw-bold mb-0">
                              Sales: 1532
                            </p>
                            <div className="d-flex align-items-center gap-1">
                              <ul className="mb-0 list-unstyled d-flex align-items-center gap-1">
                                <li>
                                  <i className="fs-12 fas fa-star text-warning"></i>
                                </li>
                                <li>
                                  <i className="fs-12 fas fa-star text-warning"></i>
                                </li>
                                <li>
                                  <i className="fs-12 fas fa-star text-warning"></i>
                                </li>
                                <li>
                                  <i className="fs-12 fas fa-star text-warning"></i>
                                </li>
                                <li>
                                  <i className="fs-12 fas fa-star text-warning"></i>
                                </li>
                              </ul>
                              <p className="text-white mb-0">(1.4K Review)</p>
                            </div>
                          </div>
                          <a
                            href="#"
                            className="icon-box d-inline-block rounded-circle ma-warning-bg mb-0"
                          >
                            <i className="fa-solid fa-plus text-white"></i>
                          </a>
                        </div>
                        <div className="text-end">
                          <img
                            src="/home_37/hero-slide-1.png"
                            alt="image"
                            className="img-fluid ma-hero-slide-img"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="position-relative">
                        <div className="ma-hero-slide-content d-inline-block bg-black px-4 py-5 rounded-4 position-absolute">
                          <div className="d-inline-block px-4 py-1 rounded-pill border border-white mb-3">
                            <p className="text-white fw-bold mb-0">Business</p>
                          </div>
                          <a href="#">
                            <h5 className="text-white fs-24 fch-30 mb-3">
                              Consulting – Business Consultation WordPress Theme
                            </h5>
                          </a>
                          <div className="d-flex align-items-center gap-4 flex-wrap">
                            <p className="text-white fw-bold mb-0">
                              Sales: 1532
                            </p>
                            <div className="d-flex align-items-center gap-1">
                              <ul className="mb-0 list-unstyled d-flex align-items-center gap-1">
                                <li>
                                  <i className="fs-12 fas fa-star text-warning"></i>
                                </li>
                                <li>
                                  <i className="fs-12 fas fa-star text-warning"></i>
                                </li>
                                <li>
                                  <i className="fs-12 fas fa-star text-warning"></i>
                                </li>
                                <li>
                                  <i className="fs-12 fas fa-star text-warning"></i>
                                </li>
                                <li>
                                  <i className="fs-12 fas fa-star text-warning"></i>
                                </li>
                              </ul>
                              <p className="text-white mb-0">(1.4K Review)</p>
                            </div>
                          </div>
                          <a
                            href="#"
                            className="icon-box d-inline-block rounded-circle ma-warning-bg mb-0"
                          >
                            <i className="fa-solid fa-plus text-white"></i>
                          </a>
                        </div>
                        <div className="text-end">
                          <img
                            src="/home_37/hero-slide-1.png"
                            alt="image"
                            className="img-fluid ma-hero-slide-img"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="crm-fd-slide-control-wrapper position-relative z-2">
                <div className="crm-prev-control crm-next-control-outer crm-fd-slide-control ma-warning-bg">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
                <div className="crm-next-control crm-prev-control-outer crm-fd-slide-control ma-warning-bg">
                  <i className="fa-solid fa-arrow-left"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketplaceAgencyHero;
