import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import Link from "next/link";
const CreativeAgencyTwoHeaderTop = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <div className="ca-two-top-feature">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-2 col-sm-4 col-5">
                <Link
                  className="ca-two-body-clr ff-dmsans fs-12 fw-500 bg-black text-white p-2 rounded-6"
                  href="/creative-agency-two"
                >
                  Quiety Feature
                </Link>
              </div>
              <div className="col-xl-10 col-sm-8 col-7">
                <Swiper
                  spaceBetween={24}
                  loop={true}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 4,
                    },
                    1024: {
                      slidesPerView: 6,
                    },
                  }}
                  className="ca-two-top-slider"
                >
                  <SwiperSlide>
                    <Link
                      className="ca-two-body-clr ff-dmsans fs-12 fw-500"
                      href="/creative-agency-two"
                    >
                      Agency
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Link
                      className="ca-two-body-clr ff-dmsans fs-12 fw-500"
                      href="/creative-agency-two"
                    >
                      Cyber
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Link
                      className="ca-two-body-clr ff-dmsans fs-12 fw-500"
                      href="/creative-agency-two"
                    >
                      Design
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Link
                      className="ca-two-body-clr ff-dmsans fs-12 fw-500"
                      href="/creative-agency-two"
                    >
                      Development
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Link
                      className="ca-two-body-clr ff-dmsans fs-12 fw-500"
                      href="/creative-agency-two"
                    >
                      Software
                    </Link>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreativeAgencyTwoHeaderTop;
