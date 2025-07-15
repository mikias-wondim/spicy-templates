import Link from "next/link";
import { useEffect, useState } from "react";

const RiskManagmentFooter = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <div className="rm-footer-area">
          <div className="rm-footer-top position-relative z-1">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-xl-3 col-lg-5">
                  <div className="footer-single-col">
                    <img src="/risk_managment/logo.png" alt="" />
                    <p className="text-white flh-24 mt-20 mb-30">
                      Interactively disseminate client-based functionalities and
                      resource-leveeing Competently network equity invested
                      web-readiness We take step wise for your We helping to
                      client with our talented expert.
                    </p>
                    <ul className="list-unstyled list-inline footer-social-list d-flex mb-0">
                      <li className="list-inline-item">
                        <Link
                          href="/risk-managment"
                          className="bgc-white risk-color"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          href="/risk-managment"
                          className="bgc-white risk-color"
                        >
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          href="/risk-managment"
                          className="bgc-white risk-color"
                        >
                          <i className="fab fa-dribbble"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          href="/risk-managment"
                          className="bgc-white risk-color"
                        >
                          <i className="fab fa-github"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-5">
                  <div className="footer-single-col pl-40">
                    <h3 className="text-white">Pages</h3>
                    <ul className="list-unstyled footer-nav-list mb-lg-0">
                      <li>
                        <Link
                          href="/risk-managment"
                          className="text-decoration-none"
                        >
                          Pricing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/risk-managment"
                          className="text-decoration-none"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/risk-managment"
                          className="text-decoration-none"
                        >
                          Blog Details
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/risk-managment"
                          className="text-decoration-none"
                        >
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/risk-managment"
                          className="text-decoration-none"
                        >
                          Career Single
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/risk-managment"
                          className="text-decoration-none"
                        >
                          Services Single
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-5">
                  <div className="footer-single-col pr-20">
                    <h3 className="text-white">Contact</h3>
                    <ul className="list-unstyled footer-nav-list mb-lg-0">
                      <li>
                        <Link
                          href="/risk-managment"
                          className="text-decoration-none d-flex align-items-center gap-4"
                        >
                          <svg
                            width="20"
                            height="18"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.9395 0C16.2805 0 17.5705 0.53 18.5195 1.481C19.4695 2.43 20.0005 3.71 20.0005 5.05V12.95C20.0005 15.74 17.7305 18 14.9395 18H5.06049C2.26949 18 0.000488281 15.74 0.000488281 12.95V5.05C0.000488281 2.26 2.25949 0 5.06049 0H14.9395ZM16.0705 5.2C15.8605 5.189 15.6605 5.26 15.5095 5.4L11.0005 9C10.4205 9.481 9.58949 9.481 9.00049 9L4.50049 5.4C4.18949 5.17 3.75949 5.2 3.50049 5.47C3.23049 5.74 3.20049 6.17 3.42949 6.47L3.56049 6.6L8.11049 10.15C8.67049 10.59 9.34949 10.83 10.0605 10.83C10.7695 10.83 11.4605 10.59 12.0195 10.15L16.5305 6.54L16.6105 6.46C16.8495 6.17 16.8495 5.75 16.5995 5.46C16.4605 5.311 16.2695 5.22 16.0705 5.2Z"
                              fill="#D7D7D7"
                            ></path>
                          </svg>
                          hello@themetags.com
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/risk-managment"
                          className="text-decoration-none d-flex align-items-center gap-4"
                        >
                          <svg
                            width="20"
                            height="21"
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.1905 12.7301C14.7439 12.6218 14.2939 12.901 14.1881 13.3485C14.0814 13.7959 14.3589 14.2451 14.8064 14.3509C17.3946 14.9651 18.333 15.8734 18.333 16.3351C18.333 17.3309 15.0097 18.835 9.99981 18.835C4.99073 18.835 1.66665 17.3309 1.66665 16.3351C1.66665 15.8734 2.60581 14.9651 5.1924 14.3509C5.64071 14.2451 5.91739 13.7959 5.81071 13.3485C5.70489 12.901 5.2549 12.6218 4.80823 12.7301C1.70747 13.4651 0 14.7451 0 16.3351C0 19.07 5.03159 20.5017 9.99981 20.5017C14.9689 20.5017 19.9996 19.07 19.9996 16.3351C19.9996 14.7451 18.2922 13.4651 15.1905 12.7301Z"
                              fill="#D7D7D7"
                            ></path>
                            <path
                              d="M10.0013 7.16905C10.4613 7.16905 10.8346 6.79574 10.8346 6.33575C10.8346 5.87575 10.4613 5.50244 10.0013 5.50244C9.54128 5.50244 9.16797 5.87575 9.16797 6.33575C9.16797 6.79574 9.54128 7.16905 10.0013 7.16905Z"
                              fill="#D7D7D7"
                            ></path>
                            <path
                              d="M8.91603 16.0292L9.25521 16.7075C9.39688 16.99 9.6852 17.1683 10.001 17.1683C10.3168 17.1683 10.6052 16.99 10.7468 16.7075L11.4651 15.2709C12.3393 13.5217 13.4176 11.8276 14.4601 10.1893L14.9351 9.44179C15.5234 8.5118 15.8342 7.43764 15.8342 6.33517C15.8342 4.6752 15.1234 3.08855 13.8843 1.98193C12.646 0.876128 10.9802 0.346177 9.31939 0.541173C6.72608 0.836167 4.58448 2.92445 4.2253 5.50608C4.01281 7.03605 4.3953 8.5552 5.3011 9.78518C6.71444 11.7001 7.81773 13.8309 8.91603 16.0292ZM10.001 3.83525C11.3793 3.83525 12.501 4.95691 12.501 6.3352C12.501 7.7135 11.3793 8.83516 10.001 8.83516C8.62272 8.83516 7.50106 7.7135 7.50106 6.3352C7.50106 4.95691 8.62272 3.83525 10.001 3.83525Z"
                              fill="#D7D7D7"
                            ></path>
                          </svg>
                          123, Western Road, MelbourneNew York City, USA
                        </Link>
                      </li>
                      <li className="mt-30">
                        <Link href="/risk-managment" className="">
                          View Google Map
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-5">
                  <div className="footer-single-col">
                    <h3 className="text-white">Newsletter</h3>
                    <p className="text-white flh-24">
                      Sign up for our latest news &amp; articles. We won’t give
                      you spam mails.
                    </p>
                    <form className="ca-two-newsletter-form mt-40 position-relative">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your email"
                        name="email"
                        required=""
                        autoComplete="off"
                      />
                      <button className="btn"></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rm-footer-bottom text-center ptb-20">
            <p className="risk-color fs-16 ff-risk-pri flh-24 mb-0">
              Copyright @2023 All Rights Reserved by
              <Link className="risk-gd-text fw-700" href="/risk-managment">
                ThemeTags
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default RiskManagmentFooter;
