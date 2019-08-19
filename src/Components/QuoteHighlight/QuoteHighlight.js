import React, { useEffect, useRef } from 'react';
import { getRandomIntInclusive } from '../../Utils/utils';
import styled from 'styled-components';

const Highlight = styled.span`
  text-shadow: -1px 1px 1px #d0d0d0;
  margin: 5px;
  padding: 50px 0;
  transition: text-shadow 0.3s ease-in;
  cursor: pointer;

  &:hover {
    text-shadow: -1px 1px 10px #d0d0d0;
  }
`;

class QuoteHighlight extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: false
    };
  }

  componentDidMount() {
    const puzzleColors = ['#86a39e', '#ef934f', '#f3cf5f', '#fdecc6'];
    const fonts = ['Beth Ellen', 'Grenze', 'Indie Flower', 'Caveat'];

    this.randSize = getRandomIntInclusive(35, 40);
    this.randColor = puzzleColors[getRandomIntInclusive(0, 3)];
    this.randFlexBasis = getRandomIntInclusive(18, 31);
    this.randRotate = getRandomIntInclusive(-5, 5);
    this.randFont = fonts[getRandomIntInclusive(0, 3)];

    this.setState({
      mounted: true // WHAT THE FUCK WHY DOES THIS MAKE IT SO THE COMPONENT LOADS THE STYLES CORRECTLY THIS SHIT MAKES NO SENSE WHAT THE FUCK
    });
  }

  render() {
    // const sizeRef = useRef();
    // const sizeRef = useRef();
    // const sizeRef = useRef();
    // const sizeRef = useRef();
    // const sizeRef = useRef();

    // const randSize = useRef();
    // const randColor = useRef();
    // const randFlexBasis = useRef();
    // const randRotate = useRef();
    // const randFont = useRef();

    // let randSize;
    // let randColor;
    // let randFlexBasis;
    // let randRotate;
    // let randFont;

    // let randSize = getRandomIntInclusive(35, 40);
    // let randColor = puzzleColors[getRandomIntInclusive(0, 3)];
    // let randFlexBasis = getRandomIntInclusive(18, 31);
    // let randRotate = getRandomIntInclusive(-5, 5);
    // let randFont = fonts[getRandomIntInclusive(0, 3)];

    // randSize.current = getRandomIntInclusive(35, 40);
    // randColor.current = puzzleColors[getRandomIntInclusive(0, 3)];
    // randFlexBasis.current = getRandomIntInclusive(18, 31);
    // randRotate.current = getRandomIntInclusive(-5, 5);
    // randFont.current = fonts[getRandomIntInclusive(0, 3)];

    // useEffect(() => {
    //   console.log('useeffect has been called');
    //   randSize = getRandomIntInclusive(35, 40);
    //   randColor = puzzleColors[getRandomIntInclusive(0, 3)];
    //   randFlexBasis = getRandomIntInclusive(18, 31);
    //   randRotate = getRandomIntInclusive(-5, 5);
    //   randFont = fonts[getRandomIntInclusive(0, 3)];

    //   // randSize.current = getRandomIntInclusive(35, 40);
    //   // randColor.current = puzzleColors[getRandomIntInclusive(0, 3)];
    //   // randFlexBasis.current = getRandomIntInclusive(18, 31);
    //   // randRotate.current = getRandomIntInclusive(-5, 5);
    //   // randFont.current = fonts[getRandomIntInclusive(0, 3)];
    // }, []);

    const inlineStyle = {
      fontSize: `${this.randSize}px`,
      color: `${this.randColor}`,
      flex: `1 0 ${this.randFlexBasis}%`,
      transform: `rotate(${this.randRotate}deg)`,
      fontFamily: `${this.randFont}`
    };

    const clickHandler = (e, props) => {
      console.log(props);
      console.log(e);
    };

    //onClick={e => clickHandler(e, props)}
    //console.log({ props });
    return (
      <Highlight
        onClick={() =>
          this.props.selectHandler(this.props.testimonialData)
        } // pass all data related to this testimonial back to parent comp
        style={inlineStyle}
      >
        "{this.props.highlight}"
      </Highlight>
    );
  }
}

export default QuoteHighlight;
