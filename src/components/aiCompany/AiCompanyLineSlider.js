import React from "react";

const AiCompanyLineSlider = () => {
  const items = [
    "WEB DEVELOPMENT",
    "SEO",
    "BRANDING",
    "MARKETING",
    "LARAVEL",
    "WORDPRESS",
    "UI UX",
    "DESIGN",
  ];

  return (
    <div className="aih-line-slider-area ah-bg pt-30 pb-30 overflow-hidden">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-12">
            <div className="ticker ticker--one">
              <div className="ticker-container">
                <div className="ticker-item">
                  <ul className="list list-row gap-4">
                    {items.map((item, index) => (
                      <li key={index}>
                        <div className="d-flex gap-4 align-items-center ps-5">
                          <span className="d-block flex-shrink-0">
                            <img src="/icon-star.png" alt="star" />
                          </span>
                          <span className="d-block">{item}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="ticker-item">
                  <ul className="list list-row gap-4">
                    {items.map((item, index) => (
                      <li key={index}>
                        <div className="d-flex gap-4 align-items-center">
                          <span className="d-block flex-shrink-0">
                            <img src="/icon-star.png" alt="star" />
                          </span>
                          <span className="d-block">{item}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="ticker ticker--two">
              <div className="ticker-container">
                <div className="ticker-item">
                  <ul className="list list-row gap-4">
                    {items.map((item, index) => (
                      <li key={index}>
                        <div className="d-flex gap-4 align-items-center ps-5">
                          <span className="d-block flex-shrink-0">
                            <img src="/icon-star.png" alt="star" />
                          </span>
                          <span className="d-block">{item}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="ticker-item">
                  <ul className="list list-row gap-4">
                    {items.map((item, index) => (
                      <li key={index}>
                        <div className="d-flex gap-4 align-items-center">
                          <span className="d-block flex-shrink-0">
                            <img src="/icon-star.png" alt="star" />
                          </span>
                          <span className="d-block">{item}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiCompanyLineSlider;
