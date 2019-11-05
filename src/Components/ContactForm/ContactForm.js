import React from 'react';
import styled from 'styled-components/macro';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

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

// class ContactForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: '', email: '', message: '' };
//   }

//   handleForm = e => {
//     axios
//       .post('https://formcarry.com/s/lBQFkt4kkeL', this.state, {
//         headers: { Accept: 'application/json' }
//       })
//       .then(function(response) {
//         console.log(response);
//       })
//       .catch(function(error) {
//         console.log(error);
//         console.log('this was an error!');
//       });

//     e.preventDefault();
//   };

//   handleFields = e =>
//     this.setState({ [e.target.name]: e.target.value });

//   render() {
//     return (
//       <FormContainer>
//         <form onSubmit={this.handleForm}>
//           <FormGroup>
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               onChange={this.handleFields}
//             />
//           </FormGroup>

//           <FormGroup>
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               onChange={this.handleFields}
//             />
//           </FormGroup>

//           <FormGroup>
//             <label htmlFor="message">Your Message</label>
//             <textarea
//               name="message"
//               id="message"
//               rows="5"
//               onChange={this.handleFields}
//             />
//           </FormGroup>

//           <FormGroup>
//             <button type="submit">Send</button>
//           </FormGroup>
//         </form>
//       </FormContainer>
//     );
//   }
// }

const ContactForm = ({ values, errors, touched, isSubmitting }) => (
  <FormContainer>
    <Form>
      <FormGroup>
        <label htmlFor="name">Your Name</label>
        <Field
          type="name"
          name="name"
          placeholder="Enter your name"
        />
        {touched.name && errors.name && <p>{errors.name}</p>}
      </FormGroup>
      <FormGroup>
        <label htmlFor="email">Your Email</label>
        <Field
          type="email"
          name="email"
          placeholder="Enter your Email"
        />
        {touched.email && errors.email && <p>{errors.email}</p>}
      </FormGroup>
      <FormGroup>
        <label htmlFor="name">Your Message</label>
        <Field
          component="textarea"
          name="message"
          rows="10"
          placeholder="Enter your message"
        />
        {touched.message && errors.message && <p>{errors.message}</p>}
      </FormGroup>

      <button disabled={isSubmitting} type="submit">
        Submit
      </button>
    </Form>
  </FormContainer>
);

const FormikForm = withFormik({
  mapPropsToValues({ name, email, message }) {
    return {
      name: name || '',
      email: email || '',
      message: message || ''
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Email not valid')
      .required('Email is required'),
    message: Yup.string().required('Message is required')
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    // console.log('sending message');
    // console.log(values);
    // setSubmitting(false);
    axios
      .post('https://formcarry.com/s/lBQFkt4kkeL', values, {
        headers: { Accept: 'application/json' }
      })
      .then(function(response) {
        console.log(response);
        console.log('sending it along?');
        console.log(values);
      })
      .catch(function(error) {
        console.log(error);
        console.log('this was an error!');
      });
  }
})(ContactForm);

export default FormikForm;
