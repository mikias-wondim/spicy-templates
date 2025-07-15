const CreativeAgencyNewBlog = () => {
  return (
    <>
      <div className="sections">
        <div className="sections__head">
          <div className="container">
            <div className="row g-4">
              <div className="col-12">
                <h2 className="text-center about-title">Read Latest News</h2>
              </div>
              <div className="col-xl-6">
                <div className="d-flex flex-column flex-md-row">
                  <div className="flex-shrink-0">
                    <img
                      src="/blog-img-1.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="d-flex align-items-start flex-column p-4">
                    <span className="d-inline-block border rounded-pill py-2 px-4 lh-1 mb-3">
                      <small>Marketing</small>
                    </span>
                    <h4 className="mb-5">
                      <a href="#" className="blog-title about-title">
                        5 SEO Factors to Consider for your website to rank
                        better
                      </a>
                    </h4>
                    <div className="d-flex align-items-center gap-2 mt-auto mb-auto">
                      <div className="flex-shrink-0">
                        <img
                          src="/icon-cal.png"
                          alt="image"
                          className="img-fluid"
                        />
                      </div>
                      <span className="d-block blog-title fw-medium about-title">
                        22 Feb, 2022
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="d-flex flex-column flex-md-row">
                  <div className="flex-shrink-0">
                    <img
                      src="/blog-img-2.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="d-flex align-items-start flex-column p-4">
                    <span className="d-inline-block border rounded-pill py-2 px-4 lh-1 mb-3">
                      <small>Business</small>
                    </span>
                    <h4 className="mb-5">
                      <a href="#" className="blog-title about-title">
                        Business meeting 2024 in san Francisco product radey
                      </a>
                    </h4>
                    <div className="d-flex align-items-center gap-2 mt-auto mb-auto">
                      <div className="flex-shrink-0">
                        <img
                          src="/icon-cal.png"
                          alt="image"
                          className="img-fluid"
                        />
                      </div>
                      <span className="d-block blog-title fw-medium about-title">
                        22 Feb, 2022
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h6 className="mb-4 text-center about-title">
                Trusted by the best companies in the world
              </h6>
              <div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
                <img src="/brand-1.png" alt="image" className="img-fluid" />
                <img src="/brand-2.png" alt="image" className="img-fluid" />
                <img src="/brand-3.png" alt="image" className="img-fluid" />
                <img src="/brand-4.png" alt="image" className="img-fluid" />
                <img src="/brand-5.png" alt="image" className="img-fluid" />
                <img src="/brand-6.png" alt="image" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeAgencyNewBlog;
