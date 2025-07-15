import VideoModal from "@components/helpDeskHome/VideoModal";
import { useState } from "react";

const DigitalMarketingAgencyHero = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <VideoModal isOpen={isOpen} setOpen={setOpen} />
      <div className="ca-agency-hero bgc-background">
        <div className="container">
          <div className="row g-4 gy-5 gx-xl-5">
            <div className="col-xl-11 col-xxl-10">
              <h1 className="ca-agency-hero__heading heading-1 clr-white font-weight-semibold mb-0">
                The Top Mixing & Mastering Engineers{" "}
                <span className="clr-red">Worldwide</span>
              </h1>
            </div>
            <div className="col-md-8">
              <div className="border border-red-clr rounded-4 padding-5 position-relative z-1">
                <div className="rounded-4 overflow-hidden">
                  <img
                    src="/creative-agency/hero-thumbnail.png"
                    alt="image"
                    className="img-fluid w-100 h-100 object-fit-cover"
                  />
                </div>
                <a
                  href="#"
                  type="submit"
                  onClick={() => setOpen(true)}
                  className="popup-youtube link d-grid place-content-center bgc-primary-gradient clr-white :clr-white fs-24 padding-x-20 padding-y-12 position-absolute top-0 end-0 rounded-start-end-4"
                >
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="margin-top-xl-20">
                <div className="d-flex flex-wrap align-items-center gap-4 margin-bottom-8">
                  <div className="flex-shrink-0">
                    <img
                      src="/creative-agency/user-group-sm.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <h4 className="heading-4 mb-0 clr-white font-weight-semibold">
                    40M+
                  </h4>
                </div>
                <p className="mb-0 clr-white">
                  Get more conversions and drive more sales with Anyword’s AI
                  writer that generates and optimizes your copy. Powerful
                  predictive analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalMarketingAgencyHero;
