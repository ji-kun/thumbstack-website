import React from 'react';
import styles from './Hello.module.css';
import Navbar2 from './Components/Navbar/Navbar2/Navbar2';
import Home from './assets/home.png';
import logo from './assets/logo.png';
import instagram from './assets/instagram.svg';
import facebook from './assets/facebook.svg';
import linkedin from './assets/linkedin.svg';

function Hello() {
	return (
	  	<div className = {styles.Home}>
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
			  	<a href="https://www.facebook.com/ThumbstackTechnologies">
			  		<img src={facebook} className={styles.socialicon} />
			  	</a>
			  	<a href="https://www.instagram.com/thumbstack_tech/">
			  		<img src={instagram} className={styles.socialicon} />
			  	</a>
			  	<a href="https://www.linkedin.com/company/thumbstacktechnologies">
			  		<img src={linkedin} className={styles.socialicon} />
			  	</a>
			  </div>
		</div>
	);
	
}

export default Hello;