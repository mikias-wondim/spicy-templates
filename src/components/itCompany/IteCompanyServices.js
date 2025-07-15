import Link from "next/link";

const IteCompanyServices = () => {
  return (
    <>
      <div className="it-company-service-area it-company-bg-three ptb-120 position-relative z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-lg-9">
              <div className="text-center">
                <h2 className="it-company-title it-company-color fs-40 fw-600 flh-56 mb-30">
                  Explore All Our Presentation Design Services
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-md-6">
              <div className="it-company-service-item bg-white text-center p-4 ptb-40 rounded-circle mt-20">
                <img src="/it_company/service.svg" alt="" className="mb-30" />
                <h6 className="it-company-color fs-20 fw-600 mb-20">
                  Sales Presentations
                </h6>
                <p className="clr-paragraph flh-24">
                  Collaboratively repurpose synergistic best practices before
                </p>
                <Link
                  href="/it-company"
                  className="clr-paragraph fs-16 fw-700 it-company-hover-color-two"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6">
              <div className="it-company-service-item bg-white text-center p-4 ptb-40 rounded-circle mt-20">
                <img src="/it_company/service_2.svg" alt="" className="mb-30" />
                <h6 className="it-company-color fs-20 fw-600 mb-20">
                  Brand Identities
                </h6>
                <p className="clr-paragraph flh-24">
                  Collaboratively repurpose synergistic best practices before
                </p>
                <Link
                  href="/it-company"
                  className="clr-paragraph fs-16 fw-700 it-company-hover-color-two"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6">
              <div className="it-company-service-item bg-white text-center p-4 ptb-40 rounded-circle mt-20">
                <img src="/it_company/service_3.svg" alt="" className="mb-30" />
                <h6 className="it-company-color fs-20 fw-600 mb-20">
                  UI & UX Design
                </h6>
                <p className="clr-paragraph flh-24">
                  Collaboratively repurpose synergistic best practices before
                </p>
                <Link
                  href="/it-company"
                  className="clr-paragraph fs-16 fw-700 it-company-hover-color-two"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6">
              <div className="it-company-service-item bg-white text-center p-4 ptb-40 rounded-circle mt-20">
                <img src="/it_company/service_4.svg" alt="" className="mb-30" />
                <h6 className="it-company-color fs-20 fw-600 mb-20">
                  Digital Marketing
                </h6>
                <p className="clr-paragraph flh-24">
                  Collaboratively repurpose synergistic best practices before
                </p>
                <Link
                  href="/it-company"
                  className="clr-paragraph fs-16 fw-700 it-company-hover-color-two"
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

export default IteCompanyServices;
