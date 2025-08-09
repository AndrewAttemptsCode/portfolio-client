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
  const [projectExpandedIndex, setProjectExpandedIndex] = useState(null);
  const [stackExpandedIndex, setStackExpandedIndex] = useState(null);

  const toggleStackExpanded = (index) => {
    setStackExpandedIndex((prev) => (prev === index ? null : index));
  };

  const toggleProjectExpanded = (index) => {
    setProjectExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <ArchiveProjectsStyle>
      <ResponsiveContainer>
        <h2>Learning Archive</h2>
        {projects.archive.map(({ title }, index) => (
          <div key={index}>
          <ArchiveProjectsMenu title={title} projectExpanded={projectExpandedIndex === index} toggleProjectExpanded={() => toggleProjectExpanded(index)} />
          {projectExpandedIndex === index &&
          <ProjectItem projectIndex={index} projectType="archive" stackExpanded={stackExpandedIndex === index} toggleStackExpanded={() => toggleStackExpanded(index)} />
          }
          </div>
        ))}
      </ResponsiveContainer>
    </ArchiveProjectsStyle>
  );
};

export default ArchiveProjects;