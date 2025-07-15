import React from "react";

const CorporateAgencyIndustry = () => {
  return (
    <div className="sections pb-0">
      {/* Section Head */}
      <div className="sections__head">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-7 col-xxl-6">
              <h2 className="text-center heading-text">
                Discover proven designs from industry leaders
              </h2>
              <p className="mb-0 text-center">
                Get inspired by designs that have been tested and proven
                effective
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Image Section */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <img src="/leader-img.png" alt="image" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateAgencyIndustry;
