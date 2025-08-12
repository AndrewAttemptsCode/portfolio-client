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
  width: min(80%, 1280px);
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
            Hello, I'm Andrew — a full stack web developer who enjoys building user-focused applications that are both functional and visually engaging.
          </p>
          <p>
            Before stepping into tech, I worked in the online safety space as an Investigations Specialist, ensuring platform communities stayed safe and welcoming. It was challenging, high-responsibility work that taught me how to analyse problems, think critically, and make well-informed decisions. While I’m grateful for those skills, I realised my true passion lay in creating and building, not enforcing and investigating — so I made the leap into web development.
          </p>
          <p>
            Since then, I’ve immersed myself in the world of modern web technologies, from React and JavaScript on the frontend to Node.js and PostgreSQL on the backend. I’ve built custom portfolio projects, experimented with UI/UX design principles, and developed a deep appreciation for writing clean, maintainable code that scales.
          </p>
          <p>
            My approach to development is shaped by my analytical background — I like to break down complex challenges into manageable steps, while still leaving room for creative experimentation. Whether it’s optimising performance, or improving accessibility, I’m always aiming for solutions that are both elegant and effective.
          </p>
          <p>
            Looking ahead, I’m excited to work with teams and clients who share my passion for creating thoughtful, user-first applications. I’m ready to bring both my creative drive and analytical mindset to the next challenge.
          </p>
        </ResponsiveContainer>
      </AboutStyle>
    </>
  );
};

export default AboutPage;