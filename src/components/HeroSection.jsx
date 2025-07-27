import styled from "styled-components";

const HeroStyle = styled.section`
  padding: 1rem 0;
  background-color: rgba(var(--primary-color), 0.1);
`

const ResponsiveContainer = styled.div`
  width: min(80%, 1280px);
  margin: 0 auto;
  text-align: center;
`

const HeroSection = () => {
  return (
    <HeroStyle>
      <ResponsiveContainer>
        <h2>Andrew Travis</h2>
        <p>Manchester, England</p>
        <p>Full Stack Web Developer</p>
        <p>Reactjs | Nodejs</p>
      </ResponsiveContainer>
    </HeroStyle>
  );
};

export default HeroSection;