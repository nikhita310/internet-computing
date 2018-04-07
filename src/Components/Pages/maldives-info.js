import React, { Component } from 'react';
import logo from '../../Assets/images/maldives-about.jpeg';
import '../../Assets/css/default.min.css';

class MaldivesInfo extends Component {
  render() {
    return (
    	
     <div className="information">
     <h4><b>MALDIVES DIARIES</b><span>22 January 2018</span></h4>  
     
     <p>Maldives, where sands are white as the smiles of the locals, where fish swim happily in the warm waters of the Indian Ocean, where the weather is a dream, and the deep rays of the sun waits to engulf you in their arms.
     Maldives is the picture of paradise. With luxury bungalows extending over turquoise waters inviting you to jump in for a swim, sandy beaches and pure luxury, Maldives is a dream destination.
     <br/><br/> The Maldives is unusual as a holiday destination because of the fun things to do whether you are staying on a plush resort, in Male’, or in a simple guesthouse on an island in a faraway atoll. Entertainment and daily excursions are organised at every resort so don’t be shy about joining in. Excursions will include fishing and cruising (to watch dolphins dance) as well as visits to the capital, Male’, and to genuinely deserted islands, perhaps for swimming and a picnic, and shopping expeditions to neighboring inhabited islands.

     </p>
     <img src={logo} alt="Maldives Information" className="places-img"/>
     <h3>Things To Do in Maldives</h3>
     <ul>
     <p>
     <li><b>Beach Combing</b></li>There will probably be bits of dead coral and shells, but leave those there; empty shells become homes for crabs. 
     <li><b>Cooking the Maldivian Way</b></li>Some resorts organise weekly cooking demonstrations of Maldivian favourites, letting guests enjoy their own preparations for lunch.
     <li><b>Dolphin watching & Whale Submarine</b></li> Many resorts organise cruises to the sea-lanes that dolphins regularly use, and independent dolphin watching cruises by dhoni can be arranged by the accommodation provider
     <li><b>Glass Bottom Boat Trips & Photo Flight</b></li>There will probably be bits of dead coral and shells, but leave those there; empty shells become homes for crabs. 
     <li><b>Gourmet Dining</b></li>It’s not all fish, curry and rice. International chefs like working in the Maldives as every kind of ingredient from around the world can be imported for delivery to their resort without them having to go to the market to find it. 
     </p>
     </ul>
     </div>
     
     
     );
  }
}

export default MaldivesInfo;
