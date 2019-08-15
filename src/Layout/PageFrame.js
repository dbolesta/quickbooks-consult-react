import React from 'react';

import styled from 'styled-components';

const Frame = styled.div`
  border: 2px solid green;
  padding: 140px;
`;

const PageFrame = props => {
  return <Frame>{props.children}</Frame>;
};

export default PageFrame;
