import React from 'react';
import styled from 'styled-components/macro';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Error from './Error';

const FormContainer = styled.div`
  /* padding: 2rem; */
  display: flex;

  & > form {
    width: 100%;
  }

  .thanks-for-sending {
    text-align: center;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
  padding: 0 1rem !important;

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

  .has-error {
    border: 2px solid red;
  }

  .form-message {
    padding-top: 0.5rem;
    display: block;
    font-size: 0.9rem;
    color: red;
  }
`;

const ContactForm = ({
  values,
  errors,
  touched,
  isSubmitting,
  status
}) => (
  <FormContainer>
    <Form>
      <FormGroup>
        <label htmlFor="name">Your Name</label>
        <Field
          type="name"
          name="name"
          placeholder="Enter your name"
          className={touched.name && errors.name ? 'has-error' : null}
        />
        <Error touched={touched.name} message={errors.name} />
      </FormGroup>
      <FormGroup>
        <label htmlFor="email">Your Email</label>
        <Field
          type="email"
          name="email"
          placeholder="Enter your Email"
          className={
            touched.email && errors.email ? 'has-error' : null
          }
        />
        <Error touched={touched.email} message={errors.email} />
      </FormGroup>
      <FormGroup>
        <label htmlFor="name">Your Message</label>
        <Field
          component="textarea"
          name="message"
          rows="10"
          placeholder="Enter your message"
          className={
            touched.message && errors.message ? 'has-error' : null
          }
        />
        <Error touched={touched.message} message={errors.message} />
      </FormGroup>

      {status ? (
        <p className="thanks-for-sending">
          Thanks! I'll get back to you as soon as I can!
        </p>
      ) : null}

      <FormGroup>
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </FormGroup>
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
  handleSubmit(
    values,
    { resetForm, setErrors, setStatus, setSubmitting }
  ) {
    // console.log('sending message');
    // console.log(values);
    // setSubmitting(false);
    setSubmitting(false);
    axios
      .post('https://formcarry.com/s/lBQFkt4kkeL', values, {
        headers: { Accept: 'application/json' }
      })
      .then(function(response) {
        resetForm();
        setStatus({ success: true }); // so we can have a success message
      })
      .catch(function(error) {
        console.log(error);
        console.log('this was an error!');
      });
  }
})(ContactForm);

export default FormikForm;
