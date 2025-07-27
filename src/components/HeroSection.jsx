import styled from "styled-components";
import SocialsLinks from "./SocialsLinks";

const HeroStyle = styled.section`
  padding: 1rem 0;
  background-color: rgba(var(--primary-color), 0.06);
`

const ResponsiveContainer = styled.div`
  width: min(80%, 1280px);
  margin: 0 auto;
  text-align: center;

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
        <p>Full-Stack Web Developer</p>
        <p>Manchester, England</p>
        <p>React • Node.js • Express • PostgreSQL • Prisma</p>
        <SocialsLinks />
      </ResponsiveContainer>
    </HeroStyle>
  );
};

export default HeroSection;