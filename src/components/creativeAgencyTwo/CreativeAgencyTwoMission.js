import Link from "next/link";

const CreativeAgencyTwoMission = () => {
  return (
    <>
      <div className="ca-two-mission-area pt-60 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <img
                src="/creative-agency-2/mission.png"
                alt=""
                className="ca-two-mission-img img-fluid"
              />
            </div>
            <div className="col-xl-6">
              <div className="pl-15">
                <h6 className="ca-two-subtitle ca-two-body-clr-two d-flex align-items-center">
                  <span className="ca-two-bg-two"></span>Our Mission & Vision
                </h6>
                <h2 className="ca-two-title ca-two-body-clr-two fs-36 fw-500 flh-48 pr-20 mt-20">
                  We’ve worked with clients who are pivoting or experiencing.
                </h2>
                <p className="ca-two-body-clr ff-poppins fw-500 flh-24 mb-0 mt-4">
                  Our Working Process.
                </p>
                <div className="ca-two-mission-items mt-20">
                  <div className="row g-0 align-items-center">
                    <div className="col-lg-4">
                      <div className="ca-two-mission-item ca-two-bg-three ptb-20 pl-15 pr-15 mt-20 rounded-16 ca-two-border-top">
                        <h6 className="fs-16 fw-500 ca-two-body-clr-two text-uppercase ch-mb-10">
                          Audience
                        </h6>
                        <p className="ca-two-body-clr fw-500 fs-14 flh-18 mb-0">
                          Creative design is the art of turning into{" "}
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="ca-two-mission-item bg-black ptb-20 pl-15 pr-15 mt-20 rounded-16">
                        <h6 className="fs-16 fw-500 text-white text-uppercase ch-mb-10">
                          Plan & Sketch
                        </h6>
                        <p className="text-white fw-500 fs-14 flh-18 mb-0">
                          Creative design is the art of turning into{" "}
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="ca-two-mission-item ca-two-bg-three ptb-20 pl-15 pr-15 mt-20 rounded-16 ca-two-border-top">
                        <h6 className="fs-16 fw-500 ca-two-body-clr-two text-uppercase ch-mb-10">
                          Timely Complete
                        </h6>
                        <p className="ca-two-body-clr fw-500 fs-14 flh-18 mb-0">
                          Creative design is the art of turning into{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  href="/services"
                  className="btn dg-outline-btn ca-two-body-clr ca-two-bg-hover-two mt-50"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeAgencyTwoMission;
