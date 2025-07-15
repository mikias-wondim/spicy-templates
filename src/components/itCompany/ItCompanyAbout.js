import Link from "next/link";

const ItCompanyAbout = () => {
  return (
    <>
      <div className="it-company-about-area ptb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <h2 className="it-company-title it-company-color fs-40 fw-600 flh-56 mb-80">
                Since 2013, we have been creating tailor-made
              </h2>
            </div>
          </div>
          <div className="position-relative">
            <div className="it-company-custom-border position-absolute z--1"></div>
            <img
              src="/it_company/shape/hero.png"
              alt=""
              className="s-one position-absolute"
            />
            <div className="row justify-content-between">
              <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-8 col-sm-10">
                <div className="it-company-about-testimonial it-company-bg-three rounded-16 position-relative">
                  <img
                    src="/it_company/about_testi_icon.png"
                    alt=""
                    className="mb-20"
                  />
                  <p className="it-company-color fw-500 flh-24 mb-20">
                    If you always do what you've always done, you'll always get
                    what you've always got
                  </p>
                  <h6 className="text-black fs-16 fw-600">Logan jon deo</h6>
                  <p className="clr-paragraph fs-12">CEO Of Quiety LTD</p>
                  <img
                    src="/it_company/t_about.png"
                    alt=""
                    className="position-absolute t_about_img"
                  />
                </div>
              </div>
              <div className="col-xxl-7 col-xl-6">
                <div className="it-company-about-box it-company-bg d-inline-flex align-items-center gap-5 rounded-16 p-5">
                  <h3 className="it-company-color-two fs-72">01</h3>
                  <div className="it-about-content">
                    <h5 className="text-white fs-24 flh-28 mb-20">
                      Brand Analysis For Your <br /> Business
                    </h5>
                    <p className="text-white flh-24 fch-40 mb-0">
                      Enthusiastically myocardinate technically sound innovation
                      whereas orthogonal markets. Interactively recaptiualize.
                    </p>
                  </div>
                </div>
                <div className="d-inline-block pl-40">
                  <h6 className="clr-paragraph fs-20 fw-600 flh-28 mt-40">
                    Distinctively initiate viral ideas for goal-oriented
                    <br />
                    partnerships. Appropriately network.
                  </h6>
                  <div className="d-flex align-items-center flex-wrap gap-20 mt-30">
                    <Link
                      href="/it-company"
                      className="btn it-company-bg ca-two-bg-hover-two rounded-5 text-white fs-16"
                    >
                      About US
                    </Link>
                    <div className="it-company-social-area d-flex align-items-center gap-4">
                      <p className="it-company-color fw-500 mb-0">Follow Us</p>
                      <div className="it-company-social-icons d-flex align-items-center">
                        <Link
                          href="/it-company"
                          className="it-com-link risk-color rounded-8 it-company-bg-hover it-company-hover-color d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link
                          href="/it-company"
                          className="it-com-link risk-color rounded-8 it-company-bg-hover it-company-hover-color d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-instagram"></i>
                        </Link>
                        <Link
                          href="/it-company"
                          className="it-com-link risk-color rounded-8 it-company-bg-hover it-company-hover-color d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-dribbble"></i>
                        </Link>
                        <Link
                          href="/it-company"
                          className="it-com-link risk-color rounded-8 it-company-bg-hover it-company-hover-color d-flex align-items-center justify-content-center"
                        >
                          <i className="fab fa-github"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItCompanyAbout;
