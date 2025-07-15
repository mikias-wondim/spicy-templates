import Link from "next/link";

const AgencyIntegration = () => {
  return (
    <>
      <section className="digi-integration ah-bg-2 ah-service position-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3">
              <div className="int-icon-one position-relative">
                <ul className="list-unstyled mb-0 d-none d-lg-block">
                  <li>
                    <img src="/digital-marketing/int-icon/fa.svg" alt="icon" />
                  </li>
                  <li>
                    <img src="/digital-marketing/int-icon/fi.svg" alt="icon" />
                  </li>
                  <li>
                    <img
                      src="/digital-marketing/int-icon/slack.svg"
                      alt="icon"
                    />
                  </li>
                  <li>
                    <img
                      src="/digital-marketing/int-icon/inst.svg"
                      alt="icon"
                    />
                  </li>
                  <li>
                    <img src="/digital-marketing/int-icon/er.svg" alt="icon" />
                  </li>
                  <li>
                    <img
                      src="/digital-marketing/int-icon/google.svg"
                      alt="icon"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <div>
                  <span className="span-arrow text-pink">
                    Intergration Software{" "}
                  </span>
                  <img src="/arro-right.svg" alt="arrow" />
                </div>
                <h2 className="mb-4 clr-text">
                  Intergrated with 20+ Widely Used Software
                </h2>
                <div>
                  <Link
                    href="contact-us"
                    className="btn rounded-pill bg-orange me-3 mb-3"
                  >
                    Get in touch
                  </Link>
                  <Link
                    href="integrations"
                    className="btn rounded-pill btn-outline-light ah-outline-btn red-hover mb-3 clr-text"
                  >
                    Browse all integration
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="int-icon-two position-relative">
                <ul className="list-unstyled mb-0 d-none d-lg-block">
                  <li>
                    <img
                      src="/digital-marketing/int-icon/slash.svg"
                      alt="icon"
                    />
                  </li>
                  <li>
                    <img
                      src="/digital-marketing/int-icon/tree.svg"
                      alt="icon"
                    />
                  </li>
                  <li>
                    <img
                      src="/digital-marketing/int-icon/drive.svg"
                      alt="icon"
                    />
                  </li>
                  <li>
                    <img src="/digital-marketing/int-icon/in.svg" alt="icon" />
                  </li>
                  <li>
                    <img
                      src="/digital-marketing/int-icon/star.svg"
                      alt="icon"
                    />
                  </li>
                  <li>
                    <img src="/digital-marketing/int-icon/twi.svg" alt="icon" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgencyIntegration;
