import styled from "styled-components";
import projects from "../utils/projects";

const Container = styled.div`
  width: fit-content;
  border: 2px solid rgba(var(--primary-color), 0.2);
  border-bottom: none;
`

const Button = styled.button`
  color: inherit;
  border: none;
  padding: 1rem 1.5rem;
  cursor: pointer;
  font-weight: 700;
  background-color: ${({$selected}) => $selected ? "rgba(var(--primary-color), 0.06)" : "transparent"};
`

const FeaturedProjectsMenu = ({ projectIndex, updateSelectProject }) => {
  return (
    <Container>
      {projects.featured.map((_, index) => (
        <Button key={index}
         onClick={() => updateSelectProject(index)}
         $selected={index === projectIndex}
         aria-label={`Switch to featured project ${index + 1}`}
        >
          { index + 1 }
        </Button>
      ))}
    </Container>
  );
};

export default FeaturedProjectsMenu;