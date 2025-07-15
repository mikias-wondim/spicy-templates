import Link from "next/link";

const CreativeAgencyNewSteps = () => {
  return (
    <>
      <div className="sections pb-0">
        <div className="sections__head">
          <div className="container">
            <div className="row g-4 justify-content-between align-items-center">
              <div className="col-md-6">
                <h2 className="mb-4 display-5 fw-bold about-title">
                  Your dev environment everywhere.
                </h2>
                <Link href="/creative-agency-new" className="btn btn-36">
                  Get Started
                </Link>
              </div>
              <div className="col-md-6">
                <div className="mb-30 position-relative">
                  <img
                    src="/video-36.png"
                    alt="Video Thumbnail"
                    className="img-fluid"
                  />
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <a
                      href="http://www.youtube.com/watch?v=hAP2QF--2Dg"
                      className="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn"
                    >
                      <i className="fas fa-play"></i>
                    </a>
                  </div>
                </div>
                <p className="mb-0 fw-medium">
                  Globally expedite sticky platforms whereas end-to-end vortals.
                  Energistically synergize emerging.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 step-card-36 shadow">
                <div className="card-body">
                  <h2 className="display-3 step-card-36__title">01</h2>
                  <h5 className="about-title">
                    Expertise and Innovation Business
                  </h5>
                  <p className="mb-0">
                    A creative agency brings a wealth of expertise and
                    innovative solutions.
                  </p>
                </div>
                <div className="card-footer">
                  <img
                    src="/step-card-img-1.png"
                    alt="Expertise and Innovation"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 step-card-36 shadow">
                <div className="card-body">
                  <h2 className="display-3 step-card-36__title">02</h2>
                  <h5 className="about-title">Holistic Approach</h5>
                  <p className="mb-0">
                    Creative agencies provide a holistic approach to your
                    brand's needs. From branding and advertising.
                  </p>
                </div>
                <div className="card-footer">
                  <img
                    src="/step-card-img-2.png"
                    alt="Holistic Approach"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-4">
              <div className="card h-100 step-card-36 shadow">
                <div className="card-body">
                  <h2 className="display-3 step-card-36__title">03</h2>
                  <h5 className="about-title">
                    Start with a template or from scratch
                  </h5>
                  <p className="mb-0">
                    A creative agency brings a wealth of expertise and
                    innovative solutions.
                  </p>
                </div>
                <div className="card-footer">
                  <img
                    src="/step-card-img-3.png"
                    alt="Templates or Scratch"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeAgencyNewSteps;
