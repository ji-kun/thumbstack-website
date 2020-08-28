import React from 'react';
import styles from './Contact.module.css';
import Navbar from '../Navbar/Navbar'
import Home from '../../assets/maskGroup.png';
import {BrowserRouter as Router,Link} from 'react-router-dom'
import { Map, GoogleApiWrapper } from 'google-maps-react';

function Contact() {
	return(
		<div>
			<Navbar />
			<div className = {styles.q}>
				<h2 className = {styles.still}>Still have a</h2>
				<h2 className = {styles.question}>Question?</h2>
			</div>
			<div className={styles.contact}>
				<div className = {styles.display}>
					<div className = {styles.text}>
						<div className = {styles.subsub}>
							<div className = {styles.subtext}>
								<h3 className = {styles.head}>
									Office
								</h3>
								<h3 className = {styles.bod}>
									Office no. F 114/A, First Floor,<br />
									Dream Malls, LBS Marg,<br />
									Bhandup West,<br /><br />

									Mumbai - 400 078
								</h3>
							</div>
							<div className = {styles.subtext}>
								<h3 className = {styles.head}>
									Contact
								</h3>
								<h3 className = {styles.bod}>
									+91 9619567891<br /><br />

									ritesh@thumbstack.in
								</h3>
							</div>
						</div>
						<div className = {styles.subsub}>
							<div className = {styles.subtext}>
								<h3 className = {styles.head}>
									Business
								</h3>
								<h3 className = {styles.bod}>
									business@thumbstack.in
								</h3>
							</div>
							<div className = {styles.subtext}>
								<h3 className = {styles.head}>
									Sales
								</h3>
								<h3 className = {styles.bod}>
									sales@thumbstack.in
								</h3>
							</div>
						</div>
					</div>
				</div>
				<div className = {styles.map}>
						<a href="https://www.google.com/maps/place/Matru+Shraddha+Housing+Society/@19.2057739,72.9547459,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7b920ae5010a9:0x3ab0d5d2665afef1!8m2!3d19.2057739!4d72.9569346">
							<img src={Home} className={styles.mapAdjust} />
						</a>
				</div>
			</div>
		</div>
	);
}

export default Contact;
