import { useState } from "react";
import styled from "styled-components";

const ContactFormStyle = styled.section`
  padding: 1rem 0;
`

const ResponsiveContainer = styled.div`
  width: min(80%, 1280px);
  margin: 0 auto;
`

const Form = styled.form`
  background-color: rgba(var(--primary-color), 0.06);
  border: 2px solid rgba(var(--primary-color), 0.2);
  padding: 1rem;

  label, button {
    font-weight: 700;
  }

  input, textarea {
    width: 100%;
    padding: 0.25rem 0.5rem;
    margin-bottom: 0.5rem;
    color: inherit;
    background-color: rgba(var(--primary-color), 0.02);
    border: 2px solid rgba(var(--primary-color), 0.2);

    &::placeholder {
      color: rgba(var(--primary-color), 0.8);
    }

    &:focus {
      outline: none;
      border: 2px solid rgba(var(--primary-color), 0.6);
    }
  }

  textarea {
    min-height: 6rem;
    resize: vertical;
  }

  button {
    display: block;
    margin: 0 auto;
    padding: 0.25rem 0.5rem;
    background-color: transparent;
    border: 2px solid rgba(var(--primary-color), 0.2);
    color: inherit;
    cursor: pointer;
    width: 50%;
    transition: background-color 0.3s ease;

    &:focus {
      outline: none;
      border: 2px solid rgba(var(--primary-color), 0.6);
    }

    &:hover {
      background-color: rgba(var(--primary-color), 0.2);
    }
  }
`

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <ContactFormStyle>
      <ResponsiveContainer>
        <h2>Contact Me</h2>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleOnChange} placeholder="Alex Smith" />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleOnChange} placeholder="example@email.com" />
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" value={formData.message} onChange={handleOnChange} placeholder="Hi Andrew..."></textarea>
          <button type="submit" disabled={loading}>{loading ? "Processing" : "Send"}</button>
        </Form>
      </ResponsiveContainer>
    </ContactFormStyle>
  );
};

export default ContactForm;