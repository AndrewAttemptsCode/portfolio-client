import styled from "styled-components";
import techstacklist from "../utils/techstacklist";

const Container = styled.div`
  padding: 1rem 0;
`

const StackContainer = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
`

const ItemContainer = styled.a`
  aspect-ratio: 1 / 1;
  height: 7.75rem;
  color: inherit;
  text-decoration: none;
  padding: 1rem;
  background-color: rgba(var(--primary-color), 0.06);
  text-align: center;
  line-height: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid rgba(var(--primary-color), 0.2);
  }
`

const IconContainer = styled.div`
  aspect-ratio: 1 / 1;
  height: 3rem;
  margin: 0 auto;

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const TechStackGroup = ({ categoryTitle, category }) => {
  const list = techstacklist[category];

  return (
    <Container>
      <h3>{categoryTitle}</h3>
      <StackContainer>
        {list.map(({ title, url, icon }) => (
          <ItemContainer key={title} href={url} target="_blank" rel="noopener noreferrer">
            <IconContainer aria-hidden="true">
              {icon}
            </IconContainer>
            <p>{title}</p>
          </ItemContainer>
        ))}
      </StackContainer>
    </Container>
  );
};

export default TechStackGroup;