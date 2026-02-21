import styled from "styled-components";
import HeroBanner from "../components/HeroBanner";

const AboutStyle = styled.section`
  padding: 2rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ResponsiveContainer = styled.div`
  width: min(90%, 1280px);
  margin: 0 auto;

  p {
    margin-bottom: 1rem;

    @media (min-width: 1024px) {
      width: 60%;
      margin-left: auto;
      margin-right: auto;
    }
  }

  p:last-of-type {
    margin-bottom: 0;
  }
`

const AboutPage = () => {
  return (
    <>
      <HeroBanner title="About Me" subtitle="Past, current and future..." />
      <AboutStyle>
        <ResponsiveContainer>
          <p>
            Hello, I'm Andrew — a frontend-focused web developer passionate about building user-first applications that are both functional and visually engaging.
          </p>
          <p>
            Before stepping into tech, I worked in online safety as an Investigations Specialist, ensuring platform communities stayed safe and welcoming. That experience taught me how to analyse problems, think critically, and make well-informed decisions — skills I now bring to solving development challenges.
          </p>
          <p>
            Since transitioning into web development, I’ve immersed myself in modern frontend technologies, particularly React and JavaScript, while exploring UI/UX design, accessibility, and clean, maintainable code. I enjoy breaking complex problems into manageable steps and experimenting creatively to deliver elegant, performant solutions.
          </p>
          <p>
            Looking ahead, I’m eager to work with teams and clients who value thoughtful, user-focused design. I’m ready to bring both my analytical mindset and creative drive to every project, crafting interfaces that are as engaging as they are effective.
          </p>
        </ResponsiveContainer>
      </AboutStyle>
    </>
  );
};

export default AboutPage;