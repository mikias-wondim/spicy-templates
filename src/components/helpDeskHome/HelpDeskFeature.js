import Link from "next/link";

const HelpDeskFeature = () => {
  const features = [
    {
      id: 1,
      title: "IT Quiety Desk for Internal Teams Support",
      description:
        "Distinctively initiate viral ideas for goal-oriented partnerships. Right network cross-media opportunities with cross-platform total linkage. Uniquely create turnkey value revolutionary applications.",
      imgSrc: "/help-desk/network.png",
      imgAlt: "not found",
      link: "/request-demo",
      order: "normal",
    },
    {
      id: 2,
      title: "Tech Support for Customers & External Users",
      description:
        "Distinctively initiate viral ideas for goal-oriented partnerships. Appropriately network cross-media opportunities with cross-platform total linkage. Uniquely create turnkey value rather than revolutionary applications. Dynamically architect.",
      imgSrc: "/help-desk/business-man.png",
      imgAlt: "not found",
      link: "/request-demo",
      order: "reverse",
    },
  ];
  return (
    <>
      <section className="hd-feature-section overflow-hidden">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="hd-title text-center">
                <h2 className="mb-0 clr-text">
                  Discover why Quiety is Unique{" "}
                  <mark className="bg-transparent p-0 position-relative">
                    Feature{" "}
                    <img
                      src="/shape/line-shape.png"
                      alt="line-shape"
                      className="position-absolute line-shape"
                    />
                  </mark>
                </h2>
              </div>
            </div>
          </div>
          <div className="mt-5">
            {features.map((feature, index) => (
              <div
                className={`row justify-content-between align-items-center g-5 ${
                  index % 2 !== 0 ? "flex-row-reverse" : ""
                }`}
                key={feature.id}
              >
                <div
                  className={`col-xl-5 col-lg-6 ${
                    feature.order === "reverse" ? "order-2" : ""
                  }`}
                >
                  <div className="hd-feature-content text-center text-lg-start">
                    <h3 className="mb-4 clr-text">{feature.title}</h3>
                    <p className="mb-4">{feature.description}</p>
                    <Link href={feature.link} className="read-more-link">
                      Try our demo{" "}
                      <i className="fas fa-arrow-right-long ms-1"></i>
                    </Link>
                  </div>
                </div>
                <div
                  className={`col-xl-5 col-lg-6 ${
                    feature.order === "reverse" ? "order-1" : ""
                  }`}
                >
                  <div className="hd-feature-img text-center text-lg-start">
                    <img
                      src={feature.imgSrc}
                      alt={feature.imgAlt}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpDeskFeature;
