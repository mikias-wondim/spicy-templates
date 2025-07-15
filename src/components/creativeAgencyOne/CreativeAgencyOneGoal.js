import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { Pagination, Navigation, Autoplay } from "swiper"; // Import Swiper styles

const CreativeAgencyOneGoal = () => {
  const goalData = [
    {
      imgSrc: "/creative-agency/icon-cpu-set.png",
      imgAlt: "Advanced analytics",
      title: "Advanced analytics",
      description:
        "We provide best IT solutions for type of business as company",
      bgColor: "bgc-base",
    },
    {
      imgSrc: "/creative-agency/icon-crown.png",
      imgAlt: "Automated Reports",
      title: "Automated Reports",
      description:
        "We provide best IT solutions for type of business as company",
      bgColor: "bgc-warning",
    },
    {
      imgSrc: "/creative-agency/icon-upload.png",
      imgAlt: "User Journey Flow",
      title: "User Journey Flow",
      description:
        "We provide best IT solutions for type of business as company",
      bgColor: "bgc-secondary",
    },
    {
      imgSrc: "/creative-agency/icon-crown.png",
      imgAlt: "Automated Reports",
      title: "Automated Reports",
      description:
        "We provide best IT solutions for type of business as company",
      bgColor: "bgc-warning",
    },
  ];
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <div className="ca-goal-section ca-goal-slider__pagination bgc-primary">
          <div className="section-space--sm-bottom">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10 col-xl-6">
                  <h4 className="heading-4 clr-white mb-0 text-center">
                    Does More than Ever Platform to Achieve Goal Stages.
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="swiper ca-goal-slider ">
                  <Swiper
                    modules={[Pagination]}
                    // Number of slides per view
                    pagination={{ clickable: true }} // Enable pagination
                    loop={true} // Enable looping
                    autoplay={{ delay: 5000 }} // Optional: auto-slide every 5 seconds
                    className="ca-goal-slider pb-80-i "
                    breakpoints={{
                      // when window width is >= 900px
                      900: {
                        slidesPerView: 1,
                        spaceBetween: 35,
                      },
                      // when window width is >= 1024px
                      1024: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      // when window width is >= 1280px
                      1280: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      // when window width is >= 1440px
                      1440: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                    }}
                  >
                    {goalData.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div className="padding-x-3">
                          <div className="ca-goal-card bgc-white rounded-4 padding-5 padding-md-10 text-center">
                            <div
                              className={`d-grid place-content-center width-21 height-21 rounded-circle mx-auto margin-bottom-6 ${item.bgColor}`}
                            >
                              <img
                                src={item.imgSrc}
                                alt={item.imgAlt}
                                className="img-fluid"
                              />
                            </div>
                            <h6 className="heading-6 clr-text margin-bottom-3 lh-1 font-weight-bold">
                              {item.title}
                            </h6>
                            <p className="clr-paragraph mb-0">
                              {item.description}
                            </p>
                            <span className="ca-goal-card__extension ca-goal-card__extension-start"></span>
                            <span className="ca-goal-card__extension ca-goal-card__extension-end"></span>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreativeAgencyOneGoal;
