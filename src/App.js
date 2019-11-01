import React, { useEffect } from 'react';
import './App.css';

import ReactGA from 'react-ga';

import { createBrowserHistory } from 'history';

import About from './Pages/About';
import Home from './Pages/Home';
import Clients from './Pages/Clients';
import Contact from './Pages/Contact';
import Rates from './Pages/Rates';

import Nav from './Components/Nav';
import Heading from './Components/Heading';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { createGlobalStyle } from 'styled-components';
import { globalStyles } from './Styles/global';

const history = createBrowserHistory(); // mostyle for analytics

history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const GlobalStyle = createGlobalStyle`
  ${globalStyles}
`;

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <React.Fragment>
      <GlobalStyle />
      <Router history={history}>
        <ScrollToTop>
          <div className="App">
            <Nav />
            <Heading />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/clients" exact component={Clients} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/rates" exact component={Rates} />
            </Switch>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    </React.Fragment>
  );
}

export default App;
