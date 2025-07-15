const DigitalAgencyPricing = () => {
  return (
    <>
      <section className="dg-pricing-section bg-light-subtle ptb-120 position-relative overflow-hidden z-1">
        <img
          src="/digital-agency/triangle-circle.png"
          alt="triangle shape"
          className="position-absolute triangle-circle z--1"
        />
        <img
          src="/digital-agency/pr-line-1.png"
          alt="line shape"
          className="position-absolute pr-line-shape-1 z--1 start-0"
        />
        <img
          src="/digital-agency/pr-line-2.png"
          alt="line shape"
          className="position-absolute pr-line-shape-2 z--1 end-0"
        />
        <span className="dg-circle-style-1 position-absolute dg-circle-1 rounded-circle z--1"></span>
        <span className="dg-circle-style-2 position-absolute dg-circle-2 rounded-circle z--1"></span>
        <span className="dg-circle-style-2 position-absolute dg-circle-3 rounded-circle z--1"></span>
        <div className="container position-relative z-1">
          <div className="row justify-content-center">
            <div className="col-xl-5">
              <div className="section-title text-center mb-4">
                <span className="text-dg-primary">PRICING PLANS</span>
                <h2 className="mt-2 mb-0 clr-text">
                  Get Started for free add & plan later
                </h2>
              </div>
            </div>
          </div>
          <div className="dg-pricing-tab text-center">
            <ul className="nav nav-tabs border-0 d-inline-flex bg-white rounded overflow-hidden p-0">
              <li>
                <a href="#monthly" className="active" data-bs-toggle="tab">
                  Monthly
                </a>
              </li>
              <li>
                <a href="#yearly" data-bs-toggle="tab">
                  Yearly
                </a>
              </li>
            </ul>
            <div className="tab-content mt-5">
              <div className="tab-pane fade show active" id="monthly">
                <div className="row g-4 justify-content-center">
                  <div className="col-xl-4 col-md-6">
                    <div className="dg-pricing-column text-center bg-white rounded-4 position-relative z-1">
                      <img
                        src="/digital-agency/circle-shape.png"
                        alt="circle shape"
                        className="position-absolute start-0 top-0 z--1"
                      />
                      <div className="icon-wrapper d-inline-block rounded-circle bg-white">
                        <span className="d-inline-flex align-items-center justify-content-center rounded-circle w-100 h-100">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.4"
                              d="M24 17.4V21C24 22.8 22.8 24 21 24H4.79999C5.29199 24 5.79599 23.928 6.26399 23.772C6.39599 23.724 6.52799 23.676 6.65999 23.616C7.07999 23.448 7.48799 23.208 7.84799 22.896C7.95599 22.812 8.07599 22.704 8.18399 22.596L8.23199 22.548L16.392 14.4H21C22.8 14.4 24 15.6 24 17.4Z"
                              fill="white"
                            />
                            <path
                              opacity="0.6"
                              d="M19.644 11.148L16.392 14.4L8.23199 22.548C9.07199 21.684 9.6 20.496 9.6 19.2V7.60795L12.852 4.35595C14.124 3.08395 15.828 3.08395 17.1 4.35595L19.644 6.89995C20.916 8.17195 20.916 9.87596 19.644 11.148Z"
                              fill="white"
                            />
                            <path
                              d="M6.6 0H3C1.2 0 0 1.2 0 3V19.2C0 19.524 0.0359999 19.848 0.0959999 20.16C0.132 20.316 0.168 20.472 0.216 20.628C0.276 20.808 0.336 20.988 0.408 21.156C0.42 21.168 0.42 21.18 0.42 21.18C0.432 21.18 0.432 21.18 0.42 21.192C0.588 21.528 0.78 21.852 1.008 22.152C1.14 22.308 1.272 22.452 1.404 22.596C1.536 22.74 1.68 22.86 1.836 22.98L1.848 22.992C2.148 23.22 2.472 23.412 2.808 23.58C2.82 23.568 2.82 23.568 2.82 23.58C3 23.664 3.18 23.724 3.372 23.784C3.528 23.832 3.684 23.868 3.84 23.904C4.152 23.964 4.476 24 4.8 24C5.292 24 5.796 23.928 6.264 23.772C6.396 23.724 6.528 23.676 6.66 23.616C7.08 23.448 7.488 23.208 7.848 22.896C7.956 22.812 8.076 22.704 8.184 22.596L8.232 22.548C9.072 21.684 9.6 20.496 9.6 19.2V3C9.6 1.2 8.4 0 6.6 0ZM4.8 21C3.804 21 3 20.196 3 19.2C3 18.204 3.804 17.4 4.8 17.4C5.796 17.4 6.6 18.204 6.6 19.2C6.6 20.196 5.796 21 4.8 21Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </div>
                      <h5 className="mt-4 mb-3">Starter Plan</h5>
                      <p className="mb-4 fs-sm">
                        Make your work easier with an integrated
                        <br /> properly together.
                      </p>
                      <ul className="dg-feature-list list-unstyled d-inline-block text-start p-0">
                        <li className="fs-sm">
                          <span className="me-2">
                            <i className="fas fa-check"></i>
                          </span>
                          Get answers in real-time
                        </li>
                        <li className="fs-sm">
                          <span className="me-2">
                            <i className="fas fa-check"></i>
                          </span>
                          Report on what matters
                        </li>
                        <li className="fs-sm">
                          <span className="me-2">
                            <i className="fas fa-check"></i>
                          </span>
                          Collaborate seamlessly
                        </li>
                        <li className="fs-sm">
                          <span className="me-2">
                            <i className="fas fa-check"></i>
                          </span>
                          Update plans on the fly
                        </li>
                        <li className="fs-sm">
                          <span className="me-2">
                            <i className="fas fa-check"></i>
                          </span>
                          Every corner of the business
                        </li>
                      </ul>
                      <div className="dg-pricing-amount d-inline-block rounded-4">
                        <h2>
                          $14
                          <span className="ms-2 fs-md fw-normal">/month</span>
                        </h2>
                        <a href="#" className="btn dg-outline-btn rounded-pill">
                          Purchase Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="dg-pricing-column text-center bg-white rounded-4 position-relative z-1">
                      <img
                        src="/digital-agency/circle-shape.png"
                        alt="circle shape"
                        className="position-absolute start-0 top-0 z--1"
                      />
                      <img
                        src="/digital-agency/offer-badge.png"
                        alt="badge"
                        className="position-absolute top-0 offer-badge z-2"
                      />
                      <div className="icon-wrapper d-inline-block rounded-circle bg-white bg-color-2">
                        <span className="d-inline-flex align-items-center justify-content-center rounded-circle w-100 h-100">
                          <svg
                            width="29"
                            height="24"
                            viewBox="0 0 29 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M28.9461 2.8982V16.7634C28.9461 20.758 25.7041 24 21.7096 24H7.23647C6.57071 24 5.93389 23.9131 5.31155 23.7394C4.41422 23.4934 4.12476 22.35 4.79052 21.6843L20.1754 6.29938C20.4938 5.98097 20.9714 5.9086 21.4201 5.99544C21.8832 6.08228 22.3898 5.95202 22.7516 5.60467L26.4712 1.87061C27.8317 0.510141 28.9461 0.958806 28.9461 2.8982Z"
                              fill="white"
                            />
                            <path
                              opacity="0.4"
                              d="M18.294 5.2863L3.14066 20.4396C2.44595 21.1343 1.2881 20.9606 0.824966 20.0923C0.289462 19.1081 0 17.9647 0 16.7635V2.89824C0 0.958842 1.11443 0.510176 2.4749 1.87065L6.20895 5.61918C6.77341 6.16915 7.69968 6.16915 8.26413 5.61918L13.4455 0.423338C14.0099 -0.141113 14.9362 -0.141113 15.5007 0.423338L18.3085 3.23112C18.8584 3.79557 18.8584 4.72185 18.294 5.2863Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </div>
                      <h5 className="mt-4 mb-3">Professional Plan</h5>
                      <p className="mb-4 fs-sm">
                        Make your work easier with an integrated
                        <br /> properly together.
                      </p>
                      <ul className="dg-feature-list list-unstyled d-inline-block text-start p-0">
                        <li className="fs-sm">
                          <span className="me-2">
                            <i className="fas fa-check"></i>
                          </span>
                          Get answers in real-time
                        </li>
                        <li className="fs-sm">
                          <span className="me-2">
                            <i className="fas fa-check"></i>
                          </span>
                          Report on what matters
                        </li>
                        <li className="fs-sm">
                          <span className="me-2">
                            <i className="fas fa-check"></i>
                          </span>
                          Collaborate seamlessly
                        </li>
                        <li className="fs-sm">
                          <span className="me-2">
                            <i className="fas fa-check"></i>
                          </span>
                          Update plans on the fly
                        </li>
                        <li className="fs-sm">
                          <span className="me-2">
                            <i className="fas fa-check"></i>
                          </span>
                          Every corner of the business
                        </li>
                      </ul>
                      <div className="dg-pricing-amount d-inline-block rounded-4 bg-dg-primary">
                        <h2>
                          $18
                          <span className="ms-2 fs-md fw-normal">/month</span>
                        </h2>
                        <a href="#" className="btn dg-outline-btn rounded-pill">
                          Purchase Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="dg-pricing-column text-center bg-white rounded-4 position-relative z-1">
                      <img
                        src="/digital-agency/circle-shape.png"
                        alt="circle shape"
                        className="position-absolute start-0 top-0 z--1"
                      />
                      <div className="icon-wrapper d-inline-block rounded-circle bg-white bg-color-3">
                        <span className="d-inline-flex align-items-center justify-content-center rounded-circle w-100 h-100">
                          <svg
                            width="22"
                            height="24"
                            viewBox="0 0 22 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.4"
                              d="M18.3004 4.40412L4.2121 18.4925C3.68409 19.0205 2.79607 18.9485 2.36406 18.3245C0.876021 16.1524 0 13.5843 0 10.9443V5.67615C0 4.69213 0.744018 3.5761 1.65604 3.20409L8.34021 0.468024C9.08587 0.159037 9.88511 0 10.6923 0C11.4994 0 12.2987 0.159037 13.0443 0.468024L17.8924 2.44807C18.6965 2.77208 18.9005 3.80411 18.3004 4.40412Z"
                              fill="white"
                            />
                            <path
                              d="M19.4307 6.05063C20.2107 5.39062 21.3988 5.95463 21.3988 6.97466V10.9468C21.3988 16.8149 17.1387 22.311 11.3185 23.9191C10.9225 24.0271 10.4905 24.0271 10.0825 23.9191C8.39798 23.446 6.82095 22.6513 5.43838 21.579C4.86237 21.135 4.80236 20.295 5.30638 19.779C7.92244 17.1029 15.5786 9.30271 19.4307 6.05063Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </div>
                      <h5 className="mt-4 mb-3">Enterprise Plan</h5>
                      <p className="mb-4 fs-sm">
                        Make your work easier with an integrated
                        <br /> properly together.
                      </p>
                      <ul className="dg-feature-list list-unstyled d-inline-block text-start p-0">
                        <li className="fs-sm">
                          <span className="me-2">
                            <i className="fas fa-check"></i>
                          </span>
                          Get answers in real-time
                        </li>
                        <li className="fs-sm">
                          <span className="me-2">
                            <i className="fas fa-check"></i>
                          </span>
                          Report on what matters
                        </li>
                        <li className="fs-sm">
                          <span className="me-2">
                            <i className="fas fa-check"></i>
                          </span>
                          Collaborate seamlessly
                        </li>
                        <li className="fs-sm">
                          <span className="me-2">
                            <i className="fas fa-check"></i>
                          </span>
                          Update plans on the fly
                        </li>
                        <li className="fs-sm">
                          <span className="me-2">
                            <i className="fas fa-check"></i>
                          </span>
                          Every corner of the business
                        </li>
                      </ul>
                      <div className="dg-pricing-amount d-inline-block rounded-4">
                        <h2>
                          $25
                          <span className="ms-2 fs-md fw-normal">/month</span>
                        </h2>
                        <a href="#" className="btn dg-outline-btn rounded-pill">
                          Purchase Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="yearly">
                <div className="row g-4 justify-content-center">
                  <div className="col-xl-4 col-md-6">
                    <div className="dg-pricing-column text-center bg-white rounded-4 position-relative z-1">
                      <img
                        src="/digital-agency/circle-shape.png"
                        alt="circle shape"
                        className="position-absolute start-0 top-0 z--1"
                      />
                      <div className="icon-wrapper d-inline-block rounded-circle bg-white">
                        <span className="d-inline-flex align-items-center justify-content-center rounded-circle w-100 h-100">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.4"
                              d="M24 17.4V21C24 22.8 22.8 24 21 24H4.79999C5.29199 24 5.79599 23.928 6.26399 23.772C6.39599 23.724 6.52799 23.676 6.65999 23.616C7.07999 23.448 7.48799 23.208 7.84799 22.896C7.95599 22.812 8.07599 22.704 8.18399 22.596L8.23199 22.548L16.392 14.4H21C22.8 14.4 24 15.6 24 17.4Z"
                              fill="white"
                            />
                            <path
                              opacity="0.6"
                              d="M19.644 11.148L16.392 14.4L8.23199 22.548C9.07199 21.684 9.6 20.496 9.6 19.2V7.60795L12.852 4.35595C14.124 3.08395 15.828 3.08395 17.1 4.35595L19.644 6.89995C20.916 8.17195 20.916 9.87596 19.644 11.148Z"
                              fill="white"
                            />
                            <path
                              d="M6.6 0H3C1.2 0 0 1.2 0 3V19.2C0 19.524 0.0359999 19.848 0.0959999 20.16C0.132 20.316 0.168 20.472 0.216 20.628C0.276 20.808 0.336 20.988 0.408 21.156C0.42 21.168 0.42 21.18 0.42 21.18C0.432 21.18 0.432 21.18 0.42 21.192C0.588 21.528 0.78 21.852 1.008 22.152C1.14 22.308 1.272 22.452 1.404 22.596C1.536 22.74 1.68 22.86 1.836 22.98L1.848 22.992C2.148 23.22 2.472 23.412 2.808 23.58C2.82 23.568 2.82 23.568 2.82 23.58C3 23.664 3.18 23.724 3.372 23.784C3.528 23.832 3.684 23.868 3.84 23.904C4.152 23.964 4.476 24 4.8 24C5.292 24 5.796 23.928 6.264 23.772C6.396 23.724 6.528 23.676 6.66 23.616C7.08 23.448 7.488 23.208 7.848 22.896C7.956 22.812 8.076 22.704 8.184 22.596L8.232 22.548C9.072 21.684 9.6 20.496 9.6 19.2V3C9.6 1.2 8.4 0 6.6 0ZM4.8 21C3.804 21 3 20.196 3 19.2C3 18.204 3.804 17.4 4.8 17.4C5.796 17.4 6.6 18.204 6.6 19.2C6.6 20.196 5.796 21 4.8 21Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </div>
                      <h5 className="mt-4 mb-3">Starter Plan</h5>
                      <p className="mb-4 fs-sm">
                        Make your work easier with an integrated
                        <br /> properly together.
                      </p>
                      <ul className="dg-feature-list list-unstyled d-inline-block text-start p-0">
                        <li className="fs-sm">
                          <span className="me-2">
                            <i className="fas fa-check"></i>
                          </span>
                          Get answers in real-time
                        </li>
                        <li className="fs-sm">
                          <span className="me-2">
                            <i className="fas fa-check"></i>
                          </span>
                          Report on what matters
                        </li>
                        <li className="fs-sm">
                          <span className="me-2">
                            <i className="fas fa-check"></i>
                          </span>
                          Collaborate seamlessly
                        </li>
                        <li className="fs-sm">
                          <span className="me-2">
                            <i className="fas fa-check"></i>
                          </span>
                          Update plans on the fly
                        </li>
                        <li className="fs-sm">
                          <span className="me-2">
                            <i className="fas fa-check"></i>
                          </span>
                          Every corner of the business
                        </li>
                      </ul>
                      <div className="dg-pricing-amount d-inline-block rounded-4">
                        <h2>
                          $140
                          <span className="ms-2 fs-md fw-normal">/year</span>
                        </h2>
                        <a href="#" className="btn dg-outline-btn rounded-pill">
                          Purchase Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="dg-pricing-column text-center bg-white rounded-4 position-relative z-1">
                      <img
                        src="/digital-agency/circle-shape.png"
                        alt="circle shape"
                        className="position-absolute start-0 top-0 z--1"
                      />
                      <img
                        src="/digital-agency/offer-badge.png"
                        alt="badge"
                        className="position-absolute top-0 offer-badge z-2"
                      />
                      <div className="icon-wrapper d-inline-block rounded-circle bg-white bg-color-2">
                        <span className="d-inline-flex align-items-center justify-content-center rounded-circle w-100 h-100">
                          <svg
                            width="29"
                            height="24"
                            viewBox="0 0 29 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M28.9461 2.8982V16.7634C28.9461 20.758 25.7041 24 21.7096 24H7.23647C6.57071 24 5.93389 23.9131 5.31155 23.7394C4.41422 23.4934 4.12476 22.35 4.79052 21.6843L20.1754 6.29938C20.4938 5.98097 20.9714 5.9086 21.4201 5.99544C21.8832 6.08228 22.3898 5.95202 22.7516 5.60467L26.4712 1.87061C27.8317 0.510141 28.9461 0.958806 28.9461 2.8982Z"
                              fill="white"
                            />
                            <path
                              opacity="0.4"
                              d="M18.294 5.2863L3.14066 20.4396C2.44595 21.1343 1.2881 20.9606 0.824966 20.0923C0.289462 19.1081 0 17.9647 0 16.7635V2.89824C0 0.958842 1.11443 0.510176 2.4749 1.87065L6.20895 5.61918C6.77341 6.16915 7.69968 6.16915 8.26413 5.61918L13.4455 0.423338C14.0099 -0.141113 14.9362 -0.141113 15.5007 0.423338L18.3085 3.23112C18.8584 3.79557 18.8584 4.72185 18.294 5.2863Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </div>
                      <h5 className="mt-4 mb-3">Professional Plan</h5>
                      <p className="mb-4 fs-sm">
                        Make your work easier with an integrated
                        <br /> properly together.
                      </p>
                      <ul className="dg-feature-list list-unstyled d-inline-block text-start p-0">
                        <li className="fs-sm">
                          <span className="me-2">
                            <i className="fas fa-check"></i>
                          </span>
                          Get answers in real-time
                        </li>
                        <li className="fs-sm">
                          <span className="me-2">
                            <i className="fas fa-check"></i>
                          </span>
                          Report on what matters
                        </li>
                        <li className="fs-sm">
                          <span className="me-2">
                            <i className="fas fa-check"></i>
                          </span>
                          Collaborate seamlessly
                        </li>
                        <li className="fs-sm">
                          <span className="me-2">
                            <i className="fas fa-check"></i>
                          </span>
                          Update plans on the fly
                        </li>
                        <li className="fs-sm">
                          <span className="me-2">
                            <i className="fas fa-check"></i>
                          </span>
                          Every corner of the business
                        </li>
                      </ul>
                      <div className="dg-pricing-amount d-inline-block rounded-4 bg-dg-primary">
                        <h2>
                          $180
                          <span className="ms-2 fs-md fw-normal">/year</span>
                        </h2>
                        <a href="#" className="btn dg-outline-btn rounded-pill">
                          Purchase Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="dg-pricing-column text-center bg-white rounded-4 position-relative z-1">
                      <img
                        src="/digital-agency/circle-shape.png"
                        alt="circle shape"
                        className="position-absolute start-0 top-0 z--1"
                      />
                      <div className="icon-wrapper d-inline-block rounded-circle bg-white bg-color-3">
                        <span className="d-inline-flex align-items-center justify-content-center rounded-circle w-100 h-100">
                          <svg
                            width="22"
                            height="24"
                            viewBox="0 0 22 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.4"
                              d="M18.3004 4.40412L4.2121 18.4925C3.68409 19.0205 2.79607 18.9485 2.36406 18.3245C0.876021 16.1524 0 13.5843 0 10.9443V5.67615C0 4.69213 0.744018 3.5761 1.65604 3.20409L8.34021 0.468024C9.08587 0.159037 9.88511 0 10.6923 0C11.4994 0 12.2987 0.159037 13.0443 0.468024L17.8924 2.44807C18.6965 2.77208 18.9005 3.80411 18.3004 4.40412Z"
                              fill="white"
                            />
                            <path
                              d="M19.4307 6.05063C20.2107 5.39062 21.3988 5.95463 21.3988 6.97466V10.9468C21.3988 16.8149 17.1387 22.311 11.3185 23.9191C10.9225 24.0271 10.4905 24.0271 10.0825 23.9191C8.39798 23.446 6.82095 22.6513 5.43838 21.579C4.86237 21.135 4.80236 20.295 5.30638 19.779C7.92244 17.1029 15.5786 9.30271 19.4307 6.05063Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </div>
                      <h5 className="mt-4 mb-3">Enterprise Plan</h5>
                      <p className="mb-4 fs-sm">
                        Make your work easier with an integrated
                        <br /> properly together.
                      </p>
                      <ul className="dg-feature-list list-unstyled d-inline-block text-start p-0">
                        <li className="fs-sm">
                          <span className="me-2">
                            <i className="fas fa-check"></i>
                          </span>
                          Get answers in real-time
                        </li>
                        <li className="fs-sm">
                          <span className="me-2">
                            <i className="fas fa-check"></i>
                          </span>
                          Report on what matters
                        </li>
                        <li className="fs-sm">
                          <span className="me-2">
                            <i className="fas fa-check"></i>
                          </span>
                          Collaborate seamlessly
                        </li>
                        <li className="fs-sm">
                          <span className="me-2">
                            <i className="fas fa-check"></i>
                          </span>
                          Update plans on the fly
                        </li>
                        <li className="fs-sm">
                          <span className="me-2">
                            <i className="fas fa-check"></i>
                          </span>
                          Every corner of the business
                        </li>
                      </ul>
                      <div className="dg-pricing-amount d-inline-block rounded-4">
                        <h2>
                          $225
                          <span className="ms-2 fs-md fw-normal">/year</span>
                        </h2>
                        <a href="#" className="btn dg-outline-btn rounded-pill">
                          Purchase Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="/digital-agency/pr-doted.png"
            alt="doted shape"
            className="pr-doted position-absolute z--1"
          />
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyPricing;
