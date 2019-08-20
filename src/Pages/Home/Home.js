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
  overflow: hidden;

  div {
    padding: 2rem;
  }

  p {
    text-align: left;
  }
`;

const QuickFacts = styled.div`
  background-color: #e6e6e6;

  span {
    font-size: 1.4rem;
    display: block;
  }
`;

const Home = () => {
  return (
    <ContentContainer>
      <Content>
        <div>
          <h2>Remote Bookkeeping Services</h2>
          <p>
            Offering 30 years of successful experience to assist any
            small business or diversified family estate to properly
            organize and structure accurate record keeping utilizing
            the versatile and inexpensive QuickBooks® computer
            program, educating the client to easily maintain control
            and knowledge of their current financial status.
          </p>
          <p>
            Local NH Lakes Region, on-line clients throughout New
            England, New York, West Coast, Phoenix, and Chicago areas.
          </p>
        </div>
        <QuickFacts>
          <span>· Bookkeeping Services ·</span>
          <span>· QuickBooks® Consulting ·</span>
          <span>
            · Small Business &amp; Family Estate Finance Administrator
            ·
          </span>
          <span>· Accountant Liaison ·</span>
        </QuickFacts>
      </Content>
    </ContentContainer>
  );
};

export default Home;
