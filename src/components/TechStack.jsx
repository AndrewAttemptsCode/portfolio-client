import styled from "styled-components";
import TechStackGroup from "./TechStackGroup";

const TechStackStyle = styled.section`
  padding: 1rem 0;
`

const TechStackContainer = styled.div`
  width: min(90%, 1280px);
  margin: 0 auto;
`

const TechStack = () => {
  return (
    <TechStackStyle>
      <TechStackContainer>
        <h2>Technology Stack</h2>
        <TechStackGroup categoryTitle="Front End" category="frontend" />
        <TechStackGroup categoryTitle="Back End" category="backend" />
        <TechStackGroup categoryTitle="Build Tools" category="buildTools" />
        <TechStackGroup categoryTitle="Testing" category="testing" />
        <TechStackGroup categoryTitle="Version Control" category="versionControl" />
        <TechStackGroup categoryTitle="Hosting" category="hosting" />
        <TechStackGroup categoryTitle="Tools" category="tools" />
      </TechStackContainer>
    </TechStackStyle>
  );
};

export default TechStack;