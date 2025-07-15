import Link from "next/link";

const CreativeAgencyNewService = () => {
  return (
    <>
      <div className="sections service-section-36">
        <div className="sections__head">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-6 col-xxl-5">
                <h1 className="text-center text-white mb-0">
                  Perfect digital agency for your Business
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="service-card-36">
                <div className="mb-30">
                  <img
                    src="/icon-service-card-1.png"
                    alt="Website Development"
                    className="img-fluid"
                  />
                </div>
                <h5 className="fw-medium text-white mb-3">
                  Website Development
                </h5>
                <p className="mb-30 text-white text-opacity-50">
                  Our branding design service transforms your vision into a
                  compelling visual identity.
                </p>
                <Link
                  href="/creative-agency-new"
                  className="btn btn-link text-white p-0"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="service-card-36">
                <div className="mb-30">
                  <img
                    src="/icon-service-card-2.png"
                    alt="Marketing Plans"
                    className="img-fluid"
                  />
                </div>
                <h5 className="fw-medium text-white mb-3">Marketing Plans</h5>
                <p className="mb-30 text-white text-opacity-50">
                  Our branding design service transforms your vision into a
                  compelling visual identity.
                </p>
                <Link
                  href="/creative-agency-new"
                  className="btn btn-link text-white p-0"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="service-card-36">
                <div className="mb-30">
                  <img
                    src="/icon-service-card-3.png"
                    alt="Data Security"
                    className="img-fluid"
                  />
                </div>
                <h5 className="fw-medium text-white mb-3">Data Security</h5>
                <p className="mb-30 text-white text-opacity-50">
                  Our branding design service transforms your vision into a
                  compelling visual identity.
                </p>
                <Link
                  href="/creative-agency-new"
                  className="btn btn-link text-white p-0"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="service-card-36">
                <div className="mb-30">
                  <img
                    src="/icon-service-card-4.png"
                    alt="Cloud Hosting"
                    className="img-fluid"
                  />
                </div>
                <h5 className="fw-medium text-white mb-3">Cloud Hosting</h5>
                <p className="mb-30 text-white text-opacity-50">
                  Our branding design service transforms your vision into a
                  compelling visual identity.
                </p>
                <Link
                  href="/creative-agency-new"
                  className="btn btn-link text-white p-0"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeAgencyNewService;
