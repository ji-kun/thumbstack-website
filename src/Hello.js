import React from 'react';
import styles from './Hello.module.css';
import Home from './assets/home.png';
import logo from './assets/logo.png';

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
		  	
		  </div>
		</div>
	);
}

export default Hello;