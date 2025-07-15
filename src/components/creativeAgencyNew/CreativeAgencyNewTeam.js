import Link from "next/link";

const CreativeAgencyNewTeam = () => {
  return (
    <>
      <div className="sections team-section">
        <div className="sections__head">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <h2 className="text-white text-center mb-0">
                  Meet our legends
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="team-card-36">
                <div className="team-card-36__img">
                  <img
                    src="/team-img-1.png"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
                <div className="team-card-36__content">
                  <h6 className="mb-2 text-white text-end">Savannah</h6>
                  <div className="d-flex justify-content-end aling-items-center flex-wrap gap-4">
                    <Link
                      href="/creative-agency-new"
                      className="d-inline-block text-white"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link
                      href="/creative-agency-new"
                      className="d-inline-block text-white"
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link
                      href="/creative-agency-new"
                      className="d-inline-block text-white"
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="team-card-36">
                <div className="team-card-36__img">
                  <img
                    src="/team-img-2.png"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
                <div className="team-card-36__content">
                  <h6 className="mb-2 text-white text-end">Jerome Bell</h6>
                  <div className="d-flex justify-content-end aling-items-center flex-wrap gap-4">
                    <Link
                      href="/creative-agency-new"
                      className="d-inline-block text-white"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link
                      href="/creative-agency-new"
                      className="d-inline-block text-white"
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link
                      href="/creative-agency-new"
                      className="d-inline-block text-white"
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="team-card-36">
                <div className="team-card-36__img">
                  <img
                    src="/team-img-3.png"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
                <div className="team-card-36__content">
                  <h6 className="mb-2 text-white text-end">Albert Flores</h6>
                  <div className="d-flex justify-content-end aling-items-center flex-wrap gap-4">
                    <Link
                      href="/creative-agency-new"
                      className="d-inline-block text-white"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link
                      href="/creative-agency-new"
                      className="d-inline-block text-white"
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link
                      href="/creative-agency-new"
                      className="d-inline-block text-white"
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="team-card-36">
                <div className="team-card-36__img">
                  <img
                    src="/team-img-4.png"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
                <div className="team-card-36__content">
                  <h6 className="mb-2 text-white text-end">Cody Fisher</h6>
                  <div className="d-flex justify-content-end aling-items-center flex-wrap gap-4">
                    <Link
                      href="/creative-agency-new"
                      className="d-inline-block text-white"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link
                      href="/creative-agency-new"
                      className="d-inline-block text-white"
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link
                      href="/creative-agency-new"
                      className="d-inline-block text-white"
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sections__footer">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 text-center">
                <h5 className="text-white mb-4">
                  Are your interest join our team member
                </h5>
                <Link
                  href="/creative-agency-new"
                  className="btn btn-36 fw-medium"
                >
                  Join to us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeAgencyNewTeam;
