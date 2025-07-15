const DesignAgencyOneHero = () => {
  return (
    <>
      <div className="design-agency-hero bg-design-agency position-relative">
        <img
          src="/design-agency/line_shape.png"
          alt=""
          className="position-absolute w-100 shape_one"
        />
        <img
          src="/design-agency/shape_three.png"
          alt=""
          className="position-absolute shape_three"
        />
        <img
          src="/design-agency/shape_four.png"
          alt=""
          className="position-absolute shape_four"
        />
        <img
          src="/design-agency/shape_five.png"
          alt=""
          className="position-absolute shape_five"
        />
        <img
          src="/design-agency/shape_six.png"
          alt=""
          className="position-absolute shape_six"
        />
        <img
          src="/design-agency/shape_seven.png"
          alt=""
          className="position-absolute shape_seven"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center position-relative z-5">
                <h1 className="design-agency-hero__title clr-white">
                  DIGITAL PR
                  <span>
                    <img
                      src="/design-agency/o_shape1.png"
                      className="design-agency-hero_title-shape"
                      alt=""
                    />
                  </span>
                  DUCT
                </h1>
                <h2 className="design-agency-hero__title title-2 clr-white margin-bottom-20">
                  AGENCY COMPNAY
                </h2>
                <div className="design-agency-hero__img-box position-relative">
                  <img
                    src="/design-agency/hero_img.png"
                    alt=""
                    className="design-agency-hero__img position-relative"
                  />
                  <img
                    src="/design-agency/hero_shape.png"
                    alt=""
                    className="shape position-absolute"
                  />
                  <img
                    src="/design-agency/shape_two.png"
                    alt=""
                    className="shape_two position-absolute"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignAgencyOneHero;
