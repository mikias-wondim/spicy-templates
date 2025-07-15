import Link from "next/link";

const CrmFooter = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("Form submission prevented");
  };
  return (
    <>
      <footer className="footer-section">
        <div
          className="footer-top  bg-gradient text-white ptb-120"
          style={{
            background: "url('/page-header-bg.svg') no-repeat bottom right",
          }}
        >
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-8 col-lg-4 mb-md-4 mb-lg-0">
                <div className="footer-single-col">
                  <div className="footer-single-col mb-4">
                    <img
                      src="/logo-white.png"
                      alt="logo"
                      className="img-fluid logo-white"
                    />
                    <img
                      src="/logo-color.png"
                      alt="logo"
                      className="img-fluid logo-color"
                    />
                  </div>
                  <p>
                    Our latest news, articles, and resources, we will sent to
                    your inbox weekly.
                  </p>

                  <form
                    className="newsletter-form position-relative d-block d-lg-flex d-md-flex"
                    onSubmit={handleSubmit}
                  >
                    <input
                      type="text"
                      className="input-newsletter form-control me-2"
                      placeholder="Enter your email"
                      name="email"
                      required
                      autoComplete="off"
                    />
                    <input
                      type="submit"
                      value="Subscribe"
                      data-wait="Please wait..."
                      className="btn btn-primary mt-3 mt-lg-0 mt-md-0"
                    />
                  </form>
                  <div className="ratting-wrap mt-4">
                    <h6 className="mb-0">10/10 Overall rating</h6>
                    <ul className="list-unstyled rating-list list-inline mb-0">
                      <li className="list-inline-item">
                        <i className="fas fa-star text-warning"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fas fa-star text-warning"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fas fa-star text-warning"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fas fa-star text-warning"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fas fa-star text-warning"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-7 mt-4 mt-md-0 mt-lg-0">
                <div className="row">
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3>Primary Pages</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        <li>
                          <Link
                            href="/crm-home"
                            className="text-decoration-none"
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/about-us"
                            className="text-decoration-none"
                          >
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services"
                            className="text-decoration-none"
                          >
                            Services
                          </Link>
                        </li>
                        <li>
                          <Link href="/career" className="text-decoration-none">
                            Career
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/integrations"
                            className="text-decoration-none"
                          >
                            Integrations
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/integration-single"
                            className="text-decoration-none"
                          >
                            Integration Single
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3>Pages</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        <li>
                          <Link
                            href="/pricing"
                            className="text-decoration-none"
                          >
                            Pricing
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog" className="text-decoration-none">
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/blog-single"
                            className="text-decoration-none"
                          >
                            Blog Details
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/contact-us"
                            className="text-decoration-none"
                          >
                            Contact
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/career-single"
                            className="text-decoration-none"
                          >
                            Career Single
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/service-single"
                            className="text-decoration-none"
                          >
                            Services Single
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3>Template</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        <li>
                          <Link
                            href="/contact-us"
                            className="text-decoration-none"
                          >
                            Contact
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/support"
                            className="text-decoration-none"
                          >
                            Support
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/support-single"
                            className="text-decoration-none"
                          >
                            Support Single
                          </Link>
                        </li>
                        <li>
                          <Link href="/team" className="text-decoration-none">
                            Our Team
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/client-review"
                            className="text-decoration-none"
                          >
                            Customer Review
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/career-single"
                            className="text-decoration-none"
                          >
                            Career Single
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom  bg-gradient text-white py-4">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-7 col-lg-7">
                <div className="copyright-text">
                  <p className="mb-lg-0 mb-md-0">
                    &copy; 2021 Quiety Rights Reserved. Designed By{" "}
                    <Link
                      href="https://themetags.com/"
                      className="text-decoration-none"
                    >
                      ThemeTags
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="footer-single-col text-start text-lg-end text-md-end">
                  <ul className="list-unstyled list-inline footer-social-list mb-0">
                    <li className="list-inline-item">
                      <Link href="crm-home">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="crm-home">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="crm-home">
                        <i className="fab fa-dribbble"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="crm-home">
                        <i className="fab fa-github"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CrmFooter;
