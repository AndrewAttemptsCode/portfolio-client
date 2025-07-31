import styled from "styled-components";
import ProjectItem from "./ProjectItem";
import FeaturedProjectsMenu from "./FeaturedProjectsMenu";
import { useState } from "react";

const FeaturedProjectsStyle = styled.section`
  padding: 1rem 0;
`

const ResponsiveContainer = styled.div`
  width: min(80%, 1280px);
  margin: 0 auto;
`

const FeaturedProjects = () => {
  const [projectIndex, setProjectIndex] = useState(0);

  const updateSelectProject = (index) => {
    setProjectIndex(index);
  };

  return (
    <FeaturedProjectsStyle>
      <ResponsiveContainer>
        <h2>Featured Projects</h2>
        <FeaturedProjectsMenu projectIndex={projectIndex} updateSelectProject={updateSelectProject} />
        <ProjectItem projectIndex={projectIndex}/>
      </ResponsiveContainer>
    </FeaturedProjectsStyle>
  );
};

export default FeaturedProjects;
