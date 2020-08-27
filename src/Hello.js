import React from 'react';
import styles from './Hello.module.css';
import Home from './assets/home.png';
import logo from './assets/logo.png';
import instagram from './assets/instagram.svg';
import facebook from './assets/facebook.svg';
import linkedin from './assets/linkedin.svg';
import {BrowserRouter as Router,Link} from 'react-router-dom'

function Hello() {
	return (
	  	<div className = {styles.Home}>
	  	<Router>
	  	  <div className={styles.logo}>
	  	  	<img src={logo} className={styles.logoAdjust} />
	  	  </div><br />
		  <div className={styles.homeDesign}>
			  <div className={styles.text}>
			  	<h2 className={styles.homeText1}>We Create <br />Brands<br />not just products<br /></h2><br /><br />
			  	<div className={styles.button}>
			  		Portfolio
			  	</div>
			  </div>
			  <div className={styles.image}>
			  	<img src={Home} className={styles.imageAdjust} />
			  </div>
		  </div>
		  <div className={styles.social}>
		  	<Link to="https://www.facebook.com/ThumbstackTechnologies">
		  		<img src={facebook} className={styles.socialicon} />
		  	</Link>
		  	<Link to="https://www.instagram.com/thumbstack_tech/">
		  		<img src={instagram} className={styles.socialicon} />
		  	</Link>
		  	<Link to="https://www.linkedin.com/company/thumbstacktechnologies">
		  		<img src={linkedin} className={styles.socialicon} />
		  	</Link>
		  </div>
		  </Router>
		</div>
	);
}

export default Hello;