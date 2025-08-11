import styled from "styled-components";
import ContactForm from "../components/ContactForm";
import HeroBanner from "../components/HeroBanner";
import SocialsLinks from "../components/SocialsLinks";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
`

const ContactPage = () => {
  return (
    <>
      <HeroBanner title="Contact" subtitle={"Something peaked your interest?\n...send me a message!"}/>
      <Container>
        <ContactForm />
        <SocialsLinks />
      </Container>
    </>
  );
};

export default ContactPage;