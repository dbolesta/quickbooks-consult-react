import React, { Component } from 'react';
import styled from 'styled-components';
import clientData from '../../Data/clientData.json';
import QuoteHighlight from '../../Components/QuoteHighlight';
import TestimonialDetails from '../../Components/TestimonialDetails';
import { generateKey } from '../../Utils/utils';

const ContentContainer = styled.div`
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  margin-bottom: 3rem;
`;

const Content = styled.section`
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
  border-radius: 10px;
  background-color: #f4f4f4;
  color: #333;
  padding: 2rem;

  p {
    text-align: left;
  }
`;

const IndustryFilter = styled.ul`
  list-style-type: none;

  li {
    display: inline-block;
    border: 1px solid #86a39e;
    border-radius: 2px;
    margin: 5px;
    padding: 5px;
    line-height: 1;
    cursor: pointer;
    transition: all 200ms;

    &:hover {
      background-color: #dde5e4;
    }
  }
`;

const QuoteContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

class Clients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientData,
      testimonialVisible: false,
      selectedTestimonial: '',
      prevTestimonial: '',
      nextTestimonial: ''
    };

    this.selectTestimonial = this.selectTestimonial.bind(this);
    this.closeQuoteModal = this.closeQuoteModal.bind(this);
  }

  // takes id as int and returns client data whos id matches
  getClientDataById(id) {
    let result = this.state.clientData.clients.filter(obj => {
      return obj.id === id;
    });

    return result[0];
  }

  // when quote is clicked on, the more deailed TestimonialDetails component will become visible
  // also will retreive whole object of data from QuoteHighlight to use to display testimonial card
  selectTestimonial(tData) {
    const currentId = tData.id;
    const trueLength = this.state.clientData.clients.length - 1;

    const prevId = currentId - 1 < 0 ? trueLength : currentId - 1;
    const nextId = currentId + 1 > trueLength ? 0 : currentId + 1;

    this.setState({
      testimonialVisible: true,
      selectedTestimonial: tData,
      prevTestimonial: this.getClientDataById(prevId),
      nextTestimonial: this.getClientDataById(nextId)
    });
  }

  // pass to TestimonialDetails modal, so we can click the bg to close it
  // check if target ==== current target so this wont fire when children are clicked
  closeQuoteModal(e) {
    if (e.target === e.currentTarget) {
      this.setState({
        testimonialVisible: false
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <ContentContainer>
          <Content>
            <h2>Small Business Clients, Past & Present</h2>

            <IndustryFilter>
              {this.state.clientData.clients.map(cData => (
                <li
                  onClick={() => this.selectTestimonial(cData)}
                  key={generateKey(cData.id)}
                >
                  {cData.industry}
                </li>
              ))}
            </IndustryFilter>

            <QuoteContainer>
              {this.state.clientData.clients.map(cData =>
                cData.quotes.map(qData => (
                  <QuoteHighlight
                    selectHandler={this.selectTestimonial}
                    highlight={qData.highlight}
                    testimonialData={cData}
                    key={cData.id + qData.highlight.substring(0, 3)} // add first 3 chars to make key unique
                  />
                ))
              )}
            </QuoteContainer>
          </Content>
        </ContentContainer>
        <TestimonialDetails
          closeHandler={this.closeQuoteModal}
          visible={this.state.testimonialVisible}
          selected={this.state.selectedTestimonial}
          prev={this.state.prevTestimonial}
          next={this.state.nextTestimonial}
          selectHandler={this.selectTestimonial}
        />
      </React.Fragment>
    );
  }
}

export default Clients;
