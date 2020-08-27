import React from 'react';
import styles from './Navbar.module.css';
import style from './menu.module.css';
import {BrowserRouter as Router,Link} from 'react-router-dom';

function Navbar() {
	return(
		<div className = {styles.root}>
			<div className = {style.menuWrap}>
				<input type = "checkbox" className = {style.toggler} />
				<div className = {style.hamburger}><div></div></div>
				<div className = {style.menu}>
					<div>
						<ul className = {styles.overlay}>
							<Link to='/' className={styles.links}> 
								<li>Home</li>
							</Link>
							<Link to='/about' className={styles.links}> 
								<li>About</li>
							</Link>
							<Link to='/services' className={styles.links}> 
								<li>Services</li>
							</Link>
							<Link to='/contact' className={styles.links}>
								<li>Contact Us</li>
							</Link>
						</ul>
						<div className= {style.social}>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;