import styled from "styled-components";

const HeroBannerStyle = styled.section`
  padding: 1rem 0;
  background-color: rgba(var(--primary-color), 0.06);
  min-height: 30vh;
  min-height: 30dvh;
`

const ResponsiveContainer = styled.div`
  width: min(80%, 1280px);
  margin: 0 auto;
  min-height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;

  h2 {
    line-height: 1;
    text-transform: uppercase;
  }
`

const HeroBanner = ({ title, subtitle }) => {
  return (
    <HeroBannerStyle>
      <ResponsiveContainer>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </ResponsiveContainer>
    </HeroBannerStyle>
  );
};

export default HeroBanner;