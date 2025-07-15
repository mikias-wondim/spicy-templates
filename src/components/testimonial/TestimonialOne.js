import React from "react";
import Image from "next/image";

import Rating from "../common/Rating";
import VideoModal from "../common/VideoModal";
import { testimonialAuthor, testimonialOne } from "../../utils/data";
const testimonials = [
  {
    id: 1,
    title: "The Best Template You Got to Have it!",
    rating: 5,
    quote:
      "Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures...",
    author: "Joe Richard",
    position: "Visual Designer",
    image: "/testimonial/t-1.jpg",
    videoUrl: "http://www.youtube.com/watch?v=hAP2QF--2Dg",
  },
  {
    id: 2,
    title: "Embarrassed by the First Version.",
    rating: 5,
    quote:
      "Energistically streamline robust architectures whereas distributed mindshare...",
    author: "Rupan Oberoi",
    position: "Web Designer",
    image: "/testimonial/t-2.jpg",
    videoUrl: "http://www.youtube.com/watch?v=hAP2QF--2Dg",
  },
  {
    id: 3,
    title: "Amazing Quiety template!",
    rating: 5,
    quote:
      "Appropriately negotiate interactive niches rather orchestrate scalable benefits...",
    author: "Jon Doe",
    position: "Software Engineer",
    image: "/testimonial/t-3.jpg",
    videoUrl: "http://www.youtube.com/watch?v=hAP2QF--2Dg",
  },
  {
    id: 4,
    title: "Best Template for SAAS Company!",
    rating: 5,
    quote:
      "Competently repurpose cost-effective strategic theme areas and customer-directed meta-services...",
    author: "Hanry Luice",
    position: "App Developer",
    image: "/testimonial/t-4.jpg",
    videoUrl: "http://www.youtube.com/watch?v=hAP2QF--2Dg",
  },
  {
    id: 5,
    title: "It is Undeniably Good!",
    rating: 5,
    quote:
      "Appropriately disintermediate one-to-one vortals through cross-functional infomediaries...",
    author: "Ami Nijai",
    position: "Customer Support",
    image: "/testimonial/t-5.jpg",
    videoUrl: "http://www.youtube.com/watch?v=hAP2QF--2Dg",
  },
];
const TestimonialOne = ({ darkBg }) => {
  return (
    <section
      className={`customer-review-tab ptb-120 ${
        darkBg ? "bg-gradient text-white" : "bg-light"
      } position-relative z-2`}
    >
      <div className="container">
        <div className="row justify-content-center align-content-center">
          <div className="col-md-10 col-lg-6">
            <div className="section-heading text-center">
              <h4 className="h5 text-warning text-primary">Testimonial</h4>
              <h2>What They Say About Us</h2>
              <p>
                Uniquely promote adaptive quality vectors rather than
                stand-alone e-markets. pontificate alternative architectures
                whereas iterate.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="tab-content" id="testimonial-tabContent">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`tab-pane fade ${
                    index === 0 ? "active show" : ""
                  }`}
                  id={`testimonial-tab-${testimonial.id}`}
                  role="tabpanel"
                >
                  <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6 col-md-6">
                      <div className="testimonial-tab-content mb-5 mb-lg-0 mb-md-0">
                        <img
                          src="/testimonial/quotes-left.svg"
                          alt="testimonial quote"
                          width="65"
                          className="img-fluid mb-32"
                        />
                        <div className="blockquote-title-review mb-4">
                          <h3 className="mb-0 h4 fw-semi-bold">
                            {testimonial.title}
                          </h3>
                          <ul className="review-rate mb-0 list-unstyled list-inline">
                            {Array.from(
                              { length: testimonial.rating },
                              (_, i) => (
                                <li key={i} className="list-inline-item">
                                  <i className="fas fa-star text-warning"></i>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                        <blockquote className="blockquote">
                          <p>{testimonial.quote}</p>
                        </blockquote>
                        <div className="author-info mt-4">
                          <h6 className="mb-0">{testimonial.author}</h6>
                          <span>{testimonial.position}</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                      <div className="author-img-wrap pt-5 ps-5">
                        <div className="testimonial-video-wrapper position-relative">
                          <img
                            src={testimonial.image}
                            className="img-fluid rounded-custom shadow-lg"
                            alt="testimonial author"
                          />
                          <div className="customer-info text-white d-flex align-items-center">
                            <a
                              href={testimonial.videoUrl}
                              className="video-icon popup-youtube text-decoration-none"
                            >
                              <i className="fas fa-play"></i>{" "}
                              <span className="text-white ms-2 small">
                                {" "}
                                Watch Video
                              </span>
                            </a>
                          </div>
                          <div className="position-absolute bg-primary-dark z--1 dot-mask dm-size-16 dm-wh-350 top--40 left--40 top-left"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ul
              className="nav nav-pills testimonial-tab-menu mt-60"
              id="testimonial"
              role="tablist"
            >
              {testimonialAuthor.map((author, i) => (
                <li key={i + 1} className="nav-item" role="presentation">
                  <div
                    className="nav-link d-flex align-items-center rounded-custom border border-light border-2 testimonial-tab-link"
                    data-bs-toggle="pill"
                    data-bs-target={author.target}
                    role="tab"
                    aria-selected="false"
                  >
                    <div className="testimonial-thumb me-3">
                      <img
                        width={50}
                        height={50}
                        src={author.image}
                        className="rounded-circle"
                        alt="testimonial thumb"
                      />
                    </div>
                    <div className="author-info">
                      <h6 className="mb-0">{author.name} </h6>
                      <span>{author.title} </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialOne;
