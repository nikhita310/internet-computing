import React, { Component } from 'react';
import maldives from '../../Assets/images/maldives.jpg';
import paris from '../../Assets/images/paris.jpg';
import london from '../../Assets/images/london.jpg';
import MaldivesInfo from './maldives-info';
import LondonInfo from './london-info';
import ParisInfo from './paris-info';
import '../../Assets/css/default.min.css';
import{
  Link
} from  'react-router-dom';
// This component is a container for all the blog posts.
class Article extends Component {
  render() {
    return (
     <article className="article">
     <div class="card">
     
     <div className="card-container">
     <h4><Link to='/MaldivesInfo'><b>Maldives Archives</b></Link> <span><i>Posted on : </i>22 January 2018</span></h4>
     <p><img src={maldives} alt="Maldives" />Maldives, where sands are white as the smiles of the locals, where fish swim happily in the warm waters of the Indian Ocean, where the weather is a dream, and the deep rays of the sun waits to engulf you in their arms.
     Maldives is the picture of paradise. With luxury bungalows extending over turquoise waters inviting you to jump in for a swim, sandy beaches and pure luxury, Maldives is a dream destination.
     </p> 
     </div>
     </div>
     <div className="card">
     
     <div className="card-container">
     <h4><Link to='/LondonInfo'><b>London Archives</b></Link> <span><i>Posted on : </i>14 February 2018</span></h4> 
     <p><img src={london} alt="London" /> London is the perfect place to combine sightseeing with shopping. The city has its icons – Big Ben, Buckingham Palace, Westminster Bridge and Harrods – that you just have to visit. It’s a place where music lives and fashion trends can be seen on the streets. Shopping in London is simply an experience – and not just at Christmas, when the whole city is beautifully decorated. Its culinary delights are as many and varied as its street scenes.
     </p> 
     </div>
     </div>
     <div className="card">
     
     <div className="card-container">
     <h4><Link to='/ParisInfo'><b>Paris Archives</b></Link> <span><i>Posted on : </i>03 March 2018</span></h4> 
     <p><img src={paris} alt="Paris" />Paris is synonymous with all that is French. Known throughout the world as the "City of Light," Paris is celebrated for its beautiful city plan, its architecture, museums, bridges, cathedrals, parks, shopping, flea markets, sidewalk cafés, wide and luxurious boulevards, elegant cuisine, and numerous monuments. 
     </p> 
     </div>
     </div>
     </article>
     );
  }
}

export default Article;
