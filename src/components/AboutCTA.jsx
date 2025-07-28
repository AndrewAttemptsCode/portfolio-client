import { Link } from "react-router-dom";
import styled from "styled-components";

const AboutStyle = styled.section`
  padding: 1rem 0;
`

const ResponsiveContainer = styled.div`
  width: min(80%, 1280px);
  margin: 0 auto;
  text-align: center;

  h2 {
    line-height: 1;
  }

  a {
    color: inherit;
    text-decoration: none;
    border: 1px solid rgba(var(--primary-color), 1);
    background-color: rgba(var(--primary-color), 0.06);
    padding: 0.4rem 0.6rem;
  }

  a:hover {
    background-color: rgba(var(--primary-color), 0.15);
  }

  p {
    /* text-align: left; */
    margin: 1rem auto;

    @media (min-width: 768px) {
      width: 75%;
    }

    @media (min-width: 1024px) {
      width: 50%;
    }
  }
`

const AboutCTA = () => {
  return (
    <AboutStyle>
      <ResponsiveContainer>
        <h2>Risk Analyst turned Web Developer</h2>
        <p>Transitioned from data-driven decision making to building performant, user-focused websites.</p>
        <Link to={"about"}>Learn more</Link>
      </ResponsiveContainer>
    </AboutStyle>
  );
};

export default AboutCTA;