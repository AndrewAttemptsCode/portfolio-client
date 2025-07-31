import styled from "styled-components";
import projects from "../utils/projects";
import { FaChrome, FaGithub } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";

const Container = styled.div`
  
`

const ResponsiveContainer = styled.div`
  
`

const ProjectPreview = styled.div`
  
`

const ImageContainer = styled.div`
  aspect-ratio: 3 / 2;
  background-color: rgba(var(--primary-color), 0.06);
`

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0.5rem 0 1rem 0;

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
  p {
    margin: 1rem 0;
  }
`

const StackContainer=  styled.div`

`

const ProjectItem = ({ projectIndex }) => {
  const project = projects.featured[projectIndex];

  return (
    <Container>
      <h3>{project.title}</h3>
      <ResponsiveContainer>
        <ProjectPreview>
          <ImageContainer>
            img here
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
        stacks here
      </StackContainer>
    </Container>
  );
};

export default ProjectItem;