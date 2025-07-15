import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
const DesignAgencyTwoPorfolio = () => {
  const portfolioData = [
    {
      category: "Website Design",
      image: "/digital-agency/p-1.jpg",
      title: "vender 3d Design repurpose materials and customer",
      link: "#",
    },
    {
      category: "App Design",
      image: "/digital-agency/p-2.jpg",
      title: "Holisticly benchmark reliable sources before holistic",
      link: "#",
    },
    {
      category: "Dashboard Design",
      image: "/digital-agency/p-3.jpg",
      title: "Authoritat supply high-payoff synergy whereas error.",
      link: "#",
    },
    // Add more items as needed
  ];
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <section className="dg-portfolio-section dat-bg style-dark pt-60 position-relative z-1 overflow-hidden">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-lg-8">
              <div className="section-title text-center">
                <h2 className="mb-0 clr-text">
                  Made for the next generation of financial players
                </h2>
              </div>
            </div>
          </div>
          <div className="dg-portfolio-slider pt-5 swiper ">
            {isClient && (
              <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={25}
                pagination={{ clickable: true }}
                loop={true}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1224: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                }}
                className="swiper-wrapper pb-80-i dg-portfolio-slider-control dg-slider-control"
              >
                {portfolioData.map((f, i) => (
                  <SwiperSlide
                    key={i}
                    className="swiper-slide dg-portfolio-single bg-white rounded"
                  >
                    <div className="thunbmanil overflow-hidden rounded-top mb-4">
                      <a href="#">
                        <img src={f.image} alt="" className="img-fluid" />
                      </a>
                    </div>
                    <div className="dg-portfolio-item-content">
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="d-inline-block dg-text-color badge dg-bg-color"
                      >
                        {f.category}
                      </a>
                      <a href="#">
                        <h5 className="mt-3 mb-4">{f.title}</h5>
                      </a>
                      <a
                        href="#"
                        className="read-more-link text-decoration-none dg-blog-btn-text"
                      >
                        Explore More <i className="fas fa-arrow-right ms-2"></i>
                      </a>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default DesignAgencyTwoPorfolio;
