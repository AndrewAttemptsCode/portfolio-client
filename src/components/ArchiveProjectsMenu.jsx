import { Plus } from "lucide-react";
import styled from "styled-components";

const DropdownMenu = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding: 0.5rem;
  width: 100%;
  color: inherit;
  background-color: rgba(var(--primary-color), 0.06);
  border: 2px solid rgba(var(--primary-color), 0.2);
  border-bottom: ${({$expanded}) => $expanded ? "none" : "null"};
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 1rem 1rem;
  }

  h3 {
    font-size: 1rem;
    opacity: ${({$expanded}) => $expanded ? "0" : "1"};

    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }
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

const ArchiveProjectsMenu = ({ title, projectExpanded, toggleProjectExpanded }) => {
  return (
    <DropdownMenu
      onClick={toggleProjectExpanded}
      $expanded={projectExpanded}
      aria-label="Expand learning archive project"
      aria-expanded={projectExpanded}
    >
      <h3>{title}</h3>
      <IconContainer
        aria-hidden="true"
        $expanded={projectExpanded}
      >
        <Plus />
      </IconContainer>
    </DropdownMenu>
  );
};

export default ArchiveProjectsMenu;