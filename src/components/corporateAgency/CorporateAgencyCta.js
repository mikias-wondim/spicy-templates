import { useState } from "react";
import ModalVideo from "react-modal-video";

const CorporateAgencyCta = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="hAP2QF--2Dg"
        onClose={() => setOpen(false)}
      />
      <div className="sections pb-0">
        <div className="container">
          <div className="row g-4">
            {/* First CTA Card */}
            <div className="col-md-6">
              <div className="cta-card cta-card--1">
                <div className="cta-card__content">
                  <h4>High Quality Web & iOS references</h4>
                  <p className="mb-0 text-inherit">
                    Quit the endless search and focus on <br /> what you love
                    designing!
                  </p>
                </div>
                <img
                  src="/cta-card-img-1.png"
                  alt="High Quality Web & iOS references"
                  className="img-fluid"
                />
              </div>
            </div>

            {/* Second CTA Card */}
            <div className="col-md-6">
              <div className="cta-card cta-card--2">
                <div className="cta-card__content">
                  <h4>Powerful search functionality</h4>
                  <p className="mb-0 text-inherit">
                    Quit the endless search and focus on <br /> what you love
                    designing!
                  </p>
                </div>
                <img
                  src="/cta-card-img-2.png"
                  alt="Powerful search functionality"
                  className="img-fluid"
                />
              </div>
            </div>

            {/* CTA Section */}
            <div className="col-12">
              <div className="sections cta-section">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="mb-4">
                      <img
                        src="/cta-subtitle-img.png"
                        alt="Integrated Software"
                        className="img-fluid"
                      />
                    </div>
                    <h2 className="text-white mb-5">
                      Integrated with 20+ Widely Used Software
                    </h2>
                    <div className="d-flex align-items-center gap-4 flex-wrap">
                      <a href="request-demo.html" className="btn btn-primary">
                        Get Started
                      </a>
                      <a
                        href="#!"
                        type="button"
                        onClick={() => setOpen(true)}
                        className="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn"
                      >
                        <i className="fas fa-play"></i> Watch Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CorporateAgencyCta;
