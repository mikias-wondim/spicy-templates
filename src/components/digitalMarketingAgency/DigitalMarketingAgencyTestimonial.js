import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/swiper.min.css";

const DigitalMarketingAgencyTestimonial = () => {
  const feedbacks = [
    {
      quote:
        "Amet minim mollit non deserunt est sit aliqua dolor do amet sint officia consequat duis enim mollit exercitation. Intrinsicly leverage existing global opportunities whereas cross-platform core competencies.",
      name: "Peter Parker",
      title: "Visual Designer | Quiety",
      imgSrc: "/creative-agency/quote-img.png",
    },
    {
      quote:
        "Amet minim mollit non deserunt est sit aliqua dolor do amet sint officia consequat duis enim mollit exercitation. Intrinsicly leverage existing global opportunities whereas cross-platform core competencies.",
      name: "Peter Parker",
      title: "Visual Designer | Quiety",
      imgSrc: "/creative-agency/quote-img.png",
    },
    {
      quote:
        "Amet minim mollit non deserunt est sit aliqua dolor do amet sint officia consequat duis enim mollit exercitation. Intrinsicly leverage existing global opportunities whereas cross-platform core competencies.",
      name: "Peter Parker",
      title: "Visual Designer | Quiety",
      imgSrc: "/creative-agency/quote-img.png",
    },
  ];
  return (
    <>
      <div className="section-space">
        <div className="section-space--sm-bottom">
          <div className="container">
            <div className="row g-4 align-items-center justify-content-between">
              <div className="col-lg-6 col-xl-5">
                <h3 className="heading-3 font-weight-semibold clr-text mb-lg-0">
                  What They Say <span className="clr-red">Our Clients</span>{" "}
                  About Us
                </h3>
              </div>
              <div className="col-lg-6">
                <p className="mb-0 heading-font fs-20 clr-paragraph">
                  Level up your recovery with email campaigns proven highly
                  effective for leading eCommerce brands backed
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-11 ms-xl-auto">
              <div className="row g-4 gy-5 align-items-center">
                <div className="col-lg-6">
                  <img
                    src="/creative-agency/testimonial-img.png"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-6">
                  <Swiper
                    className="pb-80-i ca-client-feedback__pagination"
                    spaceBetween={30}
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 3000 }}
                    pagination={{
                      clickable: true,
                    }}
                    loop={true}
                  >
                    {feedbacks.map((feedback, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={feedback.imgSrc}
                          alt="Feedback"
                          className="img-fluid margin-bottom-6"
                        />
                        <h6 className="heading-6 clr-text margin-bottom-10">
                          “{feedback.quote}”
                        </h6>
                        <div className="d-flex gap-3">
                          <div className="flex-shrink-0 width-10 height-1 bgc-primary-gradient margin-top-2"></div>
                          <div className="flex-grow-1">
                            <h6 className="heading-6 clr-text font-weight-semibold">
                              {feedback.name}
                            </h6>
                            <p className="mb-0 clr-paragraph">
                              {feedback.title}
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="swiper-pagination ca-client-feedback__pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalMarketingAgencyTestimonial;
