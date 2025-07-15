import VideoModal from "@components/helpDeskHome/VideoModal";
import { useState } from "react";

const CreativeAgencyOneHero = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <VideoModal setOpen={setOpen} isOpen={isOpen} />
      <div className="ca-hero bgc-primary">
        <div className="container">
          <div className="row gy-5 gy-lg-0 align-items-center">
            <div className="col-lg-6 col-xl-6 col-xxl-5">
              <h1 className="heading-2 font-weight-bold clr-white margin-bottom-8">
                We Craft Digital Experience
              </h1>
              <p className="fs-18 clr-white margin-bottom-10 font-weight-medium">
                Make your work easier with an integrated ecosystem that lets all
                departments work properly together.
              </p>
              <div className="d-flex gap-8 flex-wrap">
                <a
                  href="#"
                  className="link d-inline-flex rounded-pill bgc-white text-center font-weight-bold padding-y-5 padding-x-12 clr-text :clr-text flex-shrink-0 lh-1"
                >
                  Get Started
                </a>
                <span
                  onClick={() => setOpen(true)}
                  className="link d-inline-flex align-items-center gap-4 popup-youtube"
                >
                  <span className="d-grid place-content-center width-14 height-14 rounded-circle bgc-tertiary clr-text flex-shrink-0">
                    <i className="fas fa-play"></i>
                  </span>
                  <span className="flex-grow-1 clr-white font-weight-semibold">
                    How It Work
                  </span>
                </span>
                <VideoModal />
              </div>
              <div className="follow-nav margin-top-10 margin-top-xxl-0">
                <div className="d-flex gap-4 align-items-center">
                  <div className="follow-nav__text font-weight-bold clr-white">
                    Follow Now
                  </div>
                  <div className="follow-nav__dash"></div>
                </div>
                <ul className="list list-row gap-4">
                  <li>
                    <a href="#" className="link clr-white :clr-white">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link clr-white :clr-white">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link clr-white :clr-white">
                      <i className="fas fa-basketball-ball"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="link clr-white :clr-white">
                      <i className="fab fa-behance"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-8 col-lg-4 col-xl-4 col-xxl-5">
              <div className="text-center">
                <img
                  src="/creative-agency/agency-hero-img.png"
                  alt="image"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-4 col-lg-2">
              <div className="margin-bottom-6 text-center text-xl-end">
                <img
                  src="/creative-agency/user-group.png"
                  alt="image"
                  className="img-fluid"
                />
              </div>
              <p className="margin-bottom-10 margin-bottom-xxl-25 text-center text-xl-end fs-20 clr-white font-weight-semibold lh-15">
                1000+ worldwide trust clients
              </p>
              <div className="margin-bottom-6 text-center text-xl-end">
                <img
                  src="/creative-agency/user-img.png"
                  alt="image"
                  className="img-fluid"
                />
              </div>
              <p className="mb-0 text-center text-xl-end fs-20 clr-white font-weight-semibold lh-15">
                Jone Smith Deo
              </p>
              <span className="d-block text-center text-xl-end clr-white font-weight-medium">
                Founder & CEO
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeAgencyOneHero;
