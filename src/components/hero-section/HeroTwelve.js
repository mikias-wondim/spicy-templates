import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

export default function HeroTwelve() {
  return (
    <div className="hero-twelve">
      <Swiper modules={[Autoplay]} loop={true} autoplay={{ delay: 3000 }}>
        <SwiperSlide>
          <div
            className="slider-one slider"
            style={{
              background:
                "url('/slider/sl-1-1.png') no-repeat center center/cover",
            }}
          >
            <div className="container">
              <div className="">
                <div className="col-lg-6">
                  <div className="hero-content">
                    <h1 className="fw-bold display-5 text-white mb-4">
                      Reliable Hosting For Game
                      <span className="gr-text ms-2">Solutions.</span>
                    </h1>
                    <p className="lead text-off-white m-0">
                      Give your Website the speed, security, and uptime it
                      deserves and become part of the fastest Web Hosting.
                    </p>
                    <Link legacyBehavior href="/request-for-demo">
                      <a className="btn-gradient mt-4 link-with-icon">
                        Order Now <BsArrowRight />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slider-one slider"
            style={{
              background:
                "url('/slider/sl-2-2.png')no-repeat center center/cover",
            }}
          >
            <div className="container">
              <div className="">
                <div className="col-lg-6">
                  <div className="hero-content">
                    <h1 className="fw-bold display-5 text-white mb-4">
                      Reliable Hosting For Game
                      <span className="gr-text ms-2">Solutions.</span>
                    </h1>
                    <p className="lead text-off-white m-0">
                      Give your Website the speed, security, and uptime it
                      deserves and become part of the fastest Web Hosting.
                    </p>
                    <Link legacyBehavior href="/request-for-demo">
                      <a className="btn-gradient mt-4 link-with-icon">
                        {" "}
                        Order Now <BsArrowRight />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
