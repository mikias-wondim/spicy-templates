import { useState } from "react";
import ModalVideo from "react-modal-video";

const AgencyHero = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="hAP2QF--2Dg"
        onClose={() => setOpen(false)}
      />
      <div className="agency-home-hero ah-bg pt-160 position-relative overflow-hidden">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-xl-10">
              <div className="agency-home-hero__content text-end">
                <h1 className="agency-home-hero__content__title display-3 fw-semibold hd-hero-title clr-text">
                  Increase Your Growth Rate With One{" "}
                  <mark className="bg-transparent p-0">
                    Marketing{" "}
                    <img
                      src="/shape/line-shape.png"
                      alt="line shape"
                      className="position-absolute hd-line-shape"
                    />
                  </mark>{" "}
                  Platform
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-6 col-xl-5">
              <div className="agency-home-hero__img-box position-relative">
                <img
                  src="/agency-home/hero.png"
                  alt=""
                  className="agency-home-hero__img-box__img w-100"
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-7">
              <div className="agency-home-hero__bottom-content pl-100">
                <p className="agency-home-hero__des mt-40 mb-40">
                  Access your account via your mobile phone View balance,
                  transfer funds, view transactions wherever happy clients all
                  around.
                </p>
                <div className="design-agency-two-hero__btn-box d-flex align-items-center flex-wrap gap-10 mb-80">
                  <a href="" className="btn btn-dat-one clr-white">
                    Download Now
                  </a>
                  <a
                    href="#!"
                    type="button"
                    onClick={() => setOpen(true)}
                    className="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn-dat mt-lg-0 mt-md-0 clr-text"
                  >
                    <i className="fas fa-play"></i> How it Work{" "}
                  </a>
                </div>
              </div>
              <div className="ah-conunter">
                <div className="row">
                  <div className="col-sm-4">
                    <h3 className="ah-conunter-title clr-text">
                      <span className="ah-count">300</span>+
                    </h3>
                    <p className="ah-counter-des">Products Completed</p>
                  </div>
                  <div className="col-sm-4">
                    <h3 className="ah-conunter-title clr-text">
                      <span className="ah-count">1.69</span>M
                    </h3>
                    <p className="ah-counter-des">Earned to worldwide</p>
                  </div>
                  <div className="col-sm-4">
                    <h3 className="ah-conunter-title clr-text">
                      <span className="ah-count">300</span>+
                    </h3>
                    <p className="ah-counter-des">Professional Members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/agency-home/hero_shape.png"
          alt=""
          className="hero_shape position-absolute left-0 top--100"
        />
      </div>
    </>
  );
};

export default AgencyHero;
