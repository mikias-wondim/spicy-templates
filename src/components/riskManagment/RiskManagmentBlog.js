import Link from "next/link";

const RiskManagmentBlog = () => {
  return (
    <>
      <div className="rm-blog-area pt-60 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="text-center">
                <h6 className="risk-sub-text fs-16 ff-risk-pri fw-700 mb-20">
                  Update Resource{" "}
                </h6>
                <h2 className="risk-title risk-color fs-42 ff-risk-pri flh-56 fw-800 mb-20">
                  Risk Management _
                  <span className="risk-highlight-color"> News </span>
                </h2>
                <p className="risk-color-two ff-dmsans fs-16 flh-28 mb-30">
                  As an ISACA member, you’ll gain access to special knowledge
                  resources including our white papers and webinars, and online
                  on-demand training.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="risk-blog bgc-white padding-6 pb-30 rounded-8 risk-shadow mt-20">
                <img
                  src="/risk_managment/blog.png"
                  alt=""
                  className="w-100 img-fluid rounded-8 mb-20"
                />
                <h6 className="risk-sub-text fs-16 ff-risk-pri fw-600 ch-mb-10">
                  Cyber Security
                </h6>
                <Link href="/risk-managment">
                  <h5 className="risk-color fs-20 ff-risk-pri fw-800 flh-28 mb-20">
                    8 Questions to Ask Potential ERM Software Vendors
                  </h5>
                </Link>
                <p className="risk-color-two ff-dmsans fs-16 flh-24 mb-0">
                  Special knowledge resources including our white papers and
                  webinars on-demand...
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="risk-blog bgc-white padding-6 pb-30 rounded-8 risk-shadow mt-20">
                <img
                  src="/risk_managment/blog_2.png"
                  alt=""
                  className="w-100 img-fluid rounded-8 mb-20"
                />
                <h6 className="risk-sub-text fs-16 ff-risk-pri fw-600 ch-mb-10">
                  Cyber Security
                </h6>
                <Link href="/risk-managment">
                  <h5 className="risk-color fs-20 ff-risk-pri fw-800 flh-28 mb-20">
                    Is there an out-of-the-box solution for Risk Management?
                  </h5>
                </Link>
                <p className="risk-color-two ff-dmsans fs-16 flh-24 mb-0">
                  Special knowledge resources including our white papers and
                  webinars on-demand...
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="risk-blog bgc-white padding-6 pb-30 rounded-8 risk-shadow mt-20">
                <img
                  src="/risk_managment/blog_3.png"
                  alt=""
                  className="w-100 img-fluid rounded-8 mb-20"
                />
                <h6 className="risk-sub-text fs-16 ff-risk-pri fw-600 ch-mb-10">
                  Cyber Security
                </h6>
                <Link href="/risk-managment">
                  <h5 className="risk-color fs-20 ff-risk-pri fw-800 flh-28 mb-20">
                    Is the ERM software hosted or installed?
                  </h5>
                </Link>
                <p className="risk-color-two ff-dmsans fs-16 flh-24 mb-0">
                  Special knowledge resources including our white papers and
                  webinars on-demand...
                </p>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/risk-managment"
                className="btn risk-gd-bg risk-hover-text-white clr-white ff-risk-pri fs-14 fw-600 border-0 mt-40"
              >
                More Resource
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RiskManagmentBlog;
