import React, { useRef, useEffect } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const CrmFeedbackSection = () => {
  const feedbackData = [
    {
      quote:
        "“Easily organize your infrastructure with Projects. And with Teams, everyone can get their own account, with just the privileges they need to do their jobs. Our hosting costs have decreased by over 90% and we're running at about 25% of our capacity.”",
      author: "Jerry G. Sanchez",
      rating: 5,
      image: "/marketing/client-1.png",
    },
    // Add more feedback items as needed
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  // Use useEffect to ensure Swiper navigation updates once refs are ready
  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="crm-feedback-section pb-40 overflow-hidden bg-white">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="crm-feedback-box rounded position-relative">
              {/* Feedback Slider */}
              <Swiper
                modules={[Navigation, Pagination]}
                className="crm-feedback-slider swiper"
                slidesPerView={1}
                loop={true}
                speed={800}
                spaceBetween={24}
                autoplay={{ delay: 5000 }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper; // Store swiper instance for use in useEffect
                }}
                pagination={{ clickable: true }} // Optional: Enable pagination
              >
                {feedbackData.map((f, index) => (
                  <SwiperSlide
                    key={index}
                    className="crm-feedback-single swiper-slide text-center"
                  >
                    <p className="mb-4 text-white">{f.quote}</p>
                    <h4 className="mb-0 text-white">{f.author}</h4>
                    <ul className="crm-stars d-inline-flex align-items-center p-0 m-0">
                      {Array(5)
                        .fill()
                        .map((_, starIndex) => (
                          <li key={starIndex} className="list-inline">
                            <i className="fa-solid fa-star"></i>
                          </li>
                        ))}
                    </ul>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Navigation Controls */}
              <div
                ref={prevRef}
                className="crm-prev-control-outer crm-fd-slide-control"
              >
                <i className="fa-solid fa-arrow-left"></i>
              </div>
              <div
                ref={nextRef}
                className="crm-next-control-outer crm-fd-slide-control"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrmFeedbackSection;
