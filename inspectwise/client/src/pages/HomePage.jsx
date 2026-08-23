import { useState } from "react";

import SiteConditionsCard from "../components/home/SiteConditionsCard";
import ContinueLearningCard from "../components/home/ContinueLearningCard";
import FeaturedComponentsCard from "../components/home/FeaturedComponentsCard";
import InspectionStagesCard from "../components/home/InspectionStagesCard";
import HomeIntro from "../components/home/HomeIntro";

import HomeHeader from "../components/common/HomeHeader";

import "../components/home/HomeCards.css";
import "./HomePage.css";

// ---------------------------------- //

function HomePage() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <section className="home-page">
      {showIntro && <HomeIntro onComplete={() => setShowIntro(false)} />}

      <HomeHeader />

      <div className="home-dashboard">
        <SiteConditionsCard />
        <ContinueLearningCard />
        <FeaturedComponentsCard />
        <InspectionStagesCard />
      </div>
    </section>
  );
}

// ---------------------------------- //

export default HomePage;
