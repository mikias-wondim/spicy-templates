const MarketplaceAgencyCard = () => {
  const cardData = [
    {
      id: 1,
      image: "/home_37/why-card-1.png",
      title: "Online Marketing",
      description:
        "We help to find a solution for your business fit and goals. On-Demand. Design. Develop. Launch.",
    },
    {
      id: 2,
      image: "/home_37/why-card-2.png",
      title: "Flat Monthly Rate",
      description:
        "We help to find a solution for your business fit and goals. On-Demand. Design. Develop. Launch.",
    },
    {
      id: 3,
      image: "/home_37/why-card-3.png",
      title: "Flat Monthly Rate",
      description:
        "We help to find a solution for your business fit and goals. On-Demand. Design. Develop. Launch.",
    },
    {
      id: 4,
      image: "/home_37/why-card-4.png",
      title: "Top-Notch Quality",
      description:
        "We help to find a solution for your business fit and goals. On-Demand. Design. Develop. Launch.",
    },
    {
      id: 5,
      image: "/home_37/why-card-5.png",
      title: "Flat Monthly Rate",
      description:
        "We help to find a solution for your business fit and goals. On-Demand. Design. Develop. Launch.",
    },
    {
      id: 6,
      image: "/home_37/why-card-6.png",
      title: "Top-Notch Quality",
      description:
        "We help to find a solution for your business fit and goals. On-Demand. Design. Develop. Launch.",
    },
  ];
  return (
    <>
      <section className="bg-light-subtle pt-120 pb-60">
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-5">
              <div className="position-relative h-100">
                <div className="ca-card-title">
                  <div className="d-inline-block px-4 py-1 rounded-pill border border-warning mb-3">
                    <p className="ma-warning-text fw-bold mb-0">Why Us</p>
                  </div>
                  <h2 className="ail-title text-black fs-48 fw-600 mb-4">
                    Innovating to Empower Businesses.
                  </h2>
                  <p className="mb-4">
                    We help to find a solution for your business fit and goals.
                    On-Demand. Design. Develop. Launch.
                  </p>
                  <div className="bg-white px-3 py-2 rounded-pill shadow d-inline-flex align-items-center gap-2">
                    <img
                      src="/home_37/why-user.png"
                      alt="image"
                      className="img-fluid"
                    />
                    <p className="mb-0">
                      <span className="text-primary fw-semibold">
                        +20k Active{" "}
                      </span>{" "}
                      Users Connected
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="row g-4">
                {cardData.map((card) => (
                  <div key={card.id} className="col-md-6">
                    <div className="bg-white px-4 py-4 rounded shadow-sm">
                      <img
                        src={card.image}
                        alt="image"
                        className="img-fluid mb-3"
                      />
                      <h6 className="heading-6 clr-text font-weight-bold mb-3">
                        {card.title}
                      </h6>
                      <p className="mb-0">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketplaceAgencyCard;
