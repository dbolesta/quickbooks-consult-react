import React from 'react';
import styled from 'styled-components/macro';
import axios from 'axios';

const FormContainer = styled.div`
  /* padding: 2rem; */
  display: flex;

  & > form {
    width: 100%;
  }

  /* div {
    border: 1px solid green;
  } */
`;
const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0rem !important;
`;

const FormCol = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  padding: 0rem !important;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
  padding: 1rem !important;
  padding-top: 0 !important;

  label {
    display: block;
    margin-bottom: 0.5rem;
    text-align: left;
  }

  input,
  textarea {
    display: block;
    width: 100%;
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

  button {
    border: 2px solid #208d53;
    color: #208d53;
    background: transparent;
    padding: 1rem 2rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.1s background-color linear, 0.1s color linear;

    &:hover {
      color: white;
      background-color: #208d53;
    }
  }
`;

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
  }

  handleForm = e => {
    axios
      .post('https://formcarry.com/s/lBQFkt4kkeL', this.state, {
        headers: { Accept: 'application/json' }
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
        console.log('this was an error!');
      });

    e.preventDefault();
  };

  handleFields = e =>
    this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <FormContainer>
        <form onSubmit={this.handleForm}>
          <FormRow>
            <FormCol>
              <FormGroup>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={this.handleFields}
                />
              </FormGroup>
            </FormCol>

            <FormCol>
              <FormGroup>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={this.handleFields}
                />
              </FormGroup>
            </FormCol>
          </FormRow>

          <FormRow>
            <FormCol>
              <FormGroup>
                <label htmlFor="message">Your Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  onChange={this.handleFields}
                />
              </FormGroup>
            </FormCol>
          </FormRow>

          <FormRow>
            <FormCol>
              <FormGroup>
                <button type="submit">Send</button>
              </FormGroup>
            </FormCol>
          </FormRow>
        </form>
      </FormContainer>
    );
  }
}

export default ContactForm;
