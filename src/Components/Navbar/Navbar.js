import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';
import styles from './Navbar2.module.css';

import Toggle from './DrawerToggle';
import SideDrawer from './SideDrawer';

class Navbar extends Component {

	state = {
		sideDrawerOpen: false,
	}

	drawerToggleClickHandler = () => {
		this.setState((prevState) => {
			return {sideDrawerOpen: !prevState.sideDrawerOpen};
		});
	};

	render(){
		let sideDrawer;
		let backdrop;

		if(this.state.sideDrawerOpen) {
			sideDrawer = < SideDrawer/>
		}

		return (
	   	<header className={styles.nav}>
	   		<nav className={styles.navigation}>
	   			<div>
	   				<Toggle drawerClickHandler={this.drawerToggleClickHandler}/>
	   				{sideDrawer}
	   			</div>
			</nav>
		</header>
    );
	}
}

export default Navbar;
