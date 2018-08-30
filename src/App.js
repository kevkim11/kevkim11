import React, { Component } from 'react';
import logo from './logo.svg';
import Introduction from './Components/Introduction'
import AboutMe from './Components/AboutMe'
import Portfolio from './Components/Portfolio/Portfolio'
import Footer from './Components/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Introduction/>
        <AboutMe/>
        <Portfolio/>
        <Footer/>
      </div>
    );
  }
}

export default App;
