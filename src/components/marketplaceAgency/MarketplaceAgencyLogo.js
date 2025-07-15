const MarketplaceAgencyLogo = () => {
  const logos = [
    "/home_37/logo-1.png",
    "/home_37/logo-2.png",
    "/home_37/logo-3.png",
    "/home_37/logo-4.png",
    "/home_37/logo-5.png",
    "/home_37/logo-6.png",
    "/home_37/logo-1.png",
    "/home_37/logo-2.png",
    "/home_37/logo-3.png",
    "/home_37/logo-4.png",
    "/home_37/logo-5.png",
    "/home_37/logo-6.png",
  ];
  return (
    <>
      <section className="ma-logo bg-light-subtle pt-60 pb-120">
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="d-inline-block px-4 py-1 rounded-pill border mb-3">
              <p className="text-black fw-bold mb-0">
                <span className="ma-warning-text">TRUSTED BY 200+ CLIENTS</span>{" "}
                AS THEIR UX DESIGN COMPANY
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div
            className="scroller-x mt-20"
            data-direction="left"
            data-speed="slow"
          >
            <ul className="list-unstyled p-0 m-0 d-flex gap-4 scroller-x__list">
              {logos.map((logo, index) => (
                <li key={index}>
                  <img src={logo} alt="Client logo" className="img-fluid" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketplaceAgencyLogo;
