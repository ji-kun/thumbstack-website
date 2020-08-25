import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Clientele from './Components/Clientele/Clientele';
import Testimonials from './Components/Testimonials/Testimonials';
import Products from './Components/Products/Products';
import Footr from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
  			<Router>
				<Switch>
					<Route path= "/" exact component={App} />
					<Route path= "/about" exact component={About} />
					<Route path= "/services" exact component={Services} />
					<Route path= "/contact"  exact component={Contact} />
				</Switch>
		  	</Router>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
