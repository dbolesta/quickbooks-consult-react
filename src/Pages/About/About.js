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
    padding-top: 0;
  }

  p {
    text-align: left;
  }
`;

const CheckList = styled.ul`
  list-style-type: none;
  text-align: left;
  text-indent: -14px;

  li {
    font-family: 'Raleway';
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`;

const About = () => {
  return (
    <ContentContainer>
      <Content>
        <div>
          <h2>About Me</h2>
          <p>
            I have recently relocated to the NH Lakes Region area
            after spending 30 years raising a family and managing a
            growing business in the fast paced NYC commercial
            marketing industry. Running my company entailed being a
            full charge bookkeeper. I learned throughout the years
            that I enjoy this process and the financial steps one
            takes to document a businesses activity correctly.
          </p>

          <p>
            Intuit’s QuickBooks® small business accounting program is
            flexible and versatile and allows for a complete financial
            picture for any organization.{' '}
          </p>

          <p>
            The mechanisms of running any company are universal. Being
            a small business owner, one is the CEO, COO, CFO, sales
            manager, customer relations, delivery service, human
            resources, and custodian. Titles don’t matter;
            responsibility and getting the job done well does.
          </p>
        </div>

        <h2>My Qualifications</h2>
        <CheckList>
          <li>
            <i class="fas fa-check-circle" /> Understands the
            mechanics and processes of running a profitable small
            business or convoluted family estate.
          </li>
          <li>
            <i class="fas fa-check-circle" /> A/P, A/R, inventory,
            benefit/union/medical liabilities, payroll tracking
          </li>
          <li>
            <i class="fas fa-check-circle" /> Small medical practice
            billing program available-- track dual billing and
            insurance deductions
          </li>
          <li>
            <i class="fas fa-check-circle" /> Tax and
            Accountant liaison: journal, ledger, trial balance
            reporting and statements
          </li>
          <li>
            <i class="fas fa-check-circle" /> Manual payroll, 940
            &amp; 941 filings, DOT truck taxes and federal/state/local
            mandates
          </li>
          <li>
            <i class="fas fa-check-circle" /> Honest, ethical,
            friendly, organized, and diligent attention to detail
          </li>
          <li>
            <i class="fas fa-check-circle" /> Reasonable and sliding
            scale pricing based on industry and services requested
          </li>
        </CheckList>
      </Content>
    </ContentContainer>
  );
};

export default About;
