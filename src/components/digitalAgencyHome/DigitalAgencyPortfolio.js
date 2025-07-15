import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Import Swiper styles
import SwiperCore, { Pagination } from "swiper";

// Initialize Swiper modules
SwiperCore.use([Pagination]);
import { useEffect } from "react";
import Link from "next/link";
const DigitalAgencyPortfolio = () => {
  const handleClick = (event) => {
    event.preventDefault();
    // Your custom logic here
  };
  useEffect(() => {
    // Swiper initialization if needed, or use Swiper's React component
  }, []);

  return (
    <>
      <section className="dg-portfolio-section pt-120 position-relative z-1 overflow-hidden">
        <img
          src="/digital-agency/pf-left-shape.png"
          alt="shape"
          className="position-absolute top-0 z--1 pf-curve left d-none d-xxl-block"
        />
        <img
          src="/digital-agency/pf-right-shape.png"
          alt="shape"
          className="position-absolute top-0 z--1 pf-curve right d-none d-xxl-block"
        />
        <img
          src="/digital-agency/pf-line.png"
          alt="shape"
          className="position-absolute pf-line d-none d-lg-block"
        />
        <span className="dg-circle-style-1 pf-circle position-absolute rounded-circle"></span>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xxl-6 col-lg-8">
              <div className="section-title text-center text-lg-start">
                <span className="fw-bold text-dg-primary mb-2">
                  OUR PORTFOLIO
                </span>
                <h2 className="mb-0 clr-text">
                  Made for the next generation of financial players
                </h2>
              </div>
            </div>
            <div className="col-lg-4 align-self-end">
              <div className="text-center text-lg-end mt-40 mt-lg-0">
                <Link
                  href="/digital-agency"
                  className="btn dg-outline-btn rounded-pill"
                >
                  View All Project
                </Link>
              </div>
            </div>
          </div>
          <div className="dg-portfolio-slider pt-5 swiper ">
            <Swiper
              className="dg-slider-control pb-80-i"
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1440: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide className="dg-portfolio-single bg-white rounded">
                <div className="thunbmanil overflow-hidden rounded-top mb-4">
                  <Link href="/digital-agency">
                    <img
                      src="/digital-agency/p-1.jpg"
                      className="img-fluid"
                      alt="Portfolio Item 1"
                    />
                  </Link>
                </div>
                <div className="dg-portfolio-item-content">
                  <a
                    href="#"
                    onClick={handleClick}
                    className="d-inline-block text-dark badge bg-warning-soft"
                  >
                    Website Design
                  </a>
                  <a href="#">
                    <h5 className="mt-3 mb-4">
                      vender 3d Design repurpose materials and customer
                    </h5>
                  </a>
                  <a href="#" className="read-more-link text-decoration-none">
                    Explore More <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="dg-portfolio-single bg-white rounded">
                <div className="thunbmanil overflow-hidden rounded-top mb-4">
                  <Link href="/digital-agency">
                    <img
                      src="/digital-agency/p-2.jpg"
                      className="img-fluid"
                      alt="Portfolio Item 2"
                    />
                  </Link>
                </div>
                <div className="dg-portfolio-item-content">
                  <a
                    href="#"
                    onClick={handleClick}
                    className="d-inline-block text-dark badge bg-primary-soft"
                  >
                    App Design
                  </a>
                  <Link href="/digital-agency">
                    <h5 className="mt-3 mb-4">
                      Holisticly benchmark reliable sources before holistic
                    </h5>
                  </Link>
                  <Link
                    href="/digital-agency"
                    className="read-more-link text-decoration-none"
                  >
                    Explore More <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="dg-portfolio-single bg-white rounded">
                <div className="thunbmanil overflow-hidden rounded-top mb-4">
                  <a href="#">
                    <img
                      src="/digital-agency/p-3.jpg"
                      className="img-fluid"
                      alt="Portfolio Item 3"
                    />
                  </a>
                </div>
                <div className="dg-portfolio-item-content">
                  <a
                    href="#"
                    onClick={handleClick}
                    className="d-inline-block text-dark badge bg-danger-soft"
                  >
                    Dashboard Design
                  </a>
                  <a href="#">
                    <h5 className="mt-3 mb-4">
                      Authoritat supply high-payoff synergy whereas error-free.
                    </h5>
                  </a>
                  <a href="#" className="read-more-link text-decoration-none">
                    Explore More <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="dg-portfolio-single bg-white rounded">
                <div className="thunbmanil overflow-hidden rounded-top mb-4">
                  <a href="#">
                    <img
                      src="/digital-agency/p-1.jpg"
                      className="img-fluid"
                      alt="Portfolio Item 4"
                    />
                  </a>
                </div>
                <div className="dg-portfolio-item-content">
                  <a
                    href="#"
                    onClick={handleClick}
                    className="d-inline-block text-dark badge bg-success-soft"
                  >
                    Website Design
                  </a>
                  <a href="#">
                    <h5 className="mt-3 mb-4">
                      vender 3d Design repurpose materials and customer
                    </h5>
                  </a>
                  <a href="#" className="read-more-link text-decoration-none">
                    Explore More <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyPortfolio;
