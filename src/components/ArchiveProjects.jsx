import styled from "styled-components";
import projects from "../utils/projects";

import ArchiveProjectsMenu from "./ArchiveProjectsMenu";
import ProjectItem from "./ProjectItem";
import { useState } from "react";

const ArchiveProjectsStyle = styled.section`
  padding: 1rem 0;
`

const ResponsiveContainer = styled.div`
  width: min(80%, 1280px);
  margin: 0 auto;
`

const ArchiveProjects = () => {
  const [stackExpanded, setStackExpanded] = useState(false);

  const toggleStackExpanded = () => {
    setStackExpanded((prev) => !prev);
  };

  return (
    <ArchiveProjectsStyle>
      <ResponsiveContainer>
        <h2>Learning Archive</h2>
        {projects.featured.map(({ title }, index) => (
          <div key={index}>
          <ArchiveProjectsMenu title={title} />
          <ProjectItem projectIndex={index} stackExpanded={stackExpanded} toggleStackExpanded={toggleStackExpanded} />
          {/* TODO: Hide project items by default
                Toggle project item based off menu index
                Selecting new project item closes previous project item
                Switch out featured for archive once working */}
          </div>
        ))}
      </ResponsiveContainer>
    </ArchiveProjectsStyle>
  );
};

export default ArchiveProjects;