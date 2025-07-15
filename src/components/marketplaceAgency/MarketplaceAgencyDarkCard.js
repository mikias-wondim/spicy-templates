import Link from "next/link";

const MarketplaceAgencyDarkCard = () => {
  const services = [
    {
      id: 1,
      title: "Branding & Graphic Design",
      description:
        "Our web design services can help rediscover your business’s image in the Internet marketplace",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "Our web design services can help rediscover your business’s image in the Internet marketplace",
    },
    {
      id: 3,
      title: "Website & App Design",
      description:
        "Our web design services can help rediscover your business’s image in the Internet marketplace",
    },
    {
      id: 4,
      title: "Application Development",
      description:
        "Our web design services can help rediscover your business’s image in the Internet marketplace",
    },
    {
      id: 5,
      title: "Figma to Webflow",
      description:
        "Our web design services can help rediscover your business’s image in the Internet marketplace",
    },
    {
      id: 6,
      title: "Software Development",
      description:
        "Our web design services can help rediscover your business’s image in the Internet marketplace",
    },
  ];

  return (
    <>
      <section className="ma-bg-2 pt-120 pb-120 position-relative z-1">
        <img
          src="/home_37/dark-card-shape.png"
          alt="Background shape"
          className="ma-dark-card-bg img-fluid h-100 position-absolute top-0 end-0 pe-none z-n1"
        />
        <div className="container">
          <div className="row align-items-center justify-content-between g-4">
            <div className="col-lg-7 col-xl-6">
              <div className="d-inline-block px-4 py-1 rounded-pill border border-warning mb-3">
                <p className="ma-warning-text fw-bold mb-0">What we do</p>
              </div>
              <h2 className="ail-title text-white fs-48 fw-600">
                What We Create, What You Can Enjoy
              </h2>
            </div>
            <div className="col-lg-5 col-xl-4">
              <p className="text-white mb-0">
                Clients trust us to provide designs that are meticulously
                crafted with skill and care to drive their business forward.
              </p>
            </div>
          </div>
          <div className="mt-40">
            <div className="row g-4">
              {services.map((service) => (
                <div key={service.id} className="col-md-6 col-xl-4">
                  <div className="ma-dark-card bg-white bg-opacity-10 px-4 py-4 rounded trans">
                    <h6 className="ma-warning-text fs-16 fw-bold mb-2">
                      0{service.id}
                    </h6>
                    <h5 className="text-white fs-20 fw-semibold mb-3">
                      {service.title}
                    </h5>
                    <p className="text-white mb-0">{service.description}</p>
                    <div className="ma-warning-gd ch-1 my-4"></div>
                    <Link
                      href="/marketplace-agency"
                      className="text-white fw-medium mb-0 d-flex align-items-center gap-3"
                    >
                      Explore More
                      <span className="ma-sm-btn bg-white rounded-circle fs-12">
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketplaceAgencyDarkCard;
