import React from 'react';
import styles from './Card.module.css';

function Card(props) {
	return(
		<div>
			<div className={styles.cards}>
				<div className={styles.card}>
					<img src={props.imgsrc} alt="pic" className={styles.cardimg} />
					<div className={styles.cardinfo}>
						<h3 className={styles.heading}>
							{props.head}
						</h3>
						<h5 className={styles.subtext}>
							{props.bod}
						</h5>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
