import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

const TestimonialContainer = styled.div`
  background-color: rgba(46, 48, 49, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: ${props => (props.visible ? 'flex' : 'none')};
  opacity: ${props => (props.visible ? 1 : 0)};
  align-items: center;
  justify-content: center;
  z-index: 5;
  color: black;
  text-align: left;
  transition: all 0.3s ease-in;
`;

const TestimonialCardContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  /* width: 70%; */
  flex: 0 0 69%;
  height: 90vh;
  overflow: hidden;
  padding: 1rem;
  margin: 0 1rem;
`;

const TestimonialCard = styled.div`
  overflow-y: scroll;
  height: 100%;
`;

const ClientQuote = styled.blockquote`
  font-size: 1.1rem;
  background-color: #e2e2e2;
  padding: 2rem;
  border-left: 5px solid;
  position: relative;
  overflow: hidden;
  margin: 0;
  margin-bottom: 1rem;

  i {
    position: absolute;
    opacity: 0.1;
    font-size: 10rem;
  }
  i:nth-of-type(1) {
    top: 10px;
    left: 10px;
  }
  i:nth-of-type(2) {
    right: 10px;
    bottom: 10px;
  }

  p {
    /* font-size: 1rem; */
    margin-top: 0;
    margin-bottom: 1.2rem;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .client-quote-highlight {
    background-image: linear-gradient(
      to right,
      #ffe359 0%,
      #ff99ae 100%
    );
    font-weight: bold;
    font-size: 1.3rem;
  }

  .author {
    color: #e74c3c;
    text-align: right;
  }
`;

const PrevNextSelect = styled.div`
  display: flex;
  /* border: 1px solid red; */
  flex-direction: column;
  /* width: 200px; */
  flex: 0 0 10%;
  height: 100px; /* forces arrow buttons to be aligned regardless of text content below */
  min-width: 137px;
  text-align: center;
  align-items: center;
  overflow: visible;

  div {
    background-color: white;
    padding: 0;
    min-width: 75px;
    min-height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    font-size: 2rem;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
      0 1px 3px rgba(0, 0, 0, 0.08);
    cursor: pointer;

    &:hover {
      transform: translateY(-1px);
    }
    &:active {
      transform: translateY(0px);
    }
  }

  p {
    background-color: black;
    color: white;
    font-weight: 500;
    border-radius: 5px;
    line-height: 26px;
    padding: 0.3rem;
    font-size: 1.3rem;
    display: inline-block;
  }
`;

const TestimonialDetails = props => {
  const { description, industry, location, quotes } = props.selected;

  // capture Card component as a Ref so we can reset scroll position
  const cardRef = useRef(null);

  const clickHandler = (e, props) => {
    // console.log(props);
    // console.log(e);
  };

  useEffect(() => {
    console.log('testimonial details has been rendered. Props are');
    console.log(props);
    // reset the scroll to the top when component is rerendered
    cardRef.current.scrollTo(0, 0);
  });

  // function to extract quotes in HTML form from clientData json. HTML is used to specify
  // paragraphs, but more importantly, use spans to highlight parts of quote
  function createMarkup(i) {
    const quoteHTML = quotes[i].quote;
    return { __html: quoteHTML };
  }

  return (
    <TestimonialContainer
      visible={props.visible}
      onClick={props.closeHandler}
      className={props.visible ? 'show' : ''}
    >
      <PrevNextSelect>
        <div onClick={() => props.selectHandler(props.prev)}>
          &lt;
        </div>
        <p>{props.prev.industry}</p>
      </PrevNextSelect>

      <TestimonialCardContainer onClick={e => clickHandler(e, props)}>
        <TestimonialCard ref={cardRef}>
          <h3>{industry}</h3>
          <h4>
            <i className="fas fa-map-marker-alt" /> {location}
          </h4>
          <p>{description}</p>
          {quotes ? (
            quotes.map((quote, i) => (
              <ClientQuote key={quote.author.substring(0, 3)}>
                <i className="fas fa-quote-left" />
                <i className="fas fa-quote-right" />
                <p dangerouslySetInnerHTML={createMarkup(i)} />
                <p className="author">-{quote.author}</p>
              </ClientQuote>
            ))
          ) : (
            <p>If you see, this there has been an error!</p>
          )}
        </TestimonialCard>
      </TestimonialCardContainer>

      <PrevNextSelect>
        <div onClick={() => props.selectHandler(props.next)}>
          &gt;
        </div>
        <p>{props.next.industry}</p>
      </PrevNextSelect>
    </TestimonialContainer>
  );
};

export default TestimonialDetails;
