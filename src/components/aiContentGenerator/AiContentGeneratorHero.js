import Link from "next/link";

const AiContentGeneratorHero = () => {
  return (
    <>
      <div className="ail-hero-area pt-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="text-center">
                <h1 className="ail-hero-title text-black fs-72">
                  Copywriting AI <br />
                  With a{" "}
                  <span className="ail-highlighted-text">
                    Predictable Results
                  </span>
                </h1>
                <p className="ail-body-color fs-20 fch-55 mx-auto">
                  Create SEO-optimized and plagiarism-free content for your
                  blogs, ads, emails, & website 10X faster.
                </p>
                <Link
                  href="/ai-content-generator"
                  className="btn ail-gd-bg dark-bg-hover rounded-5 text-white fs-16 border-0 mt-20"
                >
                  Start Writing for free
                </Link>
                <img
                  src="/ail_home/hero.png"
                  alt=""
                  className="ail-hero-img img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiContentGeneratorHero;
