import Link from "next/link";

const CorporateAgencyAchievement = () => {
  return (
    <>
      <div className="achievement-section">
        <div className="achievement-section__heading">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-8 col-xl-7">
                <h2 className="mb-0 heading-text">
                  Quiety enables creators and teams to easily design stunning
                  animated content and interfaces.
                </h2>
              </div>
              <div className="col-lg-4 col-xl-5">
                <div className="text-lg-end">
                  <Link href="/corporate-agency" className="btn btn-primary">
                    About Company
                  </Link>
                </div>
              </div>
              <div className="w-100"></div>
              <div className="col-lg-4 col-xl-5">
                <img src="/avatar.png" alt="image" className="img-fluid" />
              </div>
              <div className="col-lg-8 col-xl-7">
                <p className="mb-0">
                  Our software was purpose built to be interconnected across
                  enterprise governance areas and our clients’ core systems –
                  serving as a single source of truth for your Organizations.
                  Identify high-risk zones for management, and finance.
                  LogicManager facilitates inter-departmental.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4 g-xxl-5 justify-content-center">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="achievement-circle text-center">
                <div className="mb-4">
                  <img
                    src="/achievement-img-1.png"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
                <span className="achievement-circle__title heading-text">
                  #1 Team in the world on Dribbble
                </span>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="achievement-circle text-center">
                <div className="mb-4">
                  <img
                    src="/achievement-img-2.png"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
                <span className="achievement-circle__title heading-text">
                  Top 100 Global Service Providers by Clutch
                </span>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="achievement-circle text-center">
                <div className="mb-4">
                  <img
                    src="/achievement-img-3.png"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
                <span className="achievement-circle__title heading-text">
                  100% Job Success On Upwork
                </span>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="achievement-circle text-center">
                <div className="mb-4">
                  <img
                    src="/achievement-img-4.png"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
                <span className="achievement-circle__title heading-text">
                  #1 Team in the world on Dribbble
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CorporateAgencyAchievement;
