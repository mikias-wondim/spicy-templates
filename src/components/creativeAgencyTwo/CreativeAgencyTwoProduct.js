import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";
import { useEffect, useState } from "react";

const CreativeAgencyTwoProduct = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <div className="ca-two-product-area pt-60 pb-120 overflow-hidden">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="ca-two-product-slider swiper">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    // pagination={{ clickable: true }}
                    // navigation
                    autoplay={{
                      delay: 3000, // Delay between slides in ms
                      disableOnInteraction: false, // Continue autoplay after user interactions
                    }}
                    breakpoints={{
                      // Define breakpoints for responsiveness
                      640: {
                        slidesPerView: 2,
                      },
                      768: {
                        slidesPerView: 3,
                      },
                      1024: {
                        slidesPerView: 4,
                      },
                      1400: {
                        slidesPerView: 6,
                      },
                    }} // Optional: adds navigation arrows
                  >
                    <SwiperSlide>
                      <div className="ca-two-product-item bg-white ca-two-border ca-two-border-color rounded-16 padding-6 pt-40 mt-20">
                        <img
                          src="/creative-agency-2/product.png"
                          alt="Product 1"
                          className="ca-two-product-img"
                        />
                        <h5 className="ca-two-body-clr-two fs-20 mb-20 mt-20">
                          Top product
                        </h5>
                        <p className="ca-two-body-clr flh-24 fch-55 mb-0">
                          Creative design is the art of turning imagination into
                          reality.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="ca-two-product-item bg-white ca-two-border ca-two-border-color rounded-16 padding-6 pt-40 mt-20">
                        <img
                          src="/creative-agency-2/product_2.png"
                          alt="Product 2"
                          className="ca-two-product-img"
                        />
                        <h5 className="ca-two-body-clr-two fs-20 mb-20 mt-20">
                          Trending Design
                        </h5>
                        <p className="ca-two-body-clr flh-24 fch-55 mb-0">
                          Creative design is the art of turning imagination into
                          reality.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="ca-two-product-item bg-white ca-two-border ca-two-border-color rounded-16 padding-6 pt-40 mt-20">
                        <img
                          src="/creative-agency-2/product_3.png"
                          alt="Product 3"
                          className="ca-two-product-img"
                        />
                        <h5 className="ca-two-body-clr-two fs-20 mb-20 mt-20">
                          Featured Products
                        </h5>
                        <p className="ca-two-body-clr flh-24 fch-55 mb-0">
                          Creative design is the art of turning imagination into
                          reality.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="ca-two-product-item bg-white ca-two-border ca-two-border-color rounded-16 padding-6 pt-40 mt-20">
                        <img
                          src="/creative-agency-2/product_4.png"
                          alt="Product 4"
                          className="ca-two-product-img"
                        />
                        <h5 className="ca-two-body-clr-two fs-20 mb-20 mt-20">
                          Top Team
                        </h5>
                        <p className="ca-two-body-clr flh-24 fch-55 mb-0">
                          Creative design is the art of turning imagination into
                          reality.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="ca-two-product-item bg-white ca-two-border ca-two-border-color rounded-16 padding-6 pt-40 mt-20">
                        <img
                          src="/creative-agency-2/product_5.png"
                          alt="Product 5"
                          className="ca-two-product-img"
                        />
                        <h5 className="ca-two-body-clr-two fs-20 mb-20 mt-20">
                          Top selling product
                        </h5>
                        <p className="ca-two-body-clr flh-24 fch-55 mb-0">
                          Creative design is the art of turning imagination into
                          reality.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="ca-two-product-item bg-white ca-two-border ca-two-border-color rounded-16 padding-6 pt-40 mt-20">
                        <img
                          src="/creative-agency-2/product.png"
                          alt="Product 6"
                          className="ca-two-product-img"
                        />
                        <h5 className="ca-two-body-clr-two fs-20 mb-20 mt-20">
                          Top product
                        </h5>
                        <p className="ca-two-body-clr flh-24 fch-55 mb-0">
                          Creative design is the art of turning imagination into
                          reality.
                        </p>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreativeAgencyTwoProduct;
