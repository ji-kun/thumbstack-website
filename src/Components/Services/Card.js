import React from 'react';
import styles from './Card.module.css';

function Card(props) {
	return(
	<div className={styles.cards}>
		<div className={styles.card}>
			<div className={styles.cardinfo}>
				<h3 className={styles.heading}>
					{props.head}
				</h3>
				<h5 className={styles.subtext}>
					{props.bod}
				</h5>
				<h5 className={styles.learn}>
					Learn More
				</h5>
			</div>
		</div>
	</div>
	);
}

export default Card;
