import Link from "next/link";

const AgencyNewsBlog = () => {
  return (
    <>
      <section className="dg-news ah-bg ptb-120 position-relative">
        <div className="container">
          <div className="row justify-content-between align-items-end mb-5">
            <div className="col-lg-6 col-md-6">
              <div>
                <div className="hd-title">
                  <span className="span-arrow">News & Blogs</span>
                  <img src="/arro-right.svg" alt="arrow" />
                </div>
                <h2 className="clr-text">
                  Browse <span className="text-pink-2">our Articles on</span>{" "}
                  Marketing & Growth
                </h2>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="text-md-end mt-3 mt-md-0">
                <Link
                  href="/blog-single"
                  className="btn rounded-pill btn-bg-white red-hover"
                >
                  Browse Articles
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="digi-blog-single border p-3 rounded mb-4 mb-lg-4">
                <div className="digi-blog-thumb">
                  <Link href="/blog-single">
                    <img
                      src="/blog/d-blog-1.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt="Person"
                    />
                  </Link>
                  <span className="d-tag marketing">Marketing</span>
                </div>
                <div className="mt-4 digi-blog-info">
                  <span className="fs-sm text-muted fw-normal">
                    <i className="far fa-calendar me-2"></i>22 Feb, 2022
                  </span>
                  <h4>
                    5 SEO Factors to Consider for your Website to rank Better
                  </h4>
                  <p>
                    Holisticly innovate principle-centered evia eth Eincentivize
                    sticky processes
                  </p>
                  <Link
                    href="/blog-single"
                    className="read-more-link text-decoration-none"
                  >
                    Explore More <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="digi-blog-single border p-3 rounded mb-4 mb-lg-0">
                <div className="digi-blog-thumb">
                  <Link href="/blog-single">
                    <img
                      src="/blog/d-blog-2.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt="Person"
                    />
                  </Link>
                  <span className="d-tag design">Marketing</span>
                </div>
                <div className="mt-4 digi-blog-info">
                  <span className="fs-sm text-muted fw-normal">
                    <i className="far fa-calendar me-2"></i>22 Feb, 2022
                  </span>
                  <h4>
                    5 SEO Factors to Consider for your Website to rank Better
                  </h4>
                  <p>
                    Holisticly innovate principle-centered evia eth Eincentivize
                    sticky processes
                  </p>
                  <Link
                    href="/blog-single"
                    className="read-more-link text-decoration-none"
                  >
                    Explore More <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="digi-blog-list">
                <div className="list-header">
                  <h5>The Top Three Insights</h5>
                </div>
                <div className="digi-blog-posts ah-bg-3">
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <Link href="/blog-single">
                        <span className="fs-sm text-muted">
                          John Carter October 30, 2021
                        </span>
                        <h5 className="h6">
                          5 SEO Factors to Consider for your Website to rank
                          Better
                        </h5>
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link href="/blog-single">
                        <span className="fs-sm text-muted">
                          John Carter October 30, 2021
                        </span>
                        <h5 className="h6">
                          5 SEO Factors to Consider for your Website to rank
                          Better
                        </h5>
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link href="/blog-single">
                        <span className="fs-sm text-muted">
                          John Carter October 30, 2021
                        </span>
                        <h5 className="h6">
                          5 SEO Factors to Consider for your Website to rank
                          Better
                        </h5>
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link href="/blog-single">
                        <span className="fs-sm text-muted">
                          John Carter October 30, 2021
                        </span>
                        <h5 className="h6">
                          5 SEO Factors to Consider for your Website to rank
                          Better
                        </h5>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgencyNewsBlog;
