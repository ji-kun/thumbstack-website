import React from 'react';
import styles from './Navbar.module.css';
import Hello from './Hello'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';

function Navbar() {
	return(
		<div>
			
		</div>
	);
}

export default Navbar;

React Router

// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// <Router>
// 	<div>
// 		<Nav />
// 		<Switch>//first match is rendered
// 			<Route path= "/" exact component={Home} /> //use of exact: if we only have this home will be rendered everywhere
// 			<Route path= "/about" component={About} />
// 			<Route path= "/shop" component={Shop} />
// 		</Switch>
// 	</div>
// </Router>

// import {Link} from 'react-router-dom'; //in navbar

// <nav>
// 	<Link to='/about'> 
// 		<li>About</li>
// 	</Link>
// 	<Link to='/shop'>
// 		<li>Shop</li>
// 	</Link>
// </nav>

// Dynamic Routing
// import React,{useState, useEffect} from 'react';

// const fetchItems = async ()=> {
// 	const data = await fetch('url');
// 	const items = await
// 	console.log(data);
// };
