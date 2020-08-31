import React from 'react';

import {Link} from 'react-router-dom';
import styles from './SideDrawer.module.css';

const sideDrawer = props => {
	return(
		<nav className={styles.sideDrawer}>
			<div className={styles.navItems}>
		   			<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/services">Services</Link>
					<Link to="/contact">Contact</Link>
				</div>
		</nav>
	);
}

export default sideDrawer;