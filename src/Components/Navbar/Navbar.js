import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styles from './menu.module.css';

class Nav extends Component {

  constructor(props){
    super(props);
    this.state={
    }
  }

  toggleNavView=()=>{
	    document.getElementById('menu').classList.toggle('shownav');
		document.getElementsByClassName(styles.burgers)[0].classList.toggle('open');
  }

  clickOnSign=()=>{
  	this.toggleNavView();
  	this.props.logOut();
  }

  render() {
    return (
	   	<div className={styles.main_nav_div}>
			<button className={styles.burgers} onClick={this.toggleNavView} />
			<label aria-hidden="true" onClick={this.toggleNavView} id="labeel" />

			<nav id="menu" className={styles.main_nav_nav}>
				
				<Link to="/" onClick={this.toggleNavView}>HOME</Link>
				<Link onClick={this.toggleNavView} to="/about">ABOUT</Link>
				<Link onClick={this.toggleNavView} to="/services">SERVICES</Link>
				<Link onClick={this.toggleNavView} to="/contact">CONTACT US</Link>
				<div>
			  	</div> 
			</nav>
		</div>
    );
  }
}

export default Nav;
