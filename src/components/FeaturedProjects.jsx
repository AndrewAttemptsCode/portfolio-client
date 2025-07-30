import styled from "styled-components";
import ProjectItem from "./ProjectItem";

const FeaturedProjectsStyle = styled.section`
  padding: 1rem 0;
`

const ResponsiveContainer = styled.div`
  width: min(80%, 1280px);
  margin: 0 auto;
`

const FeaturedProjects = () => {
  return (
    <FeaturedProjectsStyle>
      <ResponsiveContainer>
        <h2>Featured Projects</h2>
        <ProjectItem />
      </ResponsiveContainer>
    </FeaturedProjectsStyle>
  );
};

export default FeaturedProjects;
