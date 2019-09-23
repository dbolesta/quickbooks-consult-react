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

  h3 {
    text-align: left;
    font-weight: 500;
  }

  a {
    color: #7fdbff;
  }
`;

const Rates = props => {
  return (
    <ContentContainer>
      <Content>
        <h2>Rate Schedule</h2>
        <p>
          My rates are sliding and flexible; ranging from $25 to $100
          per hour depending on the complexity of the work required.
        </p>

        <h3>QuickBooks® Set-Up</h3>

        <p>
          Setting up a basic individual or small business QuickBooks®
          company file and counseling client to continue the process
          themselves averages between 2 and 7 hours of personal
          instruction.{' '}
        </p>

        <h3>QuickBooks® Manual Payroll</h3>

        <p>
          Avoid unnecessary payroll and accountant fees! I can counsel
          you to manually input payroll liabilities and expenses and
          the associated tax preparation.
        </p>

        <h3>QuickBooks® Medical Billing Program</h3>

        <p>
          There is no reason for a small medical practice to spend
          thousands of dollars on invoicing programs to know what
          their current A/R balance is. Contact me to discuss my
          personalized QuickBooks® medical billing, catered to deduct
          both patient co-payments and each insurance company’s
          reductions in payments due.
        </p>

        <h3>QuickBooks® Continued Services</h3>

        <p>
          Monthly reconciliations and quarterly report fees range from
          $25 to $100 per hour depending on the complexity of the work
          required.
        </p>

        <hr />

        <p>
          Contact me at{' '}
          <a href="mailto:lindaquickbooks@gmail.com">
            lindaquickbooks@gmail.com
          </a>{' '}
          or (603) 279-0407 to discuss your QuickBooks® bookkeeping
          needs.
        </p>
      </Content>
    </ContentContainer>
  );
};

export default Rates;
