import React from 'react';
import styles from './Services.module.css';
import Card from './Card';
import Home from '../../assets/hero.jpg';

function Services() {
	return(
		<div>
			<div className={styles.head}>
				<h1 className={styles.heading}>Services</h1>
			</div>
			<div className={styles.cards}>
				<Card 
					imgsrc={Home}
					head="Mobile Development"
					bod="This is rare to find. We, at ThumbStack, pick the finest App developers with an upper hand in technical as well as non-technical skills."
				/>
				<Card 
					imgsrc={Home}
					head="Mobile Development"
					bod="This is rare to find. We, at ThumbStack, pick the finest App developers with an upper hand in technical as well as non-technical skills."
				/>
				<Card 
					imgsrc={Home}
					head="Mobile Development"
					bod="This is rare to find. We, at ThumbStack, pick the finest App developers with an upper hand in technical as well as non-technical skills."
				/>
				<Card 
					imgsrc={Home}
					head="Mobile Development"
					bod="This is rare to find. We, at ThumbStack, pick the finest App developers with an upper hand in technical as well as non-technical skills."
				/>
				<Card 
					imgsrc={Home}
					head="Mobile Development"
					bod="This is rare to find. We, at ThumbStack, pick the finest App developers with an upper hand in technical as well as non-technical skills."
				/>
				<Card 
					imgsrc={Home}
					head="Mobile Development"
					bod="This is rare to find. We, at ThumbStack, pick the finest App developers with an upper hand in technical as well as non-technical skills."
				/>
			</div>
		</div>
	);
}

export default Services;
