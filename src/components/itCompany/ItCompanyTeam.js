import Link from "next/link";

const ItCompanyTeam = () => {
  return (
    <>
      <div className="it-company-team-area it-company-bg-two ptb-120 position-relative z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <h2 className="it-company-title it-company-color fs-40 fw-600 flh-56 mb-30">
                  Our Expert Team Members
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="it-company-team-item bg-white text-center p-50 rounded-12 mt-20 position-relative">
                <img
                  src="/it_company/team.png"
                  alt=""
                  className="mb-30 img-fluid"
                />
                <h5 className="it-company-color fs-20 fw-700">
                  Janetta R. Raney
                </h5>
                <p className="clr-paragraph flh-24 mb-0">Creative Designer</p>
                <div className="it-company-team-social">
                  <Link
                    href="/it-company"
                    className="it-company-team-social-icon it-company-bg text-white d-inline-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link
                    href="/it-company"
                    className="it-company-team-social-icon it-company-bg-four text-white d-inline-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link
                    href="/it-company"
                    className="it-company-team-social-icon it-company-bg-five text-white d-inline-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="fab fa-dribbble"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="it-company-team-item bg-white text-center p-50 rounded-12 mt-20 position-relative">
                <img
                  src="/it_company/team_2.png"
                  alt=""
                  className="mb-30 img-fluid"
                />
                <h5 className="it-company-color fs-20 fw-700">
                  Jack M. Brittey
                </h5>
                <p className="clr-paragraph flh-24 mb-0">WordPress Developer</p>
                <div className="it-company-team-social">
                  <Link
                    href="/it-company"
                    className="it-company-team-social-icon it-company-bg text-white d-inline-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link
                    href="/it-company"
                    className="it-company-team-social-icon it-company-bg-four text-white d-inline-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link
                    href="/it-company"
                    className="it-company-team-social-icon it-company-bg-five text-white d-inline-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="fab fa-dribbble"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="it-company-team-item bg-white text-center p-50 rounded-12 mt-20 position-relative">
                <img
                  src="/it_company/team_3.png"
                  alt=""
                  className="mb-30 img-fluid"
                />
                <h5 className="it-company-color fs-20 fw-700">
                  Katharine E. Lopez
                </h5>
                <p className="clr-paragraph flh-24 mb-0">Digital Marketer</p>
                <div className="it-company-team-social">
                  <Link
                    href="/it-company"
                    className="it-company-team-social-icon it-company-bg text-white d-inline-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link
                    href="/it-company"
                    className="it-company-team-social-icon it-company-bg-four text-white d-inline-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link
                    href="/it-company"
                    className="it-company-team-social-icon it-company-bg-five text-white d-inline-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="fab fa-dribbble"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="it-company-team-item bg-white text-center p-50 rounded-12 mt-20 position-relative">
                <img
                  src="/it_company/team_4.png"
                  alt=""
                  className="mb-30 img-fluid"
                />
                <h5 className="it-company-color fs-20 fw-700">
                  Bobbie R. Sauer
                </h5>
                <p className="clr-paragraph flh-24 mb-0">Creative Designer</p>
                <div className="it-company-team-social">
                  <Link
                    href="/it-company"
                    className="it-company-team-social-icon it-company-bg text-white d-inline-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link
                    href="/it-company"
                    className="it-company-team-social-icon it-company-bg-four text-white d-inline-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link
                    href="/it-company"
                    className="it-company-team-social-icon it-company-bg-five text-white d-inline-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="fab fa-dribbble"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItCompanyTeam;
