import React from 'react';
import styles from './Services.module.css';
import Card from './Card';
import Home from '../../assets/hero.jpg';
import Navbar2 from '../Navbar/Navbar2/Navbar2';

function Services() {
	return(
		<div className={styles.bgr}>
			<Navbar2 />
			<div className={styles.head}>
				<h1 className={styles.heading}>Services</h1>
			</div>
			<div className={styles.cards}>
				<Card 
					imgsrc="https://images.unsplash.com/photo-1548094891-c4ba474efd16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=770&q=80"
					head="Mobility Development"
					bod=" We, at ThumbStack, pick the finest App developers with an upper hand in technical as well as non-technical skills."
				/>
				<Card 
					imgsrc={Home}
					head="Cloud Development"
					bod="We can get your application on all the leading cloud platforms including AWS, Google Cloud and Azure and make your applications scalable instantly."
				/>
				<Card 
					imgsrc={Home}
					head="Internet of Things"
					bod="Want to build the next big product or digitise current physical hardware system, we will help you create the best smart IoT device right out of your imagination."
				/>
				<Card 
					imgsrc={Home}
					head="Artificial Intelligence"
					bod="As the potential of AI grows everyday, integrating it with our everyday applications becomes a necessity. We help you integrate your everyday working softwares with AI powered backend services."
				/>
				<Card 
					imgsrc={Home}
					head="Big Data"
					bod="Need to work on huge chunks of data and derive logical conclusions and analysis on it?  Wait no more, Thumbstack can help you with Hadoop, Hive and similar technologies"
				/>
				<Card 
					imgsrc={Home}
					head="Machine Learning"
					bod="Prediction and analysis of enterprise data has been always been in pursuit by enterprises. Machine learned systems helps you take better decisions every time by learning heaps of data from the systems"
				/>
			</div>
		</div>
	);
}

export default Services;
