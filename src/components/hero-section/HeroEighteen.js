import Link from "next/link";

const HeroEighteen = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section
        className="crm-hero ptb-120 position-relative overflow-hidden"
        style={{ backgroundImage: "url('/shape/crm-hero-bg.png')" }}
      >
        <img
          src="/crm/slack.png"
          alt="slack"
          className="position-absolute slack-thumb"
        />
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="crm-hero-content position-relative z-1">
                <img
                  src="/shape/arrow-lg-red.png"
                  alt="arrow"
                  className="position-absolute arrow-lg-red z--1"
                />
                <h4 className="crm-subtitle fw-semibold">
                  Build Everlasting
                  <img
                    src="/shape/arrow-red.png"
                    alt="arrow"
                    className="ms-2"
                  />
                </h4>
                <h1 className="display-2 mb-0">
                  Customer{" "}
                  <span className="d-inline-block d-lg-block">
                    Relationship
                  </span>
                  Management
                </h1>

                <div className="crm-hero-bottom mt-60">
                  <p className="text-white lead">
                    30 Day Free Trial <span className="dot"></span> No Credit
                    Card Required
                  </p>
                  <form
                    onSubmit={handleSubmit}
                    className="crm-hero-form d-flex align-items-center"
                  >
                    <input type="email" placeholder="Enter Your Email" />
                    <button type="submit" className="crm-submit-btn">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5">
              <div className="crm-hero-img mt-60 mt-lg-0">
                <img
                  src="/crm/hero-img.png"
                  alt="not found"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="crm-header-social d-none d-xl-flex align-items-center position-absolute z-5">
          <span className="title">Get In Touch</span>
          <ul className="social-list ms-3 list-unstyled p-0 m-0">
            <li>
              <Link href="/crm-home">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link href="/crm-home">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link href="/crm-home">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </li>
            <li>
              <Link href="/crm-home">
                <i className="fab fa-youtube"></i>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default HeroEighteen;
