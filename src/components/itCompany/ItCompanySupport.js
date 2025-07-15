import Link from "next/link";

const ItCompanySupport = () => {
  return (
    <>
      <div className="it-company-support-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="it-company-title it-company-color fs-40 fw-600 flh-56 mb-30">
                24/7 Chat Support for Quiety Desk Users
              </h2>
              <p className="clr-paragraph fs-16 fw-400 flh-24 fch-50 mb-30">
                Distinctively initiate viral ideas for goal-oriented
                partnerships. Appropriately network cross-media opportunities
                with cross-platform total linkage.
              </p>
              <Link
                href="/it-company"
                className="btn it-company-bg ca-two-bg-hover-two rounded-5 text-white fs-16"
              >
                Contact Now
              </Link>
            </div>
            <div className="col-lg-6">
              <img
                src="/it_company/support.png"
                alt=""
                className="it-com-support img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItCompanySupport;
