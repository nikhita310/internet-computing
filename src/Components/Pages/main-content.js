import React, { Component } from 'react';
import '../../Assets/css/default.min.css';
import Navigation from './nav.js';
import Article from './article.js';
// This component renders the Home page.
class Main extends Component {
	render() {
		return (
			
			<div className="container">
			
			
			<Article/>
			
			</div>
			
			);
		}
	}

	export default Main;
