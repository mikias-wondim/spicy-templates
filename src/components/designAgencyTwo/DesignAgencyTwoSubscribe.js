const DesignAgencyTwoSubscribe = () => {
  return (
    <>
      <section className="mk-subscribe dat-bg overflow-hidden ptb-60">
        <div className="container">
          <div className="mk-subscribe-box position-relative rounded bg-light-subtle">
            <img
              src="/shape/sb-wave-top.png"
              alt="wave shape"
              className="position-absolute sb-shape end-50 top-0"
            />
            <img
              src="/shape/sb-circle-half.png"
              alt="circle"
              className="position-absolute sb-shape end-0 bottom-0"
            />
            <div className="row">
              <div className="col-xl-6">
                <div className="mk-box-content">
                  <div className="mk-title">
                    <span className="mk-subtitle mb-3">Let's Try!</span>
                    <h2 className="mk-heading mb-3 clr-text">
                      Start your 7-Day free trial
                    </h2>
                    <p className="mb-0">
                      Make your work easier with an integrated ecosystem that
                      lets all departments.
                    </p>
                  </div>
                  <form className="mk-sb-form d-flex align-items-center mt-40 flex-wrap flex-sm-nowrap">
                    <input type="email" placeholder="Enter your Email" />
                    <button
                      onClick={(e) => e.preventDefault()}
                      type="submit"
                      className="mk-submit-btn mt-3 mt-sm-0"
                    >
                      Subscribe
                    </button>
                  </form>
                  <div className="sb-meta-text d-flex align-items-center mt-4 flex-wrap">
                    <span className="clr-text">
                      <span className="dot me-1"></span>Free 7 Days trial
                    </span>
                    <span className="clr-text">
                      <span className="dot me-1"></span>No Credit Card Required
                    </span>
                    <span className="clr-text">
                      <span className="dot me-1"></span>Cancel anytime
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/marketing/sb-object.png"
              alt="object"
              className="position-absolute sb-object d-none d-lg-block"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default DesignAgencyTwoSubscribe;
