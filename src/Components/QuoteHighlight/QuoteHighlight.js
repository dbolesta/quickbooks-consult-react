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
    // #fdecc6
    const puzzleColors = ['#86a39e', '#ef934f', '#f3cf5f'];
    const fonts = ['Beth Ellen', 'Grenze', 'Indie Flower', 'Caveat'];

    this.randSize = getRandomIntInclusive(1.3, 2);
    this.randColor = puzzleColors[getRandomIntInclusive(0, 2)];
    this.randFlexBasis = getRandomIntInclusive(15, 25);
    this.randRotate = getRandomIntInclusive(-5, 5);
    this.randFont = fonts[getRandomIntInclusive(0, 3)];

    this.setState({
      mounted: true // WHAT THE FUCK WHY DOES THIS MAKE IT SO THE COMPONENT LOADS THE STYLES CORRECTLY THIS SHIT MAKES NO SENSE WHAT THE FUCK
    });
  }

  render() {
    const inlineStyle = {
      fontSize: `${this.randSize}rem`,
      color: `${this.randColor}`,
      flex: `1 1 ${this.randFlexBasis}%`,
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
