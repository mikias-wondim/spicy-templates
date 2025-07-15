// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// const AgencyTestimonials = () => {
//   const testimonials = [
//     {
//       image: "/digi-t-1.png",
//       quote: "Agency X helped us to reach our business goals",
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, aliquet duis pellentesque pretium mattis orci. Vestibulum nunc diam tellus ac tempor. Nulla a commod.",
//       name: "Kyle Johnston",
//       title: "Founder & CEO",
//     },
//     // Add more testimonials as needed
//   ];

//   return (
//     <div className="digi-testimonial ah-bg ptb-60">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-lg-6">
//             <div className="text-center mb-5">
//               <div>
//                 <span className="span-arrow text-pink">Customer Feedback</span>
//                 <img src="/arro-right.svg" className="img-fluid" alt="arrow" />
//               </div>
//               <h2 className="digi-testimonial-title clr-text">
//                 Hear what our <span className="text-pink">amazing</span>{" "}
//                 customers say
//               </h2>
//             </div>
//           </div>
//         </div>
//         <div className="row justify-content-center">
//           <div className="col-lg-7">
//             <div className="position-relative z-3">
//               <Swiper
//                 spaceBetween={20}
//                 slidesPerView={1}
//                 loop={true}
//                 autoplay={{ delay: 3000 }}
//                 navigation={{
//                   nextEl: ".swiper-button-next",
//                   prevEl: ".swiper-button-prev",
//                 }}
//                 className="digi-testimonial-wrapper"
//               >
//                 {testimonials.map((testimonial, index) => (
//                   <SwiperSlide key={index}>
//                     <div className="d-md-flex align-items-center digi-testimonial-single border bg-white shadow-lg">
//                       <div className="text-center text-md-start">
//                         <img
//                           src={testimonial.image}
//                           className="me-md-4 mb-4 mb-md-0"
//                           alt="Person"
//                         />
//                       </div>
//                       <div>
//                         <h5 className="mb-3">"{testimonial.quote}"</h5>
//                         <p>{testimonial.text}</p>
//                         <h6 className="m-0">{testimonial.name}</h6>
//                         <span className="fs-sm text-pink-2">
//                           {testimonial.title}
//                         </span>
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//               <div className="digi-nav-control">
//                 <span className="swiper-button-prev shadow-sm">
//                   <i className="fas fa-arrow-left"></i>
//                 </span>
//                 <span className="swiper-button-next shadow-sm">
//                   <i className="fas fa-arrow-right"></i>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AgencyTestimonials;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper-bundle.css";

const AgencyTestimonials = () => {
  return (
    <div className="digi-testimonial ah-bg ptb-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="text-center mb-5">
              <div>
                <span className="span-arrow text-pink">Customer Feedback</span>
                <img src="/arro-right.svg" className="img-fluid" alt="arrow" />
              </div>
              <h2 className="digi-testimonial-title clr-text">
                Hear what our <span className="text-pink">amazing</span>{" "}
                customers say
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="position-relative z-3">
              <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                className="digi-testimonial-wrapper"
              >
                <SwiperSlide>
                  <div className="d-md-flex align-items-center digi-testimonial-single border bg-white shadow-lg">
                    <div className="text-center text-md-start">
                      <img
                        src="/digi-t-1.png"
                        className="me-md-4 mb-4 mb-md-0"
                        alt="Person"
                      />
                    </div>
                    <div>
                      <h5 className="mb-3">
                        "Agency X helped us to reach our business goals"
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vitae, aliquet duis pellentesque pretium mattis orci.
                        Vestibulum nunc diam tellus ac tempor. Nulla a commod.
                      </p>
                      <h6 className="m-0">Kyle Johnston</h6>
                      <span className="fs-sm text-pink-2">Founder & CEO</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="d-md-flex align-items-center digi-testimonial-single border bg-white shadow-lg">
                    <div className="text-center text-md-start">
                      <img
                        src="/digi-t-1.png"
                        className="me-md-4 mb-4 mb-md-0"
                        alt="Person"
                      />
                    </div>
                    <div>
                      <h5 className="mb-3">
                        "Agency X helped us to reach our business goals"
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vitae, aliquet duis pellentesque pretium mattis orci.
                        Vestibulum nunc diam tellus ac tempor. Nulla a commod.
                      </p>
                      <h6 className="m-0">Kyle Johnston</h6>
                      <span className="fs-sm text-pink-2">Founder & CEO</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="d-md-flex align-items-center digi-testimonial-single border bg-white shadow-lg">
                    <div className="text-center text-md-start">
                      <img
                        src="/digi-t-1.png"
                        className="me-md-4 mb-4 mb-md-0"
                        alt="Person"
                      />
                    </div>
                    <div>
                      <h5 className="mb-3">
                        "Agency X helped us to reach our business goals"
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vitae, aliquet duis pellentesque pretium mattis orci.
                        Vestibulum nunc diam tellus ac tempor. Nulla a commod.
                      </p>
                      <h6 className="m-0">Kyle Johnston</h6>
                      <span className="fs-sm text-pink-2">Founder & CEO</span>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="digi-nav-control">
                <span className="swiper-button-prev shadow-sm">
                  <i className="fas fa-arrow-left"></i>
                </span>
                <span className="swiper-button-next shadow-sm">
                  <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyTestimonials;
