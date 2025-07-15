import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/swiper.min.css";

const CreativeAgencyTestimonial = () => {
  const [swiperInitialized, setSwiperInitialized] = useState(false);

  const testimonials = [
    {
      name: "Jone Smith Deo",
      title: "Founder & CEO Google",
      text: "Synergistically integrate dynamic solutions vis-a-vis resource the maximizing ROI.",
      imgSrc: "/creative-agency/member-1.png",
    },
    {
      name: "Paul S. Williams",
      title: "Founder & CEO Themetags",
      text: "Synergistically integrate dynamic solutions vis-a-vis resource the maximizing ROI.",
      imgSrc: "/creative-agency/member-2.png",
    },
    {
      name: "Carl L. James",
      title: "Founder & CEO Google",
      text: "Synergistically integrate dynamic solutions vis-a-vis resource the maximizing ROI.",
      imgSrc: "/creative-agency/member-3.png",
    },
    // Add more testimonials as needed
  ];

  const clients = [
    "/creative-agency/client-1.png",
    "/creative-agency/client-2.png",
    "/creative-agency/client-3.png",
    "/creative-agency/client-4.png",
    // Add more client images as needed
  ];

  useEffect(() => {
    // Setting swiperInitialized to true to trigger client-side rendering
    setSwiperInitialized(true);
  }, []);

  if (!swiperInitialized) {
    return null; // Render nothing until Swiper is initialized
  }

  return (
    <>
      <div className="section-space bgc-secondary ca-testimonial-section">
        <div className="section-space--sm-bottom">
          <div className="container">
            <div className="row g-4 gy-md-0 align-items-center">
              <div className="col-md-8">
                <h4 className="heading-4 clr-white font-weight-bold mb-0 text-center text-md-start">
                  Trust Members Are Saying
                </h4>
              </div>
              <div className="col-md-4 position-relative">
                <div className="swiper-pagination ca-testimonial-slider__pagination"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="swiper ca-testimonial-slider">
                <Swiper
                  className="swiper-wrapper"
                  modules={[Autoplay, Pagination]}
                  spaceBetween={24}
                  pagination={{
                    el: ".ca-testimonial-slider__pagination",
                    clickable: true,
                  }}
                  loop={true}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 2,
                    },
                    1400: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <div className="bgc-white rounded-4 padding-4 padding-md-6 padding-xl-10 d-flex flex-wrap flex-sm-nowrap gap-6">
                        <div className="flex-shrink-0">
                          <img
                            src={testimonial.imgSrc}
                            alt="image"
                            className="img-fluid"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="heading-6 font-weight-semibold clr-text margin-bottom-1">
                            {testimonial.name}
                          </h6>
                          <span className="d-block clr-paragraph fs-14 font-weight-semibold margin-bottom-4">
                            {testimonial.title}
                          </span>
                          <p className="mb-0 clr-paragraph">
                            {testimonial.text}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="section-space--sm-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <h6 className="heading-6 clr-white margin-bottom-8 font-weight-medium text-center">
                  Trusted by More than 80 Million Users Globally
                </h6>
                <div className="ca-client-slider">
                  <Swiper
                    className=""
                    spaceBetween={30}
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                      640: {
                        slidesPerView: 2,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                      1200: {
                        slidesPerView: 3,
                      },
                      1400: {
                        slidesPerView: 5,
                      },
                    }}
                  >
                    {clients.map((client, index) => (
                      <SwiperSlide key={index} className="text-center">
                        <img src={client} alt="client" className="img-fluid" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeAgencyTestimonial;
