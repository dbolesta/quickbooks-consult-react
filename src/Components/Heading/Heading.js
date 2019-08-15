import React from 'react';
import logo from '../../Images/logo.svg';

import styled from 'styled-components';

const HeadingWrapper = styled.section`
  /* border: 1px solid black; */
  position: relative;

  &::before {
    content: '';
    background: url(${logo}) no-repeat center/contain;
    opacity: 0.3;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;

const Text = styled.h1`
  font-family: 'Raleway';
  font-size: 3rem;
  /* font-weight: 600; */
  padding: 1.2rem 0;
`;

const Heading = () => {
  return (
    <HeadingWrapper>
      <Text>Linda Richards Bolesta</Text>
    </HeadingWrapper>
  );
};

export default Heading;
