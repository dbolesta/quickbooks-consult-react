import { css } from 'styled-components';
import normalize from './normalize';

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed:300,400,500&display=swap');

  /* for client quotes, can this be better...? */
  @import url('https://fonts.googleapis.com/css?family=Beth+Ellen&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Grenze&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Indie+Flower&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Caveat&display=swap');

  ${normalize}

  * {
    box-sizing: border-box;
  }

  html {
    font-family: 'Raleway';
    font-size: 1rem;
    line-height: 1.6;
    background-color: #ab2b47;
    color: #fceff4;
  }

  p {
    font-family: 'Raleway';
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  nav {
    color: white;
  }

  h2 {
    font-size: 3rem;
    margin-top: 0;
    margin-bottom: 1rem;
    font-family: 'Raleway';
  }

  h3 {
    font-size: 2rem;
    margin: 0;
  }
  h4 {
    font-size: 1.17rem;
    margin: 0;
    font-weight: 500;
  }
`;
