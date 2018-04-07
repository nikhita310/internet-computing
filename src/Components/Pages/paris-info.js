import React, { Component } from 'react';
import logo from '../../Assets/images/paris-about.jpg';
import '../../Assets/css/default.min.css';

class ParisInfo extends Component {
  render() {
    return (
    	
     <div className="information">
     <h4><b>PARIS DIARIES</b></h4> 
     <p>‘The city of lights’, ‘the city of Romance’, ‘the culinary capital of the world’, all these are just names Paris, France is known by. Over seven million people visit each year. Paris, France is one of the most amazing places you will ever visit. There are so many phenomenal things to see and do you’ll never get bored.
     <br/><br/>
     The most Prominent landmark in Paris would have to be the Eiffel Tower. More the seven million people visit the Eiffel Tower each year. For a small fee you can ride the elevator to the top. The view from the top is spectacular. If you want some exercise you can take the stairs that go from the ground to the second platform. Many People like to go to the Eiffel Tower at night because it is all light up. 

     </p> 
     <img src={logo} alt="Paris" className="places-img"/>
     <h3>Things To Do in Paris</h3>
     <ul>
     <p>
     <li><b>Visit the Museums</b></li>The Louvre, Petit Palais, Musee Rodin, Musée d’Orsay. No matter what your taste, you’ll have plenty of options to choose from.
     <li><b>Picnic at the Eiffel Tower</b></li> Stop at a local bakery to pick up some savory and sweet treats, and spending a late afternoon lounging on the grass.
     <li><b>Walk along the River Seine</b></li> With a partner, this walk is ultra-romantic and has great views of the city.
     <li><b>Visit Shakespeare and Company</b></li>  This old bookstore opened in 1951. Its story is unique: the shop is famous for offering a bed to any aspiring writers in exchange for working at the bookshop.
     </p>
     </ul>
     </div>
     
     
     );
  }
}

export default ParisInfo;
