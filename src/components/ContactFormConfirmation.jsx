import styled from "styled-components";

const ContactFormConfirmationStyle = styled.section`
  padding: 1rem 0;
`

const ResponsiveContainer = styled.div`
  width: min(80%, 1280px);
  margin: 0 auto;
  background-color: rgba(var(--primary-color), 0.06);
  border: 2px solid rgba(var(--primary-color), 0.2);
  padding: 1rem;
  text-align: center;

  h2 {
    line-height: 1.1;
    margin-bottom: 1rem;
  }
`

const ContactFormConfirmation = ({ visitorName }) => {
  return (
    <ContactFormConfirmationStyle>
      <ResponsiveContainer>
        <h2>Thank you for getting in touch, {visitorName}.</h2>
        <p>Your message has been received, and I will get back to you as soon as possible.</p>
      </ResponsiveContainer>
    </ContactFormConfirmationStyle>
  );
};

export default ContactFormConfirmation;