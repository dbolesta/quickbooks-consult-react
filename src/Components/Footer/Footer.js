import React, { Component } from 'react';

import styled, { keyframes } from 'styled-components';

import puzzlePiece1 from '../../Images/puzzlepiece1.svg';
import puzzlePiece2 from '../../Images/puzzlepiece2.svg';
import puzzlePiece3 from '../../Images/puzzlepiece3.svg';
import puzzlePiece4 from '../../Images/puzzlepiece4.svg';

const FooterContainer = styled.div`
  background-color: #2e3031;
  /* max-width: 1100px; */
  margin: auto;
  overflow: hidden;
  padding: 2rem;
  font-size: 1.4rem;

  @media (max-width: 900px) {
    padding: 1rem 0.25rem;
  }
`;

const FooterCard = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-areas: '. top top' '. bottom bottom';
  grid-gap: 1rem;
  background-color: #ab2b47;
  border-radius: 10px;
  width: 550px;
  margin: auto;
  padding: 1rem;
  overflow: hidden;
  font-family: 'Barlow Semi Condensed';

  @media (max-width: 900px) {
    grid-template-columns: 1fr 10fr 1fr;
    max-width: 450px;
    width: 100%;
  }
`;

const Top = styled.div`
  grid-area: top;
  text-align: right;
  z-index: 2;

  p {
    line-height: 1.4;
    margin: 0;

    &:first-child {
      font-size: 1.75rem;
      font-weight: 500;
    }
  }
`;
const Bottom = styled.div`
  grid-area: bottom;
  text-align: left;
  z-index: 2;

  p {
    white-space: pre;
    margin: 0;

    &:first-child {
      font-size: 2rem;
      font-weight: 500;
      line-height: 1.6;
    }
  }
`;

const slideAnim = (top, right, bottom, left) => keyframes`
  100% {
    transform: rotate(0deg);
    top: ${top ? top : ''};
    right: ${right ? right : ''};
    bottom: ${bottom ? bottom : ''};
    left: ${left ? left : ''};
  }  
`;

const PuzzleImage = styled.img`
  position: absolute;
  width: 123px;
  z-index: 0;
  filter: drop-shadow(0px 3px 1px rgba(0, 0, 0, 0.2));

  @media (max-width: 900px) {
    width: 94px;
  }

  &:nth-of-type(1) {
    transform: rotate(120deg);
    bottom: -138px;
    left: -121px;

    &.slide {
      animation: ${slideAnim(null, null, '-38px', '-21px')} 1s
        cubic-bezier(0.25, 0.25, 0, 1.015) forwards;
      animation-delay: 0.3s;
    }
  }

  &:nth-of-type(2) {
    transform: rotate(230deg);
    top: -122px;
    left: 178px;

    &.slide {
      animation: ${slideAnim('-22px', null, null, '78px')} 0.6s
        cubic-bezier(0.25, 0.25, 0, 1.015) forwards;
      animation-delay: 0.5s;

      @media (max-width: 900px) {
        animation-name: ${slideAnim('-31px', null, null, '13px')};
      }
    }
  }
  &:nth-of-type(3) {
    transform: rotate(-169deg);
    top: 171px;
    left: -123px;

    &.slide {
      animation: ${slideAnim('71px', null, null, '-23px')} 0.85s
        cubic-bezier(0.25, 0.25, 0, 1.015) forwards;
      animation-delay: 0.1s;
    }
  }
  &:nth-of-type(4) {
    transform: rotate(-300deg);
    bottom: 107px;
    right: -204px;

    &.slide {
      animation: ${slideAnim(null, '-24px', '7px', null)} 1.25s
        cubic-bezier(0.25, 0.25, 0, 1.015) forwards;
      animation-delay: 0.2s;
    }
  }
`;

class Footer extends Component {
  constructor(props) {
    super(props);

    this.footerCardRef = React.createRef();

    this.state = {
      inView: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    let bottomOfWindow =
      window.scrollY + document.documentElement.clientHeight;
    let footerCardTop = this.footerCardRef.current.offsetTop;
    let footerCardBottom =
      footerCardTop + this.footerCardRef.current.offsetHeight;

    // if most of card is in view, set state to inView
    if (bottomOfWindow - footerCardBottom > -50) {
      if (!this.state.inView) {
        this.setState({
          inView: true,
        });
      }
      // if card was in view, and is now out of view, remove state
    } else if (bottomOfWindow < footerCardTop) {
      if (this.state.inView) {
        this.setState({
          inView: false,
        });
      }
    }
  };

  render() {
    return (
      <FooterContainer>
        <FooterCard className="footer-card" ref={this.footerCardRef}>
          <PuzzleImage
            src={puzzlePiece1}
            className={this.state.inView ? 'slide' : ''}
            alt="Puzzle Piece 1"
          />
          <PuzzleImage
            src={puzzlePiece2}
            className={this.state.inView ? 'slide' : ''}
            alt="Puzzle Piece 2"
          />
          <PuzzleImage
            src={puzzlePiece3}
            className={this.state.inView ? 'slide' : ''}
            alt="Puzzle Piece 3"
          />
          <PuzzleImage
            src={puzzlePiece4}
            className={this.state.inView ? 'slide' : ''}
            alt="Puzzle Piece 4"
          />
          <Top>
            <p>Remote Bookkeeper</p>
            <p>QuickBooks® Consultant</p>
          </Top>
          <Bottom>
            <p>Linda Richards Bolesta</p>
            <p>NH Lakes Region 279 0407</p>
            <p>lindaquickbooks@gmail.com</p>
            <p>Cell 917 439 8906</p>
            <p>www.quickbooksconsult.com</p>
          </Bottom>
        </FooterCard>
      </FooterContainer>
    );
  }
}

export default Footer;
