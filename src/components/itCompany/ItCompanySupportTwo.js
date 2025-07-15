const ItCompanySupportTwo = () => {
  return (
    <>
      <div className="it-company-support-area style-two ptb-80 overflow-hidden">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="position-relative">
                <img
                  src="/it_company/support_2.png"
                  alt=""
                  className="it-com-support img-fluid"
                />
                <img
                  src="/it_company/support_3.png"
                  alt=""
                  className="it-com-support-two position-absolute"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <h2 className="it-company-title it-company-color fs-40 fw-600 flh-56 mb-30">
                Why Quiety Choose For Your Business
              </h2>
              <p className="clr-paragraph fs-16 fw-400 flh-24 fch-50 mb-30">
                Our structure is unique. We are the only French PowerPoint
                agency that internalises 100% of its production.
                <br />
                <br />
                In order to offer the best rendering while guaranteeing the
                highest level of confidentiality, we never use freelancers,
                neither in France nor abroad.
              </p>
              <a
                href=""
                className="btn it-company-bg ca-two-bg-hover-two rounded-5 text-white fs-16"
              >
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItCompanySupportTwo;
