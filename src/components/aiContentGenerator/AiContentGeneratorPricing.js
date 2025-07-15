import Link from "next/link";

const AiContentGeneratorPricing = () => {
  return (
    <>
      <div className="ail-price-area ptb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-7 col-xl-9">
              <div className="text-center mb-20">
                <p className="ail-sub-title text-black fw-500 ah-input-bg d-inline-flex align-items-center gap-2 rounded-5 mb-20">
                  <span className="ail-gd-bg"></span>Pricing Table
                </p>
                <h2 className="ail-title text-black fs-48 fw-600">
                  Simple pricing for your team{" "}
                  <span className="ail-highlighted-text">
                    Money Well Invested
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-11">
              <div className="row">
                <div className="col-xl-4 col-md-6">
                  <div className="ail-price-item p-5 rounded-10 mt-20">
                    <div className="position-relative">
                      <h5 className="text-black fs-24 mb-30">Free Use</h5>
                      <p className="mb-30">Use Code: STARTER1 at checkout</p>
                      <h4 className="display-6 fw-semi-bold mb-30">
                        $00<span className="fs-md">/month</span>
                      </h4>
                      <Link
                        href="/ai-content-generator"
                        className="btn ah-input-bg dark-bg-hover rounded-6 ca-two-body-clr ff-poppins fs-16 border-0 w-100"
                      >
                        Get in Touch
                      </Link>
                      <ul className="ail-price-list list-unstyled d-flex flex-column gap-4 mt-30 mb-0">
                        <li className="ca-two-body-clr">
                          <i className="far fa-check-circle ca-two-body-clr me-2"></i>
                          Get answers in real-time
                        </li>
                        <li className="ca-two-body-clr">
                          <i className="far fa-check-circle ca-two-body-clr me-2"></i>
                          Report on what matter
                        </li>
                        <li className="ca-two-body-clr">
                          <i className="far fa-check-circle ca-two-body-clr me-2"></i>
                          Collaborate seamlessly
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="ail-price-item popular p-5 rounded-10 mt-20">
                    <div className="position-relative">
                      <p className="ail-popular position-absolute text-white fs-12 fw-500 mb-0 top-0 right-0">
                        Most popular
                      </p>
                      <h5 className="text-black fs-24 mb-30">Pro Starter</h5>
                      <p className="mb-30">Use Code: STARTER1 at checkout</p>
                      <h4 className="display-6 fw-semi-bold mb-30">
                        $20<span className="fs-md">/month</span>
                      </h4>
                      <Link
                        href="/ai-content-generator"
                        className="btn ah-input-bg dark-bg-hover rounded-6 ca-two-body-clr ff-poppins fs-16 border-0 w-100"
                      >
                        Get in Touch
                      </Link>
                      <ul className="ail-price-list list-unstyled d-flex flex-column gap-4 mt-30 mb-0">
                        <li className="ca-two-body-clr">
                          <i className="far fa-check-circle ca-two-body-clr me-2"></i>
                          Get answers in real-time
                        </li>
                        <li className="ca-two-body-clr">
                          <i className="far fa-check-circle ca-two-body-clr me-2"></i>
                          Report on what matter
                        </li>
                        <li className="ca-two-body-clr">
                          <i className="far fa-check-circle ca-two-body-clr me-2"></i>
                          Collaborate seamlessly
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="ail-price-item p-5 rounded-10 mt-20">
                    <div className="position-relative">
                      <h5 className="text-black fs-24 mb-30">Starter</h5>
                      <p className="mb-30">Use Code: STARTER1 at checkout</p>
                      <h4 className="display-6 fw-semi-bold mb-30">
                        $10<span className="fs-md">/month</span>
                      </h4>
                      <Link
                        href="/ai-content-generator"
                        className="btn ah-input-bg dark-bg-hover rounded-6 ca-two-body-clr ff-poppins fs-16 border-0 w-100"
                      >
                        Get in Touch
                      </Link>
                      <ul className="ail-price-list list-unstyled d-flex flex-column gap-4 mt-30 mb-0">
                        <li className="ca-two-body-clr">
                          <i className="far fa-check-circle ca-two-body-clr me-2"></i>
                          Get answers in real-time
                        </li>
                        <li className="ca-two-body-clr">
                          <i className="far fa-check-circle ca-two-body-clr me-2"></i>
                          Report on what matter
                        </li>
                        <li className="ca-two-body-clr">
                          <i className="far fa-check-circle ca-two-body-clr me-2"></i>
                          Collaborate seamlessly
                        </li>
                      </ul>
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

export default AiContentGeneratorPricing;
