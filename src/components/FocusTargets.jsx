import styled from "styled-components";
import targets from "../utils/targets";

const FocusTargetsStyle = styled.section`
  padding: 1rem 0;
`

const ResponsiveContainer = styled.div`
  width: min(80%, 1280px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

const ItemContainer = styled.div`
  background-color: rgba(var(--primary-color), 0.06);
  padding: 1rem;

  @media (min-width: 768px) {
    flex: 1 0 15.625rem;
  }

  h3 {
    text-align: center;
  }

  p {
    text-align: center;
  }
`

const IconContainer = styled.div`
  aspect-ratio: 1 / 1;
  height: 4rem;
  width: auto;
  margin: 0 auto;

  svg {
    color: inherit;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const FocusTargets = () => {
  return (
    <FocusTargetsStyle>
      <ResponsiveContainer>
        {targets.map(({ title, description, icon }) => (
          <ItemContainer key={title}>
            <IconContainer aria-hidden="true">
              {icon}
            </IconContainer>
            <h3>{title}</h3>
            <p>{description}</p>
          </ItemContainer>
        ))}
      </ResponsiveContainer>
    </FocusTargetsStyle>
  );
};

export default FocusTargets;