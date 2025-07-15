import Link from "next/link";
import React from "react";

const CrmCrSection = () => {
  return (
    <section className="crm-cr-section bg-white pt-100 pb-120 overflow-hidden">
      <div className="container">
        <div className="row justify-content-center align-items-center g-5">
          <div className="col-lg-6">
            <div className="crm-cr-content pe-3">
              <div className="crm-title mb-5">
                <span className="crm-subtitle">
                  Integration Software{" "}
                  <img
                    src="/shape/arrow-red.png"
                    alt="arrow"
                    className="ms-1"
                  />
                </span>
                <h2 className="mt-2 mb-3">
                  Build Excellent Customer Relationships
                </h2>
                <p className="mb-0">
                  Bring in quality leads, nurture them, and turn them into
                  happy, paying customers. Get a complete view of all customer
                  data—personal details, all communication you've had with them,
                  and more—all in a single place.
                </p>
              </div>
              <Link href="/crm-home" className="btn crm-secondary-btn">
                Read More{" "}
                <span className="ms-1">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="crm-feature-img">
              <img src="/crm/girl.png" alt="girl" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrmCrSection;
