import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  z-index: 10;

  h1 {
    display: flex;
    gap: 0.4rem;
    font-size: 1.3rem;
    line-height: 1;
    margin: 0;
    padding: 0;
    opacity: ${({$fadeIn}) => ($fadeIn ? 1 : 0)};
    transition: opacity 1s ease;
  }
`

const AnimationContainer = styled.div`
  overflow: hidden;
`

const StyledSpan = styled.span`
  display: inline-block;
  min-width: 6ch;
  color: rgba(var(--primary-font-color), 0.7);
  transform: ${({$slideIn}) => ($slideIn ? "translateX(0%)" : "translateX(-100%)")};
  transition: transform 0.3s ease;
`

const HeaderLogo = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {

    setFadeIn(true);

    const timeout = setTimeout(() => {
      setSlideIn(true);
    }, 1000);

    return () => clearTimeout(timeout);

  }, []);

  return (
    <Container $fadeIn={fadeIn}>
      <h1>Andrew 
        <AnimationContainer>
          <StyledSpan $slideIn={slideIn}>Travis</StyledSpan>
        </AnimationContainer>
      </h1>
    </Container>
  );
};

export default HeaderLogo;