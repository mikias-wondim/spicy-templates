import Link from "next/link";

const PaymentGatewayNewHero = () => {
  return (
    <>
      <div className="pay-gw-hero-area pay-op-body-color ptb-120 position-relative z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <h1 className="pay-gw-hero-title pay-gw-color fs-72 ff-risk-pri mb-60">
                Make money{" "}
                <span>
                  <img
                    src="/home_34/hero-title.png"
                    alt=""
                    className="img-fluid"
                  />
                </span>{" "}
                way to
              </h1>
              <img
                src="/home_34/hero-1.png"
                alt=""
                className="img-fluid d-block mb-60"
              />
              <img
                src="/home_34/hero-2.png"
                alt=""
                className="img-fluid d-block mb-60"
              />
              <img
                src="/home_34/hero-logo-1.png"
                alt=""
                className="img-fluid d-block"
              />
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="pay-gw-hero-img-box">
                <div className="text-end mb-20">
                  <img
                    src="/home_34/hero-list-2.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <img
                  src="/home_34/hero-list-1.png"
                  alt=""
                  className="img-fluid"
                />
                <div className="text-end mb-30">
                  <img
                    src="/home_34/hero-logo-5.png"
                    alt=""
                    className="logo-1 img-fluid"
                  />
                </div>
              </div>
              <h1 className="pay-gw-color fs-72 ff-risk-pri mb-20">
                in a number of ways
              </h1>
              <p className="mb-30">
                One product, all the payment flows — unlike other providers
                Rainforest can be used to send money
              </p>
              <Link
                href="/request-demo"
                className="btn pay-bg-color text-white rounded-3 mb-60"
              >
                Started Free Trail
              </Link>
              <div className="d-flex align-items-center justify-content-start justify-content-xl-end flex-wrap gap-4">
                <img
                  src="/home_34/hero-logo-2.png"
                  alt=""
                  className="img-fluid"
                />
                <img
                  src="/home_34/hero-logo-3.png"
                  alt=""
                  className="img-fluid"
                />
                <img
                  src="/home_34/hero-logo-4.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          src="/home_34/hero-mobile.png"
          alt=""
          className="shape-1 position-absolute z--1 img-fluid"
        />
      </div>
    </>
  );
};

export default PaymentGatewayNewHero;
