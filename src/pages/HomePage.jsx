import AboutCTA from "../components/AboutCTA";
import ContactForm from "../components/ContactForm";
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
      <ContactForm />
    </>
  );
};

export default HomePage;