import React from "react";

const serviceData = [
  {
    id: 1,
    title: "YouTube Marketing",
    description:
      "Quickly productivate resource with premier content. Intrinsicly deploy business platforms for goal.",
    imgSrc: "/service-icon-1.png",
  },
  {
    id: 2,
    title: "Paid Advertising",
    description:
      "Quickly productivate resource with premier content. Intrinsicly deploy business platforms for goal.",
    imgSrc: "/service-icon-2.png",
  },
  {
    id: 3,
    title: "Content Marketing",
    description:
      "Quickly productivate resource with premier content. Intrinsicly deploy business platforms for goal.",
    imgSrc: "/service-icon-3.png",
  },
  {
    id: 4,
    title: "YouTube Marketing",
    description:
      "Quickly productivate resource with premier content. Intrinsicly deploy business platforms for goal.",
    imgSrc: "/service-icon-1.png",
  },
  {
    id: 5,
    title: "Paid Advertising",
    description:
      "Quickly productivate resource with premier content. Intrinsicly deploy business platforms for goal.",
    imgSrc: "/service-icon-2.png",
  },
  {
    id: 6,
    title: "Content Marketing",
    description:
      "Quickly productivate resource with premier content. Intrinsicly deploy business platforms for goal.",
    imgSrc: "/service-icon-3.png",
  },
];

const CorporateAgencyService = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="service-section sections rounded-4">
            <div className="sections__head">
              <div className="row g-4 align-items-center">
                <div className="col-md-8">
                  <div className="d-flex align-items-center gap-1 mb-4">
                    <span className="service-section__subtitle d-inline-block fw-semibold">
                      Our Services
                    </span>
                    <span className="d-inline-block flex-shrink-0">
                      <img
                        src="/icon-arrow-curve.png"
                        alt="Our Services"
                        className="img-fluid"
                      />
                    </span>
                  </div>
                  <h2 className="mb-0">
                    A collection of sales tools designed with revenue growth in
                    mind
                  </h2>
                </div>
                <div className="col-md-4">
                  <div className="text-center text-md-end">
                    <img
                      src="/service-section-img.png"
                      alt="Service Section"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4">
              {serviceData.map((service) => (
                <div className="col-md-6 col-lg-4" key={service.id}>
                  <div className="card service-card border-0">
                    <div className="card-body">
                      <div className="mb-32">
                        <img
                          src={service.imgSrc}
                          alt={service.title}
                          className="img-fluid"
                        />
                      </div>
                      <h6 className="service-card__title heading-text">
                        {service.title}
                      </h6>
                      <p className="mb-0">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateAgencyService;
