import React, { Component } from 'react';
import logo from '../../Assets/images/london-about.jpg';
import '../../Assets/css/default.min.css';

class LondonInfo extends Component {
  render() {
    return (
      
     <div className="information">
     <h4><b>LONDON DIARIES</b></h4> 
     <p>London is a real world city – with some of the most famous buildings, museums and galleries in the world and 2000 years of history to go with them.

     But it’s not just looking backwards, there’s always a new bar, play or concert to see. London is also one of the most international cities, with people from all around the world making their home here, so it’s just as easy to get Indian street food as it is a roast dinner.

     Yes, it might rain a lot and no people won’t smile on the Tube, but whatever you’re interested in – from museums to shopping, rock to opera, budget to luxury – there’s a London that will suit you.

     </p> 
     <img src={logo} alt="London Information" className="places-img"/>
     <h3>Things To Do in London</h3>
     <ul>
     <p>
     <li><b>Walk along South Bank</b></li>follow the Thames from the London Eye along to Tower Bridge and you’ll pass some of London’s most famous buildings, like the Tower of London, Shakespeare’s Globe and Tate Modern.
     <li><b>Get a great view</b></li>to see the city from above, you can climb to the top of the Monument and the dome of St Paul’s Cathedral, and from February there’ll be a viewing platform at the top of London’s new tallest building, the Shard.
     <li><b>Visit the museums</b></li> Choose from big names like the British Museum and National Gallery, or check out some of the smaller museums like Sir John Soane’s Museum and the Cabinet War Rooms.
     <li><b>Escape the city into the parks</b></li> London has plenty of parks and gardens, from the manicured gardens of Hyde Park and St James Park to huge, hilly Hampstead Heath and the hidden gardens tucked away in residential squares.
     <li><b>Walk through London’s history</b></li> London Walks run themed walking tours around London, from the haunts of Jack the Ripper and night-time ghost tours, to Harry Potter film locations and Olympic London.
     </p>
     </ul>
     </div>
     
     
     );
  }
}

export default LondonInfo;

