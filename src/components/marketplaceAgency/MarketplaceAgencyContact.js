const MarketplaceAgencyContact = () => {
  return (
    <>
      <section className="ma-contact ptb-120 position-relative z-1">
        <img
          src="/home_37/contact-img.png"
          alt="image"
          className="img-fluid ma-contact-img position-absolute pe-none z-n1 d-none d-lg-block"
        />
        <div className="container">
          <div className="row justify-content-between g-4">
            <div className="col-lg-6 col-xl-5">
              <div className="d-inline-block px-4 py-1 rounded-pill border border-warning mb-3">
                <p className="ma-warning-text fw-bold mb-0">Contact Us</p>
              </div>
              <h2 className="ail-title text-white fs-48 fw-600 mb-4">
                Need a Successful Project?
              </h2>
              <p className="text-white fs-24 fw-medium mb-5">
                Call Us at: +880 170 533 601
              </p>
              <h6 className="text-white fs-20 fw-medium mb-2">
                Your Benefits:
              </h6>
              <div className="contact-benefit bg-white bg-opacity-25 p-3 rounded-4 border">
                <ul className="list-unstyled d-flex flex-wrap list-two-col mb-0">
                  <li className="py-1 text-white">
                    <i className="fas fa-check-circle me-2 ma-warning-text"></i>
                    Client-oriented
                  </li>
                  <li className="py-1 text-white">
                    <i className="fas fa-check-circle me-2 ma-warning-text"></i>
                    Results-driven
                  </li>
                  <li className="py-1 text-white">
                    <i className="fas fa-check-circle me-2 ma-warning-text"></i>
                    Independent
                  </li>
                  <li className="py-1 text-white">
                    <i className="fas fa-check-circle me-2 ma-warning-text"></i>
                    Problem-solving
                  </li>
                  <li className="py-1 text-white">
                    <i className="fas fa-check-circle me-2 ma-warning-text"></i>
                    Competent
                  </li>
                  <li className="py-1 text-white">
                    <i className="fas fa-check-circle me-2 ma-warning-text"></i>
                    Transparent
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5">
              <div className="position-relative">
                <div className="ma-form-wrapper bg-white w-100 position-absolute shadow-sm px-4 py-5 rounded-3">
                  <div className="text-center">
                    <h6 className="text-black fs-20 fw-bold mb-4">
                      Schedule a Free Consultation
                    </h6>
                  </div>
                  <form>
                    <div className="d-flex flex-column gap-4">
                      <div>
                        <label
                          htmlFor="Name"
                          className="bg-white text-black px-2 py-1 ms-3"
                        >
                          Full name
                        </label>
                        <input
                          type="text"
                          className="form-control px-4 border border-opacity-25 ma-form"
                          id="Name"
                          required
                          placeholder="Full Name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="Phone"
                          className="bg-white text-black px-2 py-1 ms-3"
                        >
                          Phone
                        </label>
                        <input
                          type="text"
                          className="form-control px-4 border border-opacity-25 ma-form"
                          id="Phone"
                          required
                          placeholder="Phone"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="Email"
                          className="bg-white text-black px-2 py-1 ms-3"
                        >
                          Company Email
                        </label>
                        <input
                          type="email"
                          className="form-control px-4 border border-opacity-25 ma-form"
                          id="Email"
                          required
                          placeholder="Company Email"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="Help"
                          className="bg-white text-black px-2 py-1 ms-3"
                        >
                          How Can We Help You?
                        </label>
                        <select
                          className="form-control form-select px-4 border border-opacity-25 ma-form"
                          name="help"
                          id="Help"
                        >
                          <option value="">Select Options</option>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="Budget"
                          className="bg-white text-black px-2 py-1 ms-3"
                        >
                          Budget
                        </label>
                        <select
                          className="form-control form-select px-4 border border-opacity-25 ma-form"
                          name="budget"
                          id="Budget"
                        >
                          <option value="5000-7000">$5000-$7000</option>
                          <option value="7000-10000">$7000-$10000</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="Message"
                          className="bg-white text-black px-2 py-1 ms-3"
                        >
                          Message
                        </label>
                        <textarea
                          className="form-control px-4 border border-opacity-25 ma-form"
                          id="Message"
                          placeholder="To Better assist you"
                          style={{ height: "120px" }}
                        ></textarea>
                      </div>
                    </div>
                    <button
                      onClick={(e) => e.preventDefault()}
                      type="submit"
                      className="bg-dark px-4 py-2 text-white fw-bold border-0 rounded-pill mt-4"
                    >
                      Get in Touch
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketplaceAgencyContact;
