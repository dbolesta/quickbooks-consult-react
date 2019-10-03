import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  /* padding: 2rem; */
  border: 1px solid red;
  display: flex;
`;
const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FormCol = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;

  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
  }
`;

const ContactForm = () => {
  return (
    <FormContainer>
      <form
        method="POST"
        action="https://formspree.io/itsaformspree@mailinator.com"
      >
        <input
          type="hidden"
          name="_next"
          value="https://www.nytimes.com"
        />
        <FormRow>
          <FormCol>
            <FormGroup>
              <label for="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />
            </FormGroup>
          </FormCol>

          <FormCol>
            <FormGroup>
              <label for="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
              />
            </FormGroup>
          </FormCol>
        </FormRow>

        <FormRow>
          <FormGroup>
            <label for="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="3"
              placeholder="Your Message"
            ></textarea>
          </FormGroup>
        </FormRow>

        <FormRow>
          <button type="submit">Send Test</button>
        </FormRow>
      </form>
    </FormContainer>
  );
};

export default ContactForm;
