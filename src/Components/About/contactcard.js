import React from 'react';
import styles from './contactcard.module.css';

function contactcard(props){
	return(
		<div className={styles.card}>
			<div className={styles.image}></div>
			<h3 className={styles.name}>{props.name}</h3>
			<h3 className={styles.position}>{props.position}</h3>
		</div>
	);
}

export default contactcard;