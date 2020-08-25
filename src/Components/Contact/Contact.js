import React from 'react';
import styles from './Contact.module.css';
import Navbar from '../Navbar/Navbar'
import { Map, GoogleApiWrapper } from 'google-maps-react';

function Contact() {
	return(
		<div>
			<Navbar />
			<div className = {styles.q}>
				<h2 className = {styles.still}>Still have a</h2>
				<h2 className = {styles.question}>Question?</h2>
			</div>
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
				<div className = {styles.map}>
				</div>
			</div>
		</div>
	);
}

export default Contact;
