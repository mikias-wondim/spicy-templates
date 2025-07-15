import Link from "next/link";
import React from "react";

const CrmIntegration = () => {
  return (
    <section className="crm-integration bg-white pt-120 pb-80">
      <div className="container">
        <div className="row justify-content-between align-items-center g-4">
          <div className="col-lg-6">
            <div className="crm-appss-circle">
              <img src="/crm/apps.png" alt="apps" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="crm-integration-content">
              <div className="crm-title">
                <span className="crm-subtitle">
                  Integration Software{" "}
                  <img
                    src="/shape/arrow-red.png"
                    alt="arrow"
                    className="ms-1"
                  />
                </span>
                <h2 className="mt-2 mb-3">
                  Integrated with Quiety <br /> Used Software
                </h2>
                <p>
                  Objectively strategize e-business e-tailers after an expanded
                  array of communities. Conveniently aggregate integrated best
                  practices whereas resource sucking results. Appropriately
                  network collaborative portals without progressive channels.
                </p>
                <p>
                  Bring in quality leads, nurture them, and turn them into
                  happy, paying customers. Get a complete view of all customer
                  data—personal details, all communication you've had with them,
                  and more—all in a single place.
                </p>
              </div>
              <Link href="/crm-home" className="btn crm-secondary-btn mt-4">
                Browse All Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrmIntegration;
