import SiteConditionsCard from "../components/home/SiteConditionsCard";
import ContinueLearningCard from "../components/home/ContinueLearningCard";
import FeaturedComponentsCard from "../components/home/FeaturedComponentsCard";
import InspectionStagesCard from "../components/home/InspectionStagesCard";

import HomeHeader from "../components/common/HomeHeader";

import "../components/home/HomeCards.css";
import "./HomePage.css";

// ---------------------------------- //

function HomePage() {
  return (
    <section className="home-page">
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
