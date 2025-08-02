import styled from "styled-components";
import projects from "../utils/projects";
import { FaChrome, FaGithub } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";
import TechStackGroup from "./TechStackGroup";

const Container = styled.div`
  background-color: rgba(var(--primary-color), 0.06);
  border: 2px solid rgba(var(--primary-color), 0.2);
  padding: 1rem 1rem 0 1rem;
`

const ResponsiveContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    gap: 2rem;
  }
`

const ProjectPreview = styled.div`
    @media (min-width: 1024px) {
    flex: 1;
  }
`

const ImageContainer = styled.div`
  aspect-ratio: 3 / 2;
  background-color: rgb(var(--bg-color));
  box-shadow: 0 0 0.5rem 0.1rem rgba(var(--primary-color), 0.06);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
  background-color: rgba(var(--primary-color), 0.06);
  width: fit-content;
  padding: 1rem 0.5rem;

  a {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: inherit;
    text-decoration: none;
  }

`

const LinksWrapper = styled.div`
  display: flex;
  gap: 1rem;
`

const IconContainer = styled.div`
  aspect-ratio: 1 / 1;
  height: 1.4rem;

  svg {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`

const ProjectDetails = styled.div`
  background-color: rgba(var(--primary-color), 0.06);
  padding: 1rem 0.5rem;

  p {
    margin: 1rem 0;
  }

  p:last-of-type {
    margin-bottom: 0;
  }

  @media (min-width: 1024px) {
    flex: 1;
  }
`

const StackContainer = styled.div`
  h3 {
    margin-top: 1rem;
  }
`

const ProjectItem = ({ projectIndex }) => {
  const project = projects.featured[projectIndex];

  return (
    <Container>
      <h3>{project.title}</h3>
      <ResponsiveContainer>
        <ProjectPreview>
          <ImageContainer>
            <img src={project.image} alt="" />
          </ImageContainer>
          <LinksContainer>
            <LinksWrapper>
              {project.links.demo.map((url, index) => (
                <a href={url} key={index} target="_blank" rel="noopener noreferrer">
                  <IconContainer aria-hidden="true">
                    <FaChrome />
                  </IconContainer>
                  Demo
                </a>
              ))}
            </LinksWrapper>
            <LinksWrapper>
              {project.links.source.map((url, index) => (
                <a href={url} key={index} target="_blank" rel="noopener noreferrer">
                  <IconContainer aria-hidden="true">
                    <FaGithub />
                  </IconContainer>
                  Source
                </a>
              ))}
            </LinksWrapper>
          </LinksContainer>
        </ProjectPreview>
        <ProjectDetails aria-label="Project info">
          <IconContainer aria-hidden="true">
            <MdInfoOutline />
          </IconContainer>
          {project.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </ProjectDetails>
      </ResponsiveContainer>
      <StackContainer>
        <h3>Technology Stack</h3>
        <TechStackGroup categoryTitle="Front End" category="frontend" project={project.techstack.frontend} />
        <TechStackGroup categoryTitle="Back End" category="backend" project={project.techstack.backend} />
        <TechStackGroup categoryTitle="Testing" category="testing" project={project.techstack.testing} />
        <TechStackGroup categoryTitle="Tools & Hosting" category="tools" project={project.techstack.tools} />
      </StackContainer>
    </Container>
  );
};

export default ProjectItem;