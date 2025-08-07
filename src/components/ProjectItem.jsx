import styled, { keyframes } from "styled-components";
import projects from "../utils/projects";
import { FaChrome, FaGithub } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";
import TechStackGroup from "./TechStackGroup";
import { Plus } from "lucide-react";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-2rem);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    opacity: 1;
  }
`

const Container = styled.div`
  background-color: rgba(var(--primary-color), 0.06);
  border: 2px solid rgba(var(--primary-color), 0.2);
  padding: 1rem;
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
  padding: 1rem 0.5rem;

  @media (min-width: 1024px) {
    margin: 2rem 0 0 0;
  }

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
  gap: 0.5rem 1rem;
  flex-wrap: wrap;
`

const IconContainer = styled.div`
  aspect-ratio: 1 / 1;
  height: 1.4rem;
  transform: ${({$expanded}) => $expanded ? "rotate(45deg)" : "rotate(0deg)"};
  transition: transform 0.3s ease;

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

const StackHeader = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding: 0.5rem;
  width: 100%;
  color: inherit;
  border: none;
  background-color: rgba(var(--primary-color), 0.06);
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 1rem 0.5rem;
  }
`

const TechStackWrapper = styled.div`
  animation: ${fadeIn} 2s ease;
`

const ProjectItem = ({ projectIndex, stackExpanded, toggleStackExpanded }) => {

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
      <>
        <StackHeader
          onClick={toggleStackExpanded}
          aria-label="Toggle project tech stack"
          aria-expanded={stackExpanded}
        >
          <h3>Technology Stack</h3>
          <IconContainer
            aria-hidden="true"
            $expanded={stackExpanded}
          >
            <Plus />
          </IconContainer>
        </StackHeader>
        {stackExpanded &&
        <TechStackWrapper>
          <TechStackGroup categoryTitle="Front End" category="frontend" project={project.techstack.frontend} />
          <TechStackGroup categoryTitle="Back End" category="backend" project={project.techstack.backend} />
          <TechStackGroup categoryTitle="Testing" category="testing" project={project.techstack.testing} />
          <TechStackGroup categoryTitle="Tools & Hosting" category="tools" project={project.techstack.tools} />
        </TechStackWrapper>
        }
      </>
    </Container>
  );
};

export default ProjectItem;