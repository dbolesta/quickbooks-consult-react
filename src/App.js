import React from 'react';
import './App.css';

import About from './Pages/About';
import Home from './Pages/Home';
import Clients from './Pages/Clients';
import Contact from './Pages/Contact';
import Rates from './Pages/Rates';
// import Shop from './Pages/Shop';

import Nav from './Components/Nav';
import Heading from './Components/Heading';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';

// import PageFrame from './Layout/PageFrame';
// import ItemDetail from './Pages/ItemDetail';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { createGlobalStyle } from 'styled-components';
import { globalStyles } from './Styles/global';

const GlobalStyle = createGlobalStyle`
  ${globalStyles}
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router>
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

              {/* <Route path="/shop" exact component={Shop} />
            <Route path="/shop/:id" exact component={ItemDetail} /> */}
            </Switch>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    </React.Fragment>
  );
}

export default App;
