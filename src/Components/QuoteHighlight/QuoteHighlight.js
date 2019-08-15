import React, { useEffect, useRef } from 'react';
import { getRandomIntInclusive } from '../../Utils/utils';
import styled from 'styled-components';

const Highlight = styled.span`
  text-shadow: -1px 1px 1px #d0d0d0;
  margin: 5px;
  padding: 50px 0;
  transition: all 0.3s ease-in;
  cursor: pointer;

  &:hover {
    text-shadow: -1px 1px 10px #d0d0d0;
  }
`;

const QuoteHighlight = props => {
  const puzzleColors = ['#86a39e', '#ef934f', '#f3cf5f', '#fdecc6'];
  const fonts = ['Beth Ellen', 'Grenze', 'Indie Flower', 'Caveat'];

  // const sizeRef = useRef();
  // const sizeRef = useRef();
  // const sizeRef = useRef();
  // const sizeRef = useRef();
  // const sizeRef = useRef();

  const randSize = useRef();
  const randColor = useRef();
  const randFlexBasis = useRef();
  const randRotate = useRef();
  const randFont = useRef();

  // let randSize = getRandomIntInclusive(35, 40);
  // let randColor = puzzleColors[getRandomIntInclusive(0, 3)];
  // let randFlexBasis = getRandomIntInclusive(18, 31);
  // let randRotate = getRandomIntInclusive(-5, 5);
  // let randFont = fonts[getRandomIntInclusive(0, 3)];

  randSize.current = getRandomIntInclusive(35, 40);
  randColor.current = puzzleColors[getRandomIntInclusive(0, 3)];
  randFlexBasis.current = getRandomIntInclusive(18, 31);
  randRotate.current = getRandomIntInclusive(-5, 5);
  randFont.current = fonts[getRandomIntInclusive(0, 3)];
  // useEffect(() => {
  //   console.log('useeffect has been called');
  //   // randSize = getRandomIntInclusive(35, 40);
  //   // randColor = puzzleColors[getRandomIntInclusive(0, 3)];
  //   // randFlexBasis = getRandomIntInclusive(18, 31);
  //   // randRotate = getRandomIntInclusive(-5, 5);
  //   // randFont = fonts[getRandomIntInclusive(0, 3)];

  //   randSize.current = getRandomIntInclusive(35, 40);
  //   randColor.current = puzzleColors[getRandomIntInclusive(0, 3)];
  //   randFlexBasis.current = getRandomIntInclusive(18, 31);
  //   randRotate.current = getRandomIntInclusive(-5, 5);
  //   randFont.current = fonts[getRandomIntInclusive(0, 3)];
  // });

  const inlineStyle = {
    fontSize: `${randSize.current}px`,
    color: `${randColor.current}`,
    flex: `1 0 ${randFlexBasis.current}%`,
    transform: `rotate(${randRotate.current}deg)`,
    fontFamily: `${randFont.current}`
  };

  const clickHandler = (e, props) => {
    console.log(props);
    console.log(e);
  };

  //onClick={e => clickHandler(e, props)}
  //console.log({ props });
  return (
    <Highlight
      onClick={() => props.selectHandler(props.testimonialData)} // pass all data related to this testimonial back to parent comp
      style={inlineStyle}
    >
      "{props.highlight}"
    </Highlight>
  );
};

export default QuoteHighlight;
