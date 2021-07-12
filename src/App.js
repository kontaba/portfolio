import React, { useState } from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import Topbar from './components/topbar/Topbar';
import Menu from './components/menu/Menu';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import "./app.scss";

import language from './reducers/language.reducer';

const store = createStore(combineReducers({ language }));

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Provider store={store}>
      <div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
          <Intro />
          <About />
          <Portfolio />
          {/* <Works /> */}
          {/* <Testimonials /> */}
          <Contact />
        </div>
      </div>
    </Provider>
  );
}

export default App;

  // "proxy": "http://localhost:3000",
