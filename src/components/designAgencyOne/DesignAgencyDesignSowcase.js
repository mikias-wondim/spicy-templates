import Link from "next/link";

const DesignAgencyDesignSowcase = () => {
  return (
    <>
      <div className="section-space bg-design-agency-about position-relative">
        <img
          src="/design-agency/d_show_shape.png"
          alt=""
          className="position-absolute shape_one"
        />
        <img
          src="/design-agency/d_show_shape_2.png"
          alt=""
          className="position-absolute shape_two"
        />
        <img
          src="/design-agency/d_show_shape_3.png"
          alt=""
          className="position-absolute shape_three"
        />
        <img
          src="/design-agency/d_show_shape_4.png"
          alt=""
          className="position-absolute shape_four"
        />
        <div className="section-space--sm-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <h4 className="heading-4 text-center clr-text mb-0">
                  Our Lasted & Featured Project for Clients
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-lg-4 col-xxl-5">
              <div className="showcase-card showcase-custom">
                <img
                  src="/design-agency/showcase.png"
                  alt="image"
                  className="img-fluid w-100 h-100"
                />
                <div className="showcase-card__content padding-6 rounded-4 bgc-white">
                  <a
                    href="#"
                    className="link d-inline-flex text-center padding-y-1 padding-x-4 bgds clr-white :clr-white fs-14 margin-bottom-4"
                  >
                    App Design
                  </a>
                  <h6 className="heading-6 mb-0">
                    <a
                      href="#"
                      className="link d-block font-weight-semibold clr-text :clr-primary"
                    >
                      Bento 3D Illustration
                    </a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xxl-3">
              <div className="showcase-card showcase-custom">
                <img
                  src="/design-agency/showcase2.png"
                  alt="image"
                  className="img-fluid w-100 h-100"
                />
                <div className="showcase-card__content padding-6 rounded-4 bgc-white">
                  <a
                    href="#"
                    className="link d-inline-flex text-center padding-y-1 padding-x-4 bgds clr-white :clr-white fs-14 margin-bottom-4"
                  >
                    App Design
                  </a>
                  <h6 className="heading-6 mb-0">
                    <a
                      href="#"
                      className="link d-block font-weight-semibold clr-text :clr-primary"
                    >
                      Bento 3D Illustration
                    </a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xxl-4">
              <div className="showcase-card showcase-custom">
                <img
                  src="/design-agency/showcase3.png"
                  alt="image"
                  className="img-fluid w-100 h-100"
                />
                <div className="showcase-card__content padding-6 rounded-4 bgc-white">
                  <a
                    href="#"
                    className="link d-inline-flex text-center padding-y-1 padding-x-4 bgds clr-white :clr-white fs-14 margin-bottom-4"
                  >
                    App Design
                  </a>
                  <h6 className="heading-6 mb-0">
                    <a
                      href="#"
                      className="link d-block font-weight-semibold clr-text :clr-primary"
                    >
                      Bento 3D Illustration
                    </a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xxl-3">
              <div className="showcase-card showcase-custom">
                <img
                  src="/design-agency/showcase4.png"
                  alt="image"
                  className="img-fluid w-100 h-100"
                />
                <div className="showcase-card__content padding-6 rounded-4 bgc-white">
                  <a
                    href="#"
                    className="link d-inline-flex text-center padding-y-1 padding-x-4 bgds clr-white :clr-white fs-14 margin-bottom-4"
                  >
                    App Design
                  </a>
                  <h6 className="heading-6 mb-0">
                    <a
                      href="#"
                      className="link d-block font-weight-semibold clr-text :clr-primary"
                    >
                      Bento 3D Illustration
                    </a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xxl-5">
              <div className="showcase-card showcase-custom">
                <img
                  src="/design-agency/showcase5.png"
                  alt="image"
                  className="img-fluid w-100 h-100"
                />
                <div className="showcase-card__content padding-6 rounded-4 bgc-white">
                  <a
                    href="#"
                    className="link d-inline-flex text-center padding-y-1 padding-x-4 bgds clr-white :clr-white fs-14 margin-bottom-4"
                  >
                    App Design
                  </a>
                  <h6 className="heading-6 mb-0">
                    <a
                      href="#"
                      className="link d-block font-weight-semibold clr-text :clr-primary"
                    >
                      Bento 3D Illustration
                    </a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xxl-4">
              <div className="showcase-card showcase-custom">
                <img
                  src="/design-agency/showcase6.png"
                  alt="image"
                  className="img-fluid w-100 h-100"
                />
                <div className="showcase-card__content padding-6 rounded-4 bgc-white">
                  <a
                    href="#"
                    className="link d-inline-flex text-center padding-y-1 padding-x-4 bgds clr-white :clr-white fs-14 margin-bottom-4"
                  >
                    App Design
                  </a>
                  <h6 className="heading-6 mb-0">
                    <a
                      href="#"
                      className="link d-block font-weight-semibold clr-text :clr-primary"
                    >
                      Bento 3D Illustration
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <Link href="/services" className="btn dg-outline-btn">
              View all Service
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignAgencyDesignSowcase;
