import React, { Component } from 'react';
import '../../Assets/css/default.min.css';
import{
  Link
} from  'react-router-dom';
// This component renders the navigation section.
class Navigation extends Component {
  render() {
    return (
     <nav className="navigation">
     <ul class="align-middle navbar favourite">
     <li><Link to='/'>Home</Link></li>
     <li><Link to="/Maldives">Maldives</Link></li>
     <li><Link to="/London">London</Link></li>
     <li><Link to="/Paris">Paris</Link></li>
     <li><Link to='/AboutMe'>About Me</Link></li>
     <li><Link to="/Traveltips">Travel Tips</Link></li>
     </ul>
     </nav>
     );
  }
}

export default Navigation;
