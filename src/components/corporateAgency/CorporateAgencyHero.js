import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const CorporateAgencyHero = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="hAP2QF--2Dg"
        onClose={() => setOpen(false)}
      />
      <div className="hero-35">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <h1 className="text-white">Make Your money for Business</h1>
              <p className="mb-30 text-white">
                Make your work easier with an integrated ecosystem that lets all
                departments work properly together.
              </p>
              <div className="d-flex align-items-center gap-4 flex-wrap">
                <Link href="/request-demo" className="btn btn-primary">
                  Get Started
                </Link>
                <a
                  href="#!"
                  type="button"
                  onClick={() => setOpen(true)}
                  className="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn"
                >
                  <i className="fas fa-play"></i> Watch Demo{" "}
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-35__img">
                <img src="/hero-35-img.png" alt="image" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CorporateAgencyHero;
