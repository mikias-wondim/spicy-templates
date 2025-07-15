const CreativeAgencyOneAward = () => {
  return (
    <>
      <div className="ca-award-section bgc-background">
        <div className="container">
          <div className="row g-4 gy-5 gy-lg-0 justify-content-between align-items-center">
            <div className="col-lg-6 col-xl-5">
              <h4 className="heading-4 clr-text margin-bottom-8">
                The Awards Won By Our Featured Project
              </h4>
              <p className="margin-bottom-10 clr-paragraph">
                Our clients describe us as a product team which creates amazing
                UI/UX experiences, by crafting top-notch user experience.
              </p>
              <a
                href="#"
                className="link d-inline-flex text-center font-weight-semibold clr-text :clr-text border border-secondary-clr rounded-pill padding-y-5 padding-x-10 bgc-white lh-1"
              >
                Get Started
              </a>
            </div>
            <div className="col-lg-6">
              <div className="text-center text-lg-end">
                <img
                  src="/creative-agency/award-img.png"
                  alt="image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeAgencyOneAward;
