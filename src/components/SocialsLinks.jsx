import styled from "styled-components";
import socials from "../utils/socials";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    flex-direction: column;
  }
`

const IconContainer = styled.div`
  aspect-ratio: 1 / 1;
  height: 2rem;

  svg {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`

const SocialsLinks = () => {
  return (
    <Container>
      {socials.map(({ name, url, icon }) => (
        <a href={url} key={name} target="_blank" rel="noopener noreferrer">
          <IconContainer>
            {icon}
          </IconContainer>
          <span>{name}</span>
        </a>
      ))}
    </Container>
  );
};

export default SocialsLinks;