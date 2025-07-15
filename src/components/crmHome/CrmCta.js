import Link from "next/link";
import React from "react";

const CrmCta = () => {
  return (
    <section className="crm-cta-section ptb-80 crm-bg-yellow-light position-relative z-1">
      <img
        src="/shape/circle-half.png"
        alt="circle half"
        className="position-absolute circle-half z--1"
      />
      <img
        src="/shape/dot-red.png"
        alt="doted"
        className="position-absolute doted z--1 d-none d-md-block"
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7">
            <div className="crm-title text-center">
              <span className="crm-subtitle">
                Get In Touch{" "}
                <img src="/shape/arrow-red.png" alt="arrow" className="ms-1" />
              </span>
              <h2 className="mt-2 mb-3 clr-text">
                Start selling smarter <br /> better & faster
              </h2>
              <p className="mb-0">
                Get a complete view of all customer data—personal details, all
                communication you've had with
              </p>
              <Link href="/crm-home" className="btn crm-primary-btn mt-40">
                Sign up Free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrmCta;
