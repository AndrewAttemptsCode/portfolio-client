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
    font-size: clamp(1.5rem, 1rem + 2.5vw, 3rem);
  }

  p {
    white-space: pre-line;
    font-size: clamp(1rem, 0.9167rem + 0.4167vw, 1.25rem);
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