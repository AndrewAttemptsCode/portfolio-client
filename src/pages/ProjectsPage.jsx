import FeaturedProjects from "../components/FeaturedProjects";
import HeroBanner from "../components/HeroBanner";

const ProjectsPage = () => {
  return (
    <>
      <HeroBanner title="Projects" subtitle="Explore Featured and Learning Achive projects" />
      <FeaturedProjects />
    </>
  );
};

export default ProjectsPage;