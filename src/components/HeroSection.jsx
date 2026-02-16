import styled from "styled-components";
import SocialsLinks from "./SocialsLinks";

const HeroStyle = styled.section`
  padding: 1rem 0;
  background-color: rgba(var(--primary-color), 0.06);
  min-height: 30vh;
  min-height: 30dvh;
`

const ResponsiveContainer = styled.div`
  width: min(80%, 1280px);
  margin: 0 auto;
  text-align: center;
  min-height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    line-height: 1;
    margin-bottom: 1rem;
  }

  p:last-of-type {
    margin: 1rem 0;
  }
`

const HeroSection = () => {
  return (
    <HeroStyle>
      <ResponsiveContainer>
        <h2>Andrew Travis</h2>
        <p>Frontend-Focused Full-Stack Web Developer</p>
        <p>Manchester, England</p>
        <p>React • TypeScript • JavaScript • Node.js • PostgreSQL • UI/UX • Accessibility</p>
        <SocialsLinks />
      </ResponsiveContainer>
    </HeroStyle>
  );
};

export default HeroSection;