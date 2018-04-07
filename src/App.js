import React, { Component } from 'react';
import './Assets/css/default.min.css';
import Footer from './Components/FooterComponent/footer';
import Header from './Components/HeaderComponent/header.js';
import Main from './Components/Pages/main-content.js';
import Traveltips from './Components/Pages/traveltips.js';
import AboutMe from './Components/Pages/about-me.js';
import Navigation from './Components/Pages/nav.js';
import MaldivesInfo from './Components/Pages/maldives-info.js';
import LondonInfo from './Components/Pages/london-info.js';
import ParisInfo from './Components/Pages/paris-info.js';
import {BrowserRouter as Router,
  Route,
  Link
} from  'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
      <div className="App">
      <Header/>
      <Navigation/>
      <Route exact path='/' component={Main}/>
      <Route exact path='/AboutMe' component={AboutMe}/>
      <Route exact path='/Traveltips' component={Traveltips}/>
      <Route exact path='/MaldivesInfo' component={MaldivesInfo}/>
      <Route exact path='/LondonInfo' component={LondonInfo}/>
      <Route exact path='/ParisInfo' component={ParisInfo}/>
      <Route exact path='/Maldives' component={MaldivesInfo}/>
      <Route exact path='/London' component={LondonInfo}/>
      <Route exact path='/Paris' component={ParisInfo}/>
      <Footer/>
      </div>
      </Router>
      </div>
      );
    }
  }

  export default App;
