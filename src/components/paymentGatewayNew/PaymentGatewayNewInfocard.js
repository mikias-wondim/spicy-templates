const PaymentGatewayNewInfocard = () => {
  return (
    <>
      <div className="pay-gw-info-card-area ptb-120">
        <div className="container">
          <div className="mb-20">
            <div className="row align-items-center justify-content-between">
              <div className="col-xxl-5 col-lg-7">
                <h2 className="pay-gw-title pay-gw-color fs-42 ff-risk-pri mb-20">
                  Investing isn’t easy we just professional way
                </h2>
                <p className="mb-20">
                  Rainforest fully manages risk, handles compliance, and
                  onboards your merchant customers.
                </p>
                <ul className="pay-gw-service-list list-unstyled d-flex flex-column gap-4">
                  <li className="d-flex align-items-center gap-4 pay-gw-color">
                    <i className="fa-solid fa-circle-check"></i>
                    <p className="fs-20 ff-risk-pri fw-600 mb-0">
                      Mobile app easy management & access.
                    </p>
                  </li>
                  <li className="d-flex align-items-center gap-4 pay-gw-color">
                    <i className="fa-solid fa-circle-check"></i>
                    <p className="fs-20 ff-risk-pri fw-600 mb-0">
                      Ton’s of features for handle the card easily & safely
                    </p>
                  </li>
                  <li className="d-flex align-items-center gap-4 pay-gw-color">
                    <i className="fa-solid fa-circle-check"></i>
                    <p className="fs-20 ff-risk-pri fw-600 mb-0">
                      Strong security system.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-xxl-5 col-lg-5">
                <img src="/home_34/service.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="pay-gw-card-item p-4 rounded-3 mt-20">
                <div className="d-flex align-items-center gap-4 mb-30">
                  <div className="pay-card-icon-wpreer position-relative z-1">
                    <div className="pay-card-icon">
                      <img
                        src="/home_34/card-1.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <img
                      src="/home_34/card-shape.png"
                      alt=""
                      className="shape-1 position-absolute z--1 img-fluid"
                    />
                  </div>
                  <h5 className="pay-gw-color fs-24 ff-risk-pri mb-0">
                    Easy & Flexible{" "}
                  </h5>
                </div>
                <p className="pay-gw-color mt-20 mb-0">
                  Energistically transition interoperable resources with
                  principle-centered metrics. Enthusiastically functional
                  process improvements.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pay-gw-card-item p-4 rounded-3 mt-20">
                <div className="d-flex align-items-center gap-4 mb-30">
                  <div className="pay-card-icon-wpreer position-relative z-1">
                    <div className="pay-card-icon">
                      <img
                        src="/home_34/card-2.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <img
                      src="/home_34/card-shape.png"
                      alt=""
                      className="shape-1 position-absolute z--1 img-fluid"
                    />
                  </div>
                  <h5 className="pay-gw-color fs-24 ff-risk-pri mb-0">
                    Safe Transcation
                  </h5>
                </div>
                <p className="pay-gw-color mt-20 mb-0">
                  Energistically transition interoperable resources with
                  principle-centered metrics. Enthusiastically functional
                  process improvements.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pay-gw-card-item p-4 rounded-3 mt-20">
                <div className="d-flex align-items-center gap-4 mb-30">
                  <div className="pay-card-icon-wpreer position-relative z-1">
                    <div className="pay-card-icon">
                      <img
                        src="/home_34/card-3.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <img
                      src="/home_34/card-shape.png"
                      alt=""
                      className="shape-1 position-absolute z--1 img-fluid"
                    />
                  </div>
                  <h5 className="pay-gw-color fs-24 ff-risk-pri mb-0">
                    Tested Reliability
                  </h5>
                </div>
                <p className="pay-gw-color mt-20 mb-0">
                  Energistically transition interoperable resources with
                  principle-centered metrics. Enthusiastically functional
                  process improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentGatewayNewInfocard;
