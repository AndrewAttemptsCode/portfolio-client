import styled from "styled-components";
import ProjectItem from "./ProjectItem";
import FeaturedProjectsMenu from "./FeaturedProjectsMenu";
import { useState } from "react";

const FeaturedProjectsStyle = styled.section`
  padding: 1rem 0;
`

const ResponsiveContainer = styled.div`
  width: min(90%, 1280px);
  margin: 0 auto;
`

const FeaturedProjects = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [stackExpanded, setStackExpanded] = useState(false);

  const updateSelectProject = (index) => {
    setProjectIndex(index);
    setStackExpanded(false);
  };

  const toggleStackExpanded = () => {
    setStackExpanded((prev) => !prev);
  };

  return (
    <FeaturedProjectsStyle>
      <ResponsiveContainer>
        <h2>Featured Projects</h2>
        <FeaturedProjectsMenu projectIndex={projectIndex} updateSelectProject={updateSelectProject} />
        <ProjectItem projectIndex={projectIndex} projectType="featured" stackExpanded={stackExpanded} toggleStackExpanded={toggleStackExpanded} />
      </ResponsiveContainer>
    </FeaturedProjectsStyle>
  );
};

export default FeaturedProjects;
