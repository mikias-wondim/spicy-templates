import { useState } from "react";
import ModalVideo from "react-modal-video";

const DesignAgencyTwoHero = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="hAP2QF--2Dg"
        onClose={() => setOpen(false)}
      />
      <div className="design-agency-two-hero dat-bg pt-160 position-relative overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-shape position-relative">
                <img
                  src="/design-agency/two/hero_4.png"
                  alt=""
                  className="position-absolute one"
                />
                <img
                  src="/design-agency/two/hero_5.png"
                  alt=""
                  className="position-absolute two"
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <h1 className="design-agency-two-hero__title text-center clr-text mb-30">
                RIGHT DESIGN STRATEGY FOR YOUR BUSINESS
              </h1>
              <div className="design-agency-two-hero__btn-box d-flex justify-content-center align-items-center flex-wrap gap-10 mb-80">
                <a href="" className="btn btn-dat-one clr-white">
                  Download Now
                </a>
                <a
                  href="#!"
                  onClick={() => setOpen(true)}
                  type="button"
                  className="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn-dat mt-lg-0 mt-md-0 clr-text"
                >
                  <i className="fas fa-play"></i> How it Work{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 col-sm-12">
              <div className="design-agency-two-hero__bottom-content position-relative z-1">
                <div
                  className="design-agency-two-hero__bottom-content__icon d-flex
                              align-items-center justify-content-center"
                >
                  <img src="/design-agency/two/alarm.png" alt="" />
                </div>
                <h5 className="design-agency-two-hero__bottom-content__title mt-4 clr-text">
                  Authoritatively network synergistic materials after
                  performance based.
                </h5>
                <div className="design-agency-two-hero__bottom-content__user-box mt-4 d-flex align-items-center gap-5">
                  <img src="/design-agency/two/users.png" alt="" />
                  <span className="dat-user-text">1000+ worldwide</span>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-sm-12">
              <div className="design-agency-two-hero__bottom-img position-relative">
                <img
                  src="/design-agency/two/hero_main.png"
                  alt=""
                  className="main-img"
                />
                <img
                  src="/design-agency/two/hero_2.png"
                  alt=""
                  className="position-absolute hero-two"
                />
                <img
                  src="/design-agency/two/hero_3.png"
                  alt=""
                  className="position-absolute hero-three"
                />
                <img
                  src="/design-agency/hero_shape.png"
                  alt=""
                  className="position-absolute hero-four"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignAgencyTwoHero;
