import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

const DesignAgencyOneFeedback = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const feedbacks = [
    {
      quote: "Absolutely Superb!",
      feedback:
        "Interactively redefine progressive networks wire less interfaces. Globally conceptualize robust supply chains after client-focused niches. Enthusiastically provide.",
      rating: 5,
      imgSrc: "/software-company/client-md-1.png",
      name: "Logan jon deo",
      position: "Director at Webflow",
    },
    {
      quote: "Amazing Service!",
      feedback:
        "Interactively redefine progressive networks wire less interfaces. Globally conceptualize robust supply chains after client-focused niches. Enthusiastically provide.",
      rating: 5,
      imgSrc: "/software-company/client-md-2.png",
      name: "Logan jon deo",
      position: "Director at Webflow",
    },
    {
      quote: "Amazing Support!",
      feedback:
        "Interactively redefine progressive networks wire less interfaces. Globally conceptualize robust supply chains after client-focused niches. Enthusiastically provide.",
      rating: 5,
      imgSrc: "/software-company/client-md-3.png",
      name: "Logan jon deo",
      position: "Director at Webflow",
    },
  ];

  return (
    <>
      <section className="sc-feedback-section dg-feedback-bg padding-top-large-2 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center">
                <h2 className="mb-2 clr-text">Trust Members Are Saying.</h2>
                <p className="text-dg-color">
                  Globally envisioneer an expanded array of methods of
                  empowerment and out-of-the-box ideas. Completely deliver
                  open-source strategic theme.
                </p>
              </div>
            </div>
          </div>
          <div className="sc-feedback-slider swiper mt-40">
            {isClient && (
              <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                // pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
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
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                }}
              >
                {feedbacks.map((feedback, index) => (
                  <SwiperSlide key={index}>
                    <div className="sc-feedback-card bg-white rounded">
                      <span className="quote-icon d-block">
                        <svg
                          width="43"
                          height="38"
                          viewBox="0 0 43 38"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.00907893 27.3024C0.00907893 32.9165 4.55993 37.4674 10.1739 37.4674C15.788 37.4674 20.3389 32.9165 20.3389 27.3024C20.3389 21.6883 15.788 17.1375 10.1739 17.1375C9.02018 17.1375 7.91575 17.3387 6.88184 17.6931C9.16937 4.57353 19.4001 -3.88712 9.91624 3.07616C-0.599954 10.7977 -0.00218389 26.9918 0.00958324 27.2885C0.00958324 27.2932 0.00907893 27.2973 0.00907893 27.3024Z"
                            fill="#ECECEC"
                          />
                          <path
                            d="M22.3714 27.3024C22.3714 32.9165 26.9223 37.4674 32.5364 37.4674C38.1505 37.4674 42.7013 32.9165 42.7013 27.3024C42.7013 21.6883 38.1504 17.1375 32.5363 17.1375C31.3824 17.1375 30.2781 17.3387 29.2442 17.6931C31.5317 4.57353 41.7625 -3.88712 32.2786 3.07616C21.7624 10.7977 22.3601 26.9918 22.3719 27.2885C22.3719 27.2932 22.3714 27.2973 22.3714 27.3024Z"
                            fill="#ECECEC"
                          />
                        </svg>
                      </span>
                      <h5 className="sc-heading-color mb-3 mt-4">
                        {feedback.quote}
                      </h5>
                      <p className="text-dg-color mb-20">{feedback.feedback}</p>
                      <ul className="sc-star-list list-unstyled d-flex align-items-center mb-4 mt-1">
                        {[...Array(feedback.rating)].map((_, i) => (
                          <li key={i}>
                            <i className="fa-sharp fa-solid fa-star"></i>
                          </li>
                        ))}
                      </ul>
                      <div className="d-flex align-items-center">
                        <img
                          src={feedback.imgSrc}
                          alt="client"
                          className="rounded-circle flex-shrink-0"
                        />
                        <div className="ms-4">
                          <h5 className="mb-1 sc-heading-color">
                            {feedback.name}
                          </h5>
                          <span className="text-dg-color fs-sm">
                            {feedback.position}
                          </span>
                        </div>
                      </div>
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

export default DesignAgencyOneFeedback;
