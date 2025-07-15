import Link from "next/link";

const DigitalAgencyBlog = () => {
  return (
    <>
      <section className="dg-blog-section bg-light-subtle ptb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5">
              <div className="section-title text-center mb-5">
                <span className="text-dg-primary fw-bold">OUR BLOGS</span>
                <h2 className="heading-dg-color mb-0 mt-2 clr-text">
                  Our latest news
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-xl-4">
              <article className="dg-blog-card bg-white rounded-3">
                <div className="thumbnail overflow-hidden rounded-3 mb-30">
                  <Link href="/digital-agency">
                    <img
                      src="/digital-agency/blog-1.jpg"
                      alt="thumbnail"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <Link
                  href="/digital-agency"
                  className="d-inline-block text-primary badge bg-primary-soft"
                >
                  Case Study
                </Link>
                <Link href="/digital-agency">
                  <h5 className="mb-3 mt-3">
                    Continually reintermediate seamless manufactured products.
                  </h5>
                </Link>
                <p className="mb-4">
                  Globally evolve user-centric channels rather than reliable
                  solutions. Globally strategize.
                </p>
                <Link
                  href="/digital-agency"
                  className="read-more-link text-decoration-none"
                >
                  Explore More <i className="fas fa-arrow-right ms-2"></i>
                </Link>
              </article>
            </div>
            <div className="col-xl-4">
              <article className="dg-blog-card bg-white rounded-3">
                <div className="thumbnail overflow-hidden rounded-3 mb-30">
                  <Link href="/digital-agency">
                    <img
                      src="/digital-agency/blog-2.jpg"
                      alt="thumbnail"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <Link
                  href="/digital-agency"
                  className="d-inline-block text-danger badge bg-danger-soft"
                >
                  Digital Marketing
                </Link>
                <Link href="/digital-agency">
                  <h5 className="mb-3 mt-3">
                    5 SEO Factors to Consider for your Website to Rank Better
                  </h5>
                </Link>
                <p className="mb-4">
                  Globally evolve user-centric channels rather than reliable
                  solutions. Globally strategize.
                </p>
                <Link
                  href="/digital-agency"
                  className="read-more-link text-decoration-none"
                >
                  Explore More <i className="fas fa-arrow-right ms-2"></i>
                </Link>
              </article>
            </div>
            <div className="col-xl-4">
              <article className="dg-blog-card bg-white rounded-3">
                <div className="thumbnail overflow-hidden rounded-3 mb-30">
                  <Link href="/digital-agency">
                    <img
                      src="/digital-agency/blog-3.jpg"
                      alt="thumbnail"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <Link
                  href="/digital-agency"
                  className="d-inline-block text-warning badge bg-warning-soft"
                >
                  Business Planning
                </Link>
                <Link href="/digital-agency">
                  <h5 className="mb-3 mt-3">
                    Quickly generate low-risk high-yield deliverables.
                  </h5>
                </Link>
                <p className="mb-4">
                  Globally evolve user-centric channels rather than reliable
                  solutions. Globally strategize.
                </p>
                <Link
                  href="/digital-agency"
                  className="read-more-link text-decoration-none"
                >
                  Explore More <i className="fas fa-arrow-right ms-2"></i>
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyBlog;
