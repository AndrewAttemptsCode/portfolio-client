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
  }
`

const AnimationContainer = styled.div`
  overflow: hidden;
`

const StyledSpan = styled.span`
  display: inline-block;
  min-width: 6ch;
  color: rgba(var(--primary-font-color), 0.7);
  transform: ${({$animate}) => ($animate ? "translateX(0%)" : "translateX(-100%)")};
  transition: transform 0.3s ease;
`

const HeaderLogo = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {

    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 300);

    return () => clearTimeout(timeout);

  }, []);

  return (
    <Container>
      <h1>Andrew 
        <AnimationContainer>
          <StyledSpan $animate={animate}>Travis</StyledSpan>
        </AnimationContainer>
      </h1>
    </Container>
  );
};

export default HeaderLogo;