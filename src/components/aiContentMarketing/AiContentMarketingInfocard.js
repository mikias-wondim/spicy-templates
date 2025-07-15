import Link from "next/link";

const AiContentMarketingInfocard = () => {
  return (
    <>
      <div className="ai-wt-info-card ptb-120">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6">
              <h2 className="aiwt-title text-black ff-risk-pri fs-48">
                User-Friendly Solution to Generate_
                <span className="ai-wt-brand-text fw-400">Content.</span>
              </h2>
            </div>
            <div className="col-xl-5">
              <p className="mb-0">
                AI writing tool for 1-click SEO-optimized articles, blog posts &
                affiliate content. Available in 48 languages, auto-posted to
                WordPress with AI affiliate content.
              </p>
            </div>
          </div>
          <div className="mt-20">
            <div className="row justify-content-center">
              <div className="col-xl-4 col-md-6">
                <div className="ai-wt-info-card bg-white p-4 risk-shadow rounded-16 mt-20">
                  <img className="mb-20" src="/ai-wt-home/info-1.png" alt="" />
                  <h4 className="text-black ff-risk-pri fs-20 m mb-20">
                    Generate Original, High-Quality Long-Form Content
                  </h4>
                  <p className="mb-0">
                    AI writing tool for 1-click SEO-Optimized articles blog
                    posts & affiliate content. auto posted to WordPress with AI
                    Images.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="ai-wt-info-card bg-white p-4 risk-shadow rounded-16 mt-20">
                  <img className="mb-20" src="/ai-wt-home/info-2.png" alt="" />
                  <h4 className="text-black ff-risk-pri fs-20 m mb-20">
                    Create Detailed Product Listings 10X Faster
                  </h4>
                  <p className="mb-0">
                    AI writing tool for 1-click SEO-Optimized articles blog
                    posts & affiliate content. auto posted to WordPress with AI
                    Images.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="ai-wt-info-card bg-white p-4 risk-shadow rounded-16 mt-20">
                  <img className="mb-20" src="/ai-wt-home/info-3.png" alt="" />
                  <h4 className="text-black ff-risk-pri fs-20 m mb-20">
                    Optimize Content for SEO to Rank in Search Results
                  </h4>
                  <p className="mb-0">
                    AI writing tool for 1-click SEO-Optimized articles blog
                    posts & affiliate content. auto posted to WordPress with AI
                    Images.
                  </p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="text-center mt-30">
                  <h5 className="mb-4 text-black fs-20">
                    Want to see our professional experience.{" "}
                    <Link href="/ai-content-marketing">
                      <span className="ai-wt-brand-text fw-400">
                        {" "}
                        Click here to View
                      </span>
                    </Link>{" "}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiContentMarketingInfocard;
