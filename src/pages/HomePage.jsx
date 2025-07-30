import AboutCTA from "../components/AboutCTA";
import FeaturedProjects from "../components/FeaturedProjects";
import FocusTargets from "../components/FocusTargets";
import HeroSection from "../components/HeroSection"
import TechStack from "../components/TechStack";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutCTA />
      <FocusTargets />
      <TechStack />
      <FeaturedProjects />
    </>
  );
};

export default HomePage;