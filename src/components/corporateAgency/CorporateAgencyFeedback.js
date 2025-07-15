import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CorporateAgencyFeedback = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const feedbackData = [
    {
      id: 1,
      quote:
        "This looks amazing! Congrats with a launch! I clearly remember how many times I was thinking 'hm, what UI-pattern for this feature does Google/Figma/Miro use'. This could save a lot of time for that kind of research 🔥",
      userImage: "/feedback-user-1.png",
      userName: "Wade Warren",
      userTitle: "Director at Webflow",
    },
    {
      id: 2,
      quote:
        "This looks amazing! Congrats with a launch! I clearly remember how many times I was thinking 'hm, what UI-pattern for this feature does Google/Figma/Miro use'. This could save a lot of time for that kind of research 🔥",
      userImage: "/feedback-user-2.png",
      userName: "Wade Warren",
      userTitle: "Director at Webflow",
    },
    {
      id: 3,
      quote:
        "This looks amazing! Congrats with a launch! I clearly remember how many times I was thinking 'hm, what UI-pattern for this feature does Google/Figma/Miro use'. This could save a lot of time for that kind of research 🔥",
      userImage: "/feedback-user-3.png",
      userName: "Wade Warren",
      userTitle: "Director at Webflow",
    },
    {
      id: 4,
      quote:
        "This looks amazing! Congrats with a launch! I clearly remember how many times I was thinking 'hm, what UI-pattern for this feature does Google/Figma/Miro use'. This could save a lot of time for that kind of research 🔥",
      userImage: "/feedback-user-4.png",
      userName: "Wade Warren",
      userTitle: "Director at Webflow",
    },
    {
      id: 5,
      quote:
        "This looks amazing! Congrats with a launch! I clearly remember how many times I was thinking 'hm, what UI-pattern for this feature does Google/Figma/Miro use'. This could save a lot of time for that kind of research 🔥",
      userImage: "/feedback-user-5.png",
      userName: "Wade Warren",
      userTitle: "Director at Webflow",
    },
    {
      id: 6,
      quote:
        "This looks amazing! Congrats with a launch! I clearly remember how many times I was thinking 'hm, what UI-pattern for this feature does Google/Figma/Miro use'. This could save a lot of time for that kind of research 🔥",
      userImage: "/feedback-user-2.png",
      userName: "Wade Warren",
      userTitle: "Director at Webflow",
    },
    // Add more feedback objects as needed
  ];

  return (
    <>
      {isClient && (
        <div className="sections pb-0">
          <div className="sections__head">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8 col-lg-7 col-xxl-6">
                  <h2 className="text-center mb-0 heading-text">
                    What amazing Feedback Client Use Quiety
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-12">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  autoplay={{ delay: 3000 }}
                  loop={true}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    1280: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1536: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                  }}
                  className="feedback-slider"
                >
                  {feedbackData.map((feedback) => (
                    <SwiperSlide key={feedback.id}>
                      <div className="card border-0">
                        <div className="card-body feedback-slider__card">
                          <img
                            src="/icon-quote.png"
                            alt="Quote icon"
                            className="img-fluid"
                          />
                          <p className="feedback-slider__details">
                            {feedback.quote}
                          </p>
                          <div className="text-end">
                            <img
                              src="/icon-quote-end.png"
                              alt="Quote end icon"
                              className="img-fluid"
                            />
                          </div>
                          <div className="text-center mt-30">
                            <img
                              src={feedback.userImage}
                              alt={feedback.userName}
                              className="img-fluid"
                            />
                            <h5 className="mb-0 mt-2 heading-text">
                              {feedback.userName}
                            </h5>
                            <small className="d-block">
                              {feedback.userTitle}
                            </small>
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
      )}
    </>
  );
};

export default CorporateAgencyFeedback;
