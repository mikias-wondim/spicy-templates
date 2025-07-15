import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import { useEffect, useState } from "react";

const ItCompanyProject = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <div className="it-company-project-area ptb-120 overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-8">
              <h2 className="it-company-title it-company-color fs-40 fw-600 flh-56 mb-0">
                Discover Our Latest Projects on PowerPoint
              </h2>
            </div>
            <div className="col-xl-6 col-lg-4">
              <div className="d-flex align-items-center justify-content-end gap-4">
                <div className="it-slider-nav it-company-swiper-button-prev bg-black text-white d-flex align-items-center justify-content-center rounded-circle">
                  <i className="fas fa-arrow-left"></i>
                </div>
                <div className="it-slider-nav it-company-swiper-button-next bg-black text-white d-flex align-items-center justify-content-center rounded-circle">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          {isClient && (
            <div className="row">
              <div className="col-lg-12">
                <Swiper
                  modules={[Navigation, Pagination]}
                  breakpoints={{
                    900: {
                      slidesPerView: 2,
                      spaceBetween: 15,
                    },

                    // when window width is >= 1280px
                    1280: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                  loop={true}
                  navigation={{
                    nextEl: ".it-company-swiper-button-next",
                    prevEl: ".it-company-swiper-button-prev",
                  }}
                  pagination={{
                    el: ".it-company-slider__pagination",
                    clickable: true,
                    renderBullet: (index, className) =>
                      `<span className="${className}"></span>`,
                  }}
                  className="it-company-project-slider mt-50"
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="it-company-project-item position-relative rounded-10 overflow-hidden">
                      <img
                        src="/it_company/project.png"
                        alt="Project 1"
                        className="w-100 img-fluid"
                      />
                      <div className="it-company-project-content w-100 h-100 d-flex flex-column justify-content-end gap-4 pl-40 position-absolute">
                        <a href="#">
                          <p className="it-company-color fs-14 fw-500 it-company-bg-six d-inline-block mb-0">
                            App design
                          </p>
                        </a>
                        <a href="#">
                          <h5 className="text-white fs-20 fw-600 flh-28 pb-30 pr-40">
                            Holisticly benchmark reliable sources
                          </h5>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-company-project-item position-relative rounded-10 overflow-hidden">
                      <img
                        src="/it_company/project_2.png"
                        alt="Project 2"
                        className="w-100 img-fluid"
                      />
                      <div className="it-company-project-content w-100 h-100 d-flex flex-column justify-content-end gap-4 pl-40 position-absolute">
                        <a href="#">
                          <p className="it-company-color fs-14 fw-500 it-company-bg-six d-inline-block mb-0">
                            App design
                          </p>
                        </a>
                        <a href="#">
                          <h5 className="text-white fs-20 fw-600 flh-28 pb-30 pr-40">
                            Holisticly benchmark reliable sources
                          </h5>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-company-project-item position-relative rounded-10 overflow-hidden">
                      <img
                        src="/it_company/project_3.png"
                        alt="Project 3"
                        className="w-100 img-fluid"
                      />
                      <div className="it-company-project-content w-100 h-100 d-flex flex-column justify-content-end gap-4 pl-40 position-absolute">
                        <a href="#">
                          <p className="it-company-color fs-14 fw-500 it-company-bg-six d-inline-block mb-0">
                            App design
                          </p>
                        </a>
                        <a href="#">
                          <h5 className="text-white fs-20 fw-600 flh-28 pb-30 pr-40">
                            Holisticly benchmark reliable sources
                          </h5>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-company-project-item position-relative rounded-10 overflow-hidden">
                      <img
                        src="/it_company/project_4.png"
                        alt="Project 4"
                        className="w-100 img-fluid"
                      />
                      <div className="it-company-project-content w-100 h-100 d-flex flex-column justify-content-end gap-4 pl-40 position-absolute">
                        <a href="#">
                          <p className="it-company-color fs-14 fw-500 it-company-bg-six d-inline-block mb-0">
                            App design
                          </p>
                        </a>
                        <a href="#">
                          <h5 className="text-white fs-20 fw-600 flh-28 pb-30 pr-40">
                            Holisticly benchmark reliable sources
                          </h5>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="it-company-project-item position-relative rounded-10 overflow-hidden">
                      <img
                        src="/it_company/project_5.png"
                        alt="Project 5"
                        className="w-100 img-fluid"
                      />
                      <div className="it-company-project-content w-100 h-100 d-flex flex-column justify-content-end gap-4 pl-40 position-absolute">
                        <a href="#">
                          <p className="it-company-color fs-14 fw-500 it-company-bg-six d-inline-block mb-0">
                            App design
                          </p>
                        </a>
                        <a href="#">
                          <h5 className="text-white fs-20 fw-600 flh-28 pb-30 pr-40">
                            Holisticly benchmark reliable sources
                          </h5>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="it-company-slider__pagination mt-30"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ItCompanyProject;
