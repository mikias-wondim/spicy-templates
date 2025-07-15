import {
  navCompanyLinks,
  navCompanyPage,
  navHomeFour,
  navHomeOne,
  navHomeThree,
  navHomeTwo,
} from "@utils/data";
import Link from "next/link";
import { useEffect, useState } from "react";

const CreativeAgencyTwoNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header className={`ins-header ca-two-header main-header w-100 z-20`}>
        <nav
          className={`navbar navbar-expand-xl navbar-light sticky-header ${
            isScrolled ? "affix" : ""
          }`}
        >
          <div className="container d-flex align-items-center justify-content-lg-between position-relative">
            <a
              href="index.html"
              className="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none"
            >
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
            </a>

            <a
              className="navbar-toggler position-absolute right-0 border-0"
              href="#offcanvasWithBackdrop"
              role="button"
            >
              <i
                className="flaticon-menu"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBackdrop"
                aria-controls="offcanvasWithBackdrop"
              ></i>
            </a>
            <div className="clearfix"></div>
            <div className="collapse navbar-collapse justify-content-end">
              <ul className="nav col-12 col-md-auto justify-content-center main-menu">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Home
                  </a>
                  <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white homepage-list-wrapper">
                    <div className="dropdown-grid rounded-custom width-full homepage-dropdown ">
                      <div className="dropdown-grid-item">
                        <h6 className="drop-heading">Different Home</h6>
                        {navHomeOne.map((navH, i) => (
                          <span key={i + 1}>
                            <Link legacyBehavior href={navH.href}>
                              <a className="dropdown-link">
                                <span className="demo-list bg-primary rounded text-white fw-bold">
                                  {i + 1}
                                </span>
                                <span className="dropdown-info mb-0">
                                  <span className="drop-title">
                                    {navH.title}
                                  </span>
                                  <span>{navH.info}</span>
                                </span>
                              </a>
                            </Link>
                          </span>
                        ))}
                      </div>
                      <div className="dropdown-grid-item radius-right-side bg-light">
                        <h6 className="drop-heading">Different Home</h6>
                        {navHomeTwo.map((navH, i) => (
                          <span key={i + 11}>
                            <Link legacyBehavior href={navH.href}>
                              <a className="dropdown-link">
                                <span className="demo-list bg-primary rounded text-white fw-bold">
                                  {i + 11}
                                </span>
                                <span className="dropdown-info mb-0">
                                  <span className="drop-title">
                                    {navH.title}
                                  </span>
                                  <span>{navH.info}</span>
                                </span>
                              </a>
                            </Link>
                          </span>
                        ))}
                      </div>
                      <div className="dropdown-grid-item radius-right-side bg-light">
                        <h6 className="drop-heading">Different Home</h6>
                        {navHomeThree.map((navH, i) => (
                          <span key={i + 21}>
                            <Link legacyBehavior href={navH.href}>
                              <a className="dropdown-link">
                                <span className="demo-list bg-primary rounded text-white fw-bold">
                                  {i + 21}
                                </span>
                                <span className="dropdown-info mb-0">
                                  <span className="drop-title">
                                    {navH.title}
                                  </span>
                                  <span>{navH.info}</span>
                                </span>
                              </a>
                            </Link>
                          </span>
                        ))}
                      </div>
                      <div className="dropdown-grid-item radius-right-side bg-light">
                        <h6 className="drop-heading">Different Home</h6>
                        {navHomeFour.map((navH, i) => (
                          <span key={i + 31}>
                            <Link legacyBehavior href={navH.href}>
                              <a className="dropdown-link">
                                <span className="demo-list bg-primary rounded text-white fw-bold">
                                  {i + 31}
                                </span>
                                <span className="dropdown-info mb-0">
                                  <span className="drop-title">
                                    {navH.title}
                                  </span>
                                  <span>{navH.info}</span>
                                </span>
                              </a>
                            </Link>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link legacyBehavior href="about-us">
                    <a className="nav-link">About</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="services">
                    <a className="nav-link">Services</a>
                  </Link>
                </li>

                <li>
                  <Link legacyBehavior href="pricing">
                    <a className="nav-link">Pricing</a>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Company
                  </a>
                  <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                    <div className="dropdown-grid rounded-custom width-full">
                      <div className="dropdown-grid-item">
                        <h6 className="drop-heading">Useful Links</h6>
                        {navCompanyLinks.map((navLink, i) => (
                          <div key={i + 1}>
                            <Link legacyBehavior href={navLink.href}>
                              <a className="dropdown-link px-0">
                                <span className="me-2">{navLink.icon}</span>
                                <span className="drop-title mb-0">
                                  {navLink.title}{" "}
                                </span>
                              </a>
                            </Link>
                          </div>
                        ))}
                      </div>
                      <div className="dropdown-grid-item radius-right-side bg-light">
                        <h6 className="drop-heading">Utility Pages</h6>
                        {navCompanyPage.map((navPage, i) => (
                          <div key={i + 1}>
                            <Link legacyBehavior href={navPage.href}>
                              <a className="dropdown-link">
                                <span className="me-2">{navPage.icon}</span>
                                <span className="drop-title mb-0">
                                  {navPage.title}{" "}
                                </span>
                              </a>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
              <a
                type="button"
                onClick={(e) => e.preventDefault()}
                className="btn btn-link p-1 tt-theme-toggle"
              >
                <div
                  className="tt-theme-light"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  data-bs-title="Light"
                >
                  {/* <i className="flaticon-sun-1 fs-lg"></i> */}
                </div>
                <div
                  className="tt-theme-dark"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  data-bs-title="Dark"
                >
                  <i className="flaticon-moon-1 fs-lg"></i>
                </div>
              </a>
            </div>
          </div>
        </nav>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasWithBackdrop"
        >
          <div className="offcanvas-header d-flex align-items-center mt-4">
            <a
              href="index.html"
              className="d-flex align-items-center mb-md-0 text-decoration-none"
            >
              <img
                src="/logo-color.png"
                alt="logo"
                className="img-fluid ps-2"
              />
            </a>
            <button
              type="button"
              className="close-btn text-danger"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="flaticon-cancel"></i>
            </button>
          </div>
          <div className="offcanvas-body">
            <ul className="nav col-12 col-md-auto justify-content-center main-menu">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Home
                </a>
                <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white homepage-list-wrapper">
                  <div className="dropdown-grid rounded-custom width-full homepage-dropdown">
                    <div className="dropdown-grid-item bg-white radius-left-side">
                      <h6 className="drop-heading">Different Home</h6>
                      <a href="index.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          1
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">Saas Company 1</div>
                          <p>
                            It's for <strong>SaaS Software</strong> Company{" "}
                          </p>
                        </div>
                      </a>
                      <a href="index-2.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          2
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">Saas Company 2</div>
                          <p>
                            Modern <strong>Saas agency</strong>
                          </p>
                        </div>
                      </a>
                      <a href="index-3.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          3
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">Desktop App</div>
                          <p>
                            <strong>Web Software</strong> Company
                          </p>
                        </div>
                      </a>
                      <a href="index-4.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          4
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">App Landing</div>
                          <p>
                            App and <strong>Software</strong> Landing{" "}
                          </p>
                        </div>
                      </a>
                      <a href="index-5.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          5
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">Software Application</div>
                          <p>
                            IT solutions and <strong>SaaS Application</strong>
                          </p>
                        </div>
                      </a>
                      <a href="index-6.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          6
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">Startup Agency</div>
                          <p>
                            Different type of <strong>Agency</strong>&lrm;{" "}
                          </p>
                        </div>
                      </a>
                      <a href="index-7.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          7
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">Data Analysis</div>
                          <p>
                            Software & <strong>Data Analysis</strong>&lrm;{" "}
                          </p>
                        </div>
                      </a>
                      <a href="index-8.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          8
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">App Landing Two</div>
                          <p>
                            Software & <strong>Data Analysis</strong>&lrm;{" "}
                          </p>
                        </div>
                      </a>
                      <a href="index-9.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          9
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">IT Solution</div>
                          <p>
                            IT solutions and <strong>SaaS Application</strong>
                          </p>
                        </div>
                      </a>
                      <a href="index-10.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          10
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">Cyber Security</div>
                          <p>
                            Cyber Security <strong>Landing Page</strong>
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="dropdown-grid-item bg-light-subtle">
                      <h6 className="drop-heading">Different Home</h6>
                      <a href="index-11.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          {" "}
                          11{" "}
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">Crypto Currency</div>
                          <p>
                            <strong>Crypto Currency</strong> landing page
                          </p>
                        </div>
                      </a>
                      <a href="index-12.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          {" "}
                          12{" "}
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">Game Solutions</div>
                          <p>
                            <strong>Game Server</strong> landing page
                          </p>
                        </div>
                      </a>
                      <a href="index-13.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          {" "}
                          13{" "}
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">Payment Gateway</div>
                          <p>
                            <strong>Payment Gateway</strong> landing page
                          </p>
                        </div>
                      </a>
                      <a href="index-14.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          {" "}
                          14{" "}
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">Digital Marketing</div>
                          <p>
                            <strong>Digital Marketing</strong> landing page
                          </p>
                        </div>
                      </a>
                      <a href="index-15.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          {" "}
                          15{" "}
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">Conference & Event</div>
                          <p>
                            <strong>Conference & Event</strong> landing
                          </p>
                        </div>
                      </a>
                      <a href="index-16.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          {" "}
                          16{" "}
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">Quiety Insurance</div>
                          <p>
                            <strong>Quiety Insurance</strong> landing
                          </p>
                        </div>
                      </a>
                      <a href="index-17.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          {" "}
                          17{" "}
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">Sass Marketing</div>
                          <p>
                            <strong>Sass Marketing</strong> landing
                          </p>
                        </div>
                      </a>
                      <a href="index-18.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          {" "}
                          18{" "}
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">CRM Home</div>
                          <p>Customer Relationship</p>
                        </div>
                      </a>
                      <a href="index-19.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          {" "}
                          19{" "}
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">Help Desk</div>
                          <p>Help Desk Home</p>
                        </div>
                      </a>
                      <a href="index-20.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          {" "}
                          20{" "}
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">Digital Agency</div>
                          <p>Digital Agency Home</p>
                        </div>
                      </a>
                    </div>
                    <div className="dropdown-grid-item bg-white">
                      <h6 className="drop-heading">Different Home</h6>
                      <a href="index-21.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          {" "}
                          21{" "}
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">Software Company</div>
                          <p>Software Company Home</p>
                        </div>
                      </a>
                      <a href="index-22.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          {" "}
                          22{" "}
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">Creative Agency</div>
                          <p>
                            <strong>Creative Agency</strong> landing
                          </p>
                        </div>
                      </a>
                      <a href="index-23.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          {" "}
                          23{" "}
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">
                            Digital Marketing Agency
                          </div>
                          <p>
                            <strong>Digital Marketing </strong>Agency landing
                          </p>
                        </div>
                      </a>
                      <a href="index-24.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          {" "}
                          24{" "}
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">Design Agency</div>
                          <p>
                            <strong>Design Agency </strong>Home One
                          </p>
                        </div>
                      </a>
                      <a href="index-25.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          {" "}
                          25{" "}
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">Design Agency</div>
                          <p>
                            <strong>Design Agency </strong>Home Two
                          </p>
                        </div>
                      </a>
                      <a href="index-26.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          {" "}
                          26{" "}
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">Agency Home</div>
                          <p>
                            <strong>Agency Home </strong>New
                          </p>
                        </div>
                      </a>
                      <a href="index-27.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          {" "}
                          27{" "}
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">Creative Agency</div>
                          <p>
                            <strong>Creative Agency </strong>Two
                          </p>
                        </div>
                      </a>
                      <a href="index-28.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          {" "}
                          28{" "}
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">Risk Managment</div>
                          <p>
                            <strong>Risk Managment </strong>Home
                          </p>
                        </div>
                      </a>
                      <a href="index-29.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          {" "}
                          29{" "}
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">It Company</div>
                          <p>
                            <strong>It Company </strong>Home
                          </p>
                        </div>
                      </a>
                      <a href="index-30.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          {" "}
                          30{" "}
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">Ai Home</div>
                          <p>
                            <strong>Ai Company </strong>Home
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="dropdown-grid-item bg-light-subtle">
                      <h6 className="drop-heading">Different Home</h6>
                      <a href="index-31.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          {" "}
                          31{" "}
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">Ai Content Generator</div>
                          <p>
                            <strong>Saas </strong>Content Generator
                          </p>
                        </div>
                      </a>
                      <a href="index-32.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          {" "}
                          32{" "}
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">
                            Ai SAAS Content Generator
                          </div>
                          <p>
                            <strong>Ai SAAS Content </strong>For Marketing
                          </p>
                        </div>
                      </a>
                      <a href="index-33.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          {" "}
                          33{" "}
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">
                            Ai Image Generation SAAS
                          </div>
                          <p>
                            <strong>Ai image generation </strong>New
                          </p>
                        </div>
                      </a>
                      <a href="index-34.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          {" "}
                          34{" "}
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">Payment Gateway</div>
                          <p>
                            <strong>Payment Gateway </strong>New
                          </p>
                        </div>
                      </a>
                      <a href="index-35.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          {" "}
                          35{" "}
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">Corporate Agency</div>
                          <p>
                            <strong>Agency Website </strong>New
                          </p>
                        </div>
                      </a>
                      <a href="index-36.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          {" "}
                          36{" "}
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">Creative Agency</div>
                          <p>
                            <strong>Agency Website </strong>New
                          </p>
                        </div>
                      </a>
                      <a href="index-37.html" className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          {" "}
                          37{" "}
                        </span>
                        <div className="dropdown-info">
                          <div className="drop-title">Marketplace Agency</div>
                          <p>
                            <strong>Marketplace Website </strong>New
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>{" "}
              </li>
              <li>
                <a href="services.html" className="nav-link">
                  Services
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                  <div className="dropdown-grid rounded-custom width-full-3">
                    <div className="dropdown-grid-item bg-white radius-left-side">
                      <h6 className="drop-heading">Reusable Section</h6>
                      <a href="header.html" className="dropdown-link">
                        <span className="me-2">
                          <i className="flaticon-menu"></i>
                        </span>
                        <div className="drop-title">Navigations</div>
                      </a>
                      <a href="hero-sections.html" className="dropdown-link">
                        <span className="me-2">
                          <i className="flaticon-layer"></i>
                        </span>
                        <div className="drop-title">Hero Sections</div>
                      </a>
                      <a href="testimonials.html" className="dropdown-link">
                        <span className="me-2">
                          <i className="flaticon-phone-book"></i>
                        </span>
                        <div className="drop-title">Testimonials</div>
                      </a>
                      <a href="call-to-action.html" className="dropdown-link">
                        <span className="me-2">
                          <i className="flaticon-flash"></i>
                        </span>
                        <div className="drop-title">Call to Action</div>
                      </a>
                      <a href="tab-style.html" className="dropdown-link">
                        <span className="me-2">
                          <i className="flaticon-settings"></i>
                        </span>
                        <div className="drop-title">Tab Style</div>
                      </a>
                      <a href="services-style.html" className="dropdown-link">
                        <span className="me-2">
                          <i className="flaticon-graduation-cap"></i>
                        </span>
                        <div className="drop-title">Services Style</div>
                      </a>
                      <a href="work-process.html" className="dropdown-link">
                        <span className="me-2">
                          <i className="flaticon-folder"></i>
                        </span>
                        <div className="drop-title">Work Process</div>
                      </a>
                    </div>
                    <div className="dropdown-grid-item bg-white">
                      <h6 className="drop-heading">Reusable Section</h6>
                      <a href="pricing-style.html" className="dropdown-link">
                        <span className="me-2">
                          <i className="flaticon-clipboard"></i>
                        </span>
                        <div className="drop-title">Pricing Style</div>
                      </a>
                      <a href="accordions.html" className="dropdown-link">
                        <span className="me-2">
                          <i className="flaticon-settings"></i>
                        </span>
                        <div className="drop-title">Accordions</div>
                      </a>
                      <a href="features.html" className="dropdown-link">
                        <span className="me-2">
                          <i className="flaticon-vector"></i>
                        </span>
                        <div className="drop-title">Features</div>
                      </a>
                      <a href="footers.html" className="dropdown-link">
                        <span className="me-2">
                          <i className="flaticon-link"></i>
                        </span>
                        <div className="drop-title">Footers</div>
                      </a>
                      <a href="team.html" className="dropdown-link">
                        <span className="me-2">
                          <i className="flaticon-avatar"></i>
                        </span>
                        <div className="drop-title">Our Team</div>
                      </a>
                      <a
                        href="integration-style.html"
                        className="dropdown-link"
                      >
                        <span className="me-2">
                          <i className="flaticon-paper-plane-1"></i>
                        </span>
                        <div className="drop-title">Integration Style</div>
                      </a>
                      <a href="blog-style.html" className="dropdown-link">
                        <span className="me-2">
                          <i className="flaticon-pen-tool"></i>
                        </span>
                        <div className="drop-title">Blog Style</div>
                      </a>
                    </div>
                    <div className="dropdown-grid-item last-item bg-light-subtle radius-right-side">
                      <a href="#">
                        <img
                          src="/feature-img3.jpg"
                          alt="add"
                          className="img-fluid rounded-custom"
                        />
                      </a>
                    </div>
                  </div>
                </div>{" "}
              </li>
              <li>
                <a href="pricing.html" className="nav-link">
                  Pricing
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Company
                </a>
                <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                  <div className="dropdown-grid rounded-custom width-full">
                    <div className="dropdown-grid-item bg-white radius-left-side">
                      <h6 className="drop-heading">Useful Links</h6>
                      <a href="about-us.html" className="dropdown-link px-0">
                        <span className="me-2">
                          <i className="flaticon-fingerprint"></i>
                        </span>
                        <div className="drop-title">About Us</div>
                      </a>
                      <a href="contact-us.html" className="dropdown-link px-0">
                        <span className="me-2">
                          <i className="flaticon-phone-book"></i>
                        </span>
                        <div className="drop-title">Contact Us</div>
                      </a>
                      <a href="services.html" className="dropdown-link">
                        <span className="me-2">
                          <i className="flaticon-pie-chart"></i>
                        </span>
                        <div className="drop-title">Services</div>
                      </a>
                      <a
                        href="service-single.html"
                        className="dropdown-link px-0"
                      >
                        <span className="me-2">
                          <i className="flaticon-server-storage"></i>
                        </span>
                        <div className="drop-title">Services Single</div>
                      </a>
                      <a href="blog.html" className="dropdown-link">
                        <span className="me-2">
                          <i className="flaticon-clipboard"></i>
                        </span>
                        <div className="drop-title">Our Latest News</div>
                      </a>
                      <a href="blog-single.html" className="dropdown-link">
                        <span className="me-2">
                          <i className="flaticon-menu"></i>
                        </span>
                        <div className="drop-title">News Details</div>
                      </a>
                      <a href="career.html" className="dropdown-link px-0">
                        <span className="me-2">
                          <i className="flaticon-graduate"></i>
                        </span>
                        <div className="drop-title">Career</div>
                      </a>
                      <a
                        href="career-single.html"
                        className="dropdown-link px-0"
                      >
                        <span className="me-2">
                          <i className="flaticon-pen-tool"></i>
                        </span>
                        <div className="drop-title">Career Single</div>
                      </a>
                      <a href="integrations.html" className="dropdown-link">
                        <span className="me-2">
                          <i className="flaticon-paper-plane-1"></i>
                        </span>
                        <div className="drop-title">Integrations</div>
                      </a>
                      <a
                        href="integration-single.html"
                        className="dropdown-link px-0"
                      >
                        <span className="me-2">
                          <i className="flaticon-shopping-list"></i>
                        </span>
                        <div className="drop-title">Integration Single</div>
                      </a>
                    </div>
                    <div className="dropdown-grid-item radius-right-side bg-light-subtle">
                      <h6 className="drop-heading">Utility Pages</h6>
                      <a href="style-guide.html" className="dropdown-link">
                        <span className="me-2">
                          <i className="flaticon-web-programming"></i>
                        </span>
                        <div className="drop-title">Style Guide</div>
                      </a>
                      <a href="support.html" className="dropdown-link">
                        <span className="me-2">
                          <i className="flaticon-headset"></i>
                        </span>
                        <div className="drop-title">Help Center</div>
                      </a>
                      <a href="support-single.html" className="dropdown-link">
                        <span className="me-2">
                          <i className="flaticon-envelope"></i>
                        </span>
                        <div className="drop-title">Help Details</div>
                      </a>
                      <a href="team.html" className="dropdown-link">
                        <span className="me-2">
                          <i className="flaticon-avatar"></i>
                        </span>
                        <div className="drop-title">Our Team</div>
                      </a>
                      <a href="request-demo.html" className="dropdown-link">
                        <span className="me-2">
                          <i className="flaticon-vector"></i>
                        </span>
                        <div className="drop-title">Request for Demo</div>
                      </a>
                      <a href="login.html" className="dropdown-link">
                        <span className="me-2">
                          <i className="flaticon-download"></i>
                        </span>
                        <div className="drop-title">User Login</div>
                      </a>
                      <a href="register.html" className="dropdown-link">
                        <span className="me-2">
                          <i className="flaticon-logout"></i>
                        </span>
                        <div className="drop-title">User SignUp</div>
                      </a>
                      <a href="password-reset.html" className="dropdown-link">
                        <span className="me-2">
                          <i className="flaticon-garbage"></i>
                        </span>
                        <div className="drop-title">Recovery Account</div>
                      </a>
                      <a href="404.html" className="dropdown-link">
                        <span className="me-2">
                          <i className="flaticon-web-programming"></i>
                        </span>
                        <div className="drop-title">404 Page</div>
                      </a>
                      <a href="coming-soon.html" className="dropdown-link">
                        <span className="me-2">
                          <i className="flaticon-reload"></i>
                        </span>
                        <div className="drop-title">Coming Soon</div>
                      </a>
                    </div>
                  </div>
                </div>{" "}
              </li>
            </ul>
            <div className="action-btns mt-4 ps-3">
              <a href="login.html" className="btn btn-outline-primary me-2">
                Sign In
              </a>
              <a href="request-demo.html" className="btn btn-primary">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default CreativeAgencyTwoNavbar;
