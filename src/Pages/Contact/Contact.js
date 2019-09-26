import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  margin-bottom: 3rem;

  @media (max-width: 900px) {
    padding: 0 0.25rem;
  }
`;

const Content = styled.section`
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
  border-radius: 10px;
  background-color: #f4f4f4;
  color: #333;
  padding: 2rem;

  div {
    padding: 2rem;
  }

  p {
    text-align: left;
  }

  a {
    color: #7fdbff;
  }
`;

const Contact = props => {
  return (
    <ContentContainer>
      <Content>
        <h2>Contact Me</h2>
        <p>
          Contact me at{' '}
          <a href="mailto:lindaquickbooks@gmail.com">
            lindaquickbooks@gmail.com
          </a>{' '}
          or (603) 279-0407 to discuss your QuickBooks® bookkeeping
          needs.
        </p>

        <form role="form" method="post" data-netlify="true">
          <div class="form-group">
            <label for="name"> Name:</label>
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              required
              maxlength="50"
            />
          </div>
          <div class="form-group">
            <label for="email"> Email:</label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              required
              maxlength="50"
            />
          </div>
          <div class="form-group">
            <label for="name"> Message:</label>
            <textarea
              class="form-control"
              type="textarea"
              name="message"
              id="message"
              placeholder="Your Message Here"
              maxlength="6000"
              rows="7"
            ></textarea>
          </div>
          <button
            type="submit"
            class="btn btn-lg btn-success pull-right"
            id="btnContactUs"
          >
            Post It! &rarr;
          </button>
        </form>
      </Content>
    </ContentContainer>
  );
};

export default Contact;
