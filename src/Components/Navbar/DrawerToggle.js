import React from 'react';
import styles from './DrawerToggle.module.css';

const drawerToggleButton = props => {
	return(
		<button className={styles.toggleButton} onClick={props.drawerClickHandler}>
			<div className={styles.toggleButtonLine}></div>
			<div className={styles.toggleButtonLine}></div>
			<div className={styles.toggleButtonLine}></div>
		</button>
	);
}

export default drawerToggleButton;