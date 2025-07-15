const CreativeAgencyNewFeature = () => {
  return (
    <>
      <div className="sections">
        <div className="sections__head">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="mb-0 about-title">Features for scale</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="position-relative">
                <img
                  src="/feature-img-1.png"
                  alt="image"
                  className="img-fluid"
                />
                <div className="pt-4 ps-4 position-absolute top-0 start-0">
                  <h5 className="mb-3">API Integration</h5>
                  <p className="mb-0 feature-description">
                    Integrate WriteBot powerful AI capabilities into your
                    product and create amazing avatar videos programmatically
                    with WritBot API
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 h-100 p-4">
                <div className="card-body position-relative h-100 d-flex flex-column justify-content-around">
                  <div className="text-center px-4 py-5">
                    <img
                      src="/feature-img-2.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="p-6">
                    <h5 className="mb-3 about-title">Featured Product</h5>
                    <p className="mb-0">
                      Queity Featured Product of Envato. highly customizable IT
                      solution and SAAS product for your Business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 h-100 p-4">
                <div className="card-body position-relative h-100 d-flex flex-column">
                  <h5 className="mb-3 about-title">Use Integration Tools</h5>
                  <p className="mb-4">
                    Using Quiety couldn’t be easier. Streamline your video
                    creation process.
                  </p>
                  <div className="text-center">
                    <img
                      src="/feat-img-1.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card border-0 h-100 p-4">
                <div className="card-body position-relative h-100 d-flex flex-column">
                  <h5 className="mb-3 about-title">Templates for everything</h5>
                  <p className="mb-4">
                    Using Quiety couldn’t be easier. Streamline your video
                    creation process from your favorite platform
                  </p>
                  <ul className="nav nav-pills template-nav mb-3">
                    <li className="nav-item">
                      <button
                        className="nav-link active about-title"
                        data-bs-toggle="pill"
                        data-bs-target="#popular-item"
                        type="button"
                      >
                        Home
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link about-title"
                        data-bs-toggle="pill"
                        data-bs-target="#ecommerce-item"
                        type="button"
                      >
                        Profile
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link about-title"
                        data-bs-toggle="pill"
                        data-bs-target="#software-item"
                        type="button"
                      >
                        Contact
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content pt-3">
                    <div
                      className="tab-pane fade show active"
                      id="popular-item"
                    >
                      <div className="row g-4">
                        <div className="col-sm-6 col-md-4">
                          <img
                            src="/feat-img-2.png"
                            alt="image"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-sm-6 col-md-4">
                          <img
                            src="/feat-img-3.png"
                            alt="image"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-sm-6 col-md-4">
                          <img
                            src="/feat-img-4.png"
                            alt="image"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="ecommerce-item">
                      <div className="row g-4">
                        <div className="col-sm-6 col-md-4">
                          <img
                            src="/feat-img-2.png"
                            alt="image"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-sm-6 col-md-4">
                          <img
                            src="/feat-img-3.png"
                            alt="image"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-sm-6 col-md-4">
                          <img
                            src="/feat-img-4.png"
                            alt="image"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="software-item">
                      <div className="row g-4">
                        <div className="col-sm-6 col-md-4">
                          <img
                            src="/feat-img-2.png"
                            alt="image"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-sm-6 col-md-4">
                          <img
                            src="/feat-img-3.png"
                            alt="image"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-sm-6 col-md-4">
                          <img
                            src="/feat-img-4.png"
                            alt="image"
                            className="img-fluid"
                          />
                        </div>
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

export default CreativeAgencyNewFeature;
