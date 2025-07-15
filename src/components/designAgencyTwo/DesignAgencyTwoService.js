import Link from "next/link";

const DesignAgencyTwoService = () => {
  return (
    <>
      <section className="digi-services dat-bg pt-60 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="text-center mb-5">
                <h2 className="clr-text">
                  We have extensive Experience in Our
                  <span className="text-orange">Service List</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6 col-xl-3">
              <div className="digi-service-single bg-white p-4 mb-4 mb-xl-0">
                <img src="/icons/d-1.svg" alt="icon" />
                <h3 className="h5">Email Marketing</h3>
                <p>
                  Quickly productivate resource with premier content.
                  Intrinsicly deploy business platforms for goal.
                </p>
                <Link
                  href="/services"
                  className="read-more-link text-decoration-none"
                >
                  Explore More <i className="fas fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xl-3">
              <div className="digi-service-single bg-white p-4 mb-4 mb-xl-0">
                <img src="/icons/d-2.svg" alt="icon" />
                <h3 className="h5">Paid Advertising</h3>
                <p>
                  Quickly productivate resource with premier content.
                  Intrinsicly deploy business platforms for goal.
                </p>
                <Link
                  href="/services"
                  className="read-more-link text-decoration-none"
                >
                  Explore More <i className="fas fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xl-3">
              <div className="digi-service-single bg-white p-4 mb-4 mb-xl-0">
                <img src="/icons/d-3.svg" alt="icon" />
                <h3 className="h5">Content Marketing</h3>
                <p>
                  Quickly productivate resource with premier content.
                  Intrinsicly deploy business platforms for goal.
                </p>
                <Link
                  href="/services"
                  className="read-more-link text-decoration-none"
                >
                  Explore More <i className="fas fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xl-3">
              <div className="digi-service-single bg-white p-4 mb-4 mb-xl-0">
                <img src="/icons/d-4.svg" alt="icon" />
                <h3 className="h5">Youtube Marketing</h3>
                <p>
                  Quickly productivate resource with premier content.
                  Intrinsicly deploy business platforms for goal.
                </p>
                <Link
                  href="/services"
                  className="read-more-link text-decoration-none"
                >
                  Explore More <i className="fas fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DesignAgencyTwoService;
