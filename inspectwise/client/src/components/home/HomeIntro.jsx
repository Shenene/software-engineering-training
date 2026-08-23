import { useEffect } from "react";

import inspectWiseLogo from "../../images/inspectwise-logo.svg";

import "./HomeIntro.css";

// ---------------------------------- //

function HomeIntro({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="home-intro" aria-hidden="true">
      <div className="home-intro__content">
        <div className="home-intro__logo">
          {/* <i className="bi bi-house-check-fill"></i> */}
          <img src={inspectWiseLogo} alt="" />
        </div>

        <h1 className="home-intro__title">InspectWise</h1>

        <p className="home-intro__tagline">Building inspection training</p>
      </div>
    </div>
  );
}

// ---------------------------------- //

export default HomeIntro;
