import Link from "next/link";

const SoftwareCompanyBlog = () => {
  return (
    <>
      <section className="sc-blog-section bg-white position-relative overflow-hidden z-1 ptb-120 border-line-bg">
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-xl-4 col-md-6">
              <article className="sc-blog-card bg-white rounded-4 overflow-hidden rounded-4 overflow-hidden">
                <div className="thumbnail overflow-hidden">
                  <Link href="/blog-single">
                    <img
                      src="/software-company/blog-1.jpg"
                      alt="blog thumb"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="sc-blog-card-content p-4">
                  <Link
                    href="/blog-single"
                    className="d-inline-block text-primary badge bg-primary-soft mb-3"
                  >
                    Web Design
                  </Link>
                  <Link href="/blog-single">
                    <h5 className="mb-3">
                      Dynamically maintain equity invested whereas distrib
                      potentialities
                    </h5>
                  </Link>
                  <p className="mb-4">
                    Appropriately empower robust infomediaries via resource
                    maximizing scenarios.
                  </p>
                  <div className="author-info d-flex align-items-center">
                    <img
                      src="/software-company/client-demo-1.png"
                      alt="not found"
                      className="rounded-circle"
                    />
                    <div className="authors-info-right ms-3">
                      <span className="title fw-bold fs-sm d-block">
                        Danielle M.Reese
                      </span>
                      <span className="meta d-block">12 December, 2022</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-xl-4 col-md-6">
              <article className="sc-blog-card bg-white rounded-4 overflow-hidden rounded-4 overflow-hidden">
                <div className="thumbnail overflow-hidden">
                  <Link href="/blog-single">
                    <img
                      src="/software-company/blog-2.jpg"
                      alt="blog thumb"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="sc-blog-card-content p-4">
                  <Link
                    href="/blog-single"
                    className="d-inline-block text-danger badge bg-danger-soft mb-3"
                  >
                    Software
                  </Link>
                  <Link href="/blog-single">
                    <h5 className="mb-3">
                      Dynamically maintain equity invested whereas distrib
                      potentialities
                    </h5>
                  </Link>
                  <p className="mb-4">
                    Appropriately empower robust infomediaries via resource
                    maximizing scenarios.
                  </p>
                  <div className="author-info d-flex align-items-center">
                    <img
                      src="/software-company/client-demo-2.png"
                      alt="not found"
                      className="rounded-circle"
                    />
                    <div className="authors-info-right ms-3">
                      <span className="title fw-bold fs-sm d-block">
                        Danielle M.Reese
                      </span>
                      <span className="meta d-block">12 December, 2022</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-xl-4 col-md-6">
              <article className="sc-blog-card bg-white rounded-4 overflow-hidden rounded-4 overflow-hidden">
                <div className="thumbnail overflow-hidden">
                  <Link href="/blog-single">
                    <img
                      src="/software-company/blog-3.jpg"
                      alt="blog thumb"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="sc-blog-card-content p-4">
                  <Link
                    href="#"
                    onClick={(e) => e.preventDefaultDefault()}
                    className="d-inline-block text-warning badge bg-warning-soft mb-3"
                  >
                    App Design
                  </Link>
                  <Link href="/blog-single">
                    <h5 className="mb-3">
                      Dynamically maintain equity invested whereas distrib
                      potentialities
                    </h5>
                  </Link>
                  <p className="mb-4">
                    Appropriately empower robust infomediaries via resource
                    maximizing scenarios.
                  </p>
                  <div className="author-info d-flex align-items-center">
                    <img
                      src="/software-company/client-demo-3.png"
                      alt="not found"
                      className="rounded-circle"
                    />
                    <div className="authors-info-right ms-3">
                      <span className="title fw-bold fs-sm d-block">
                        Danielle M.Reese
                      </span>
                      <span className="meta d-block">12 December, 2022</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SoftwareCompanyBlog;
