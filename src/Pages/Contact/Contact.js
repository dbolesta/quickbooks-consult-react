import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  margin-bottom: 3rem;
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
`;

const Contact = props => {
  return (
    <ContentContainer>
      <Content>
        <h2>Contact Me</h2>
      </Content>
    </ContentContainer>
  );
};

export default Contact;
