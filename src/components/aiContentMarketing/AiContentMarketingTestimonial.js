import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const testimonials = [
  {
    text: "AI writing tool for 1-click SEO-optimized articles, blog posts professionals & anyone who needs to produce high-quality documents. One of the best things about Writebot is that it is very user-friendly. The software is easy to navigate and the features are clearly laid out.",
    clientName: "Logan jon deo",
    clientPosition: "Director at Webflow",
    clientImage: "/software-company/client-md-3.png",
    testimonialImage: "/ai-wt-home/testimonial-1.png",
  },
  // Add more testimonials here if needed
];

const AiContentMarketingTestimonial = () => {
  return (
    <div className="ai-wt-testimonial-area pl-20 pr-20">
      <div className="container-fluid">
        <div className="ai-wt-body-bg-2 pt-60 pb-120">
          <div className="container">
            <Swiper
              className="ai-wi-testimonial"
              slidesPerView={1}
              loop
              autoplay={{ delay: 5000 }}
              pagination={{ clickable: true }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="ai-wt-testi-item bg-white p-5 rounded-3">
                    <div className="row g-0 align-items-center justify-content-between">
                      <div className="col-xl-7">
                        <p className="text-black ff-risk-pri fs-24 fw-600 mb-20">
                          {testimonial.text}
                        </p>
                        <div className="d-flex align-items-center gap-3">
                          <img
                            src={testimonial.clientImage}
                            alt={testimonial.clientName}
                          />
                          <div className="ail-content">
                            <h6 className="aih-color-two fs-20 fw-600 mb-0">
                              {testimonial.clientName}
                            </h6>
                            <p className="ca-two-body-clr fs-14 ff-dmsans mb-0">
                              {testimonial.clientPosition}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4">
                        <img
                          className="img-fluid d-none d-xl-block"
                          src={testimonial.testimonialImage}
                          alt="Testimonial"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiContentMarketingTestimonial;
