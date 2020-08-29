import React from 'react';
import styles from './About.module.css';
import contactcard from './contactcard'

function About() {
	return(
		<div className={styles.about}>
			<div className={styles.textSection}>
					<h2 className={styles.crew}>
						The Creative Crew behind Thumbstack Technologies.
					</h2>
					<h3 className={styles.whoHead}>
						WHO WE ARE
					</h3>
					<h3 className={styles.whoBody}>
						We are a team of creatively diverse, driven, and innovative individuals working in various locations from India to USA.
					</h3>
					<h3 className={styles.whoHead}>
						OUR MISSION
					</h3>
					<h3 className={styles.whoBody}>
						We are a team of creatively diverse, driven, and innovative individuals working in various locations from India to USA.
					</h3>
			</div>
			<div className={styles.contacts}>
				<contactcard 
					name="First LastName"
					position="XYZ Engineer"
				/>
				<contactcard 
					name="First LastName"
					position="XYZ Engineer"
				/>
				<contactcard 
					name="First LastName"
					position="XYZ Engineer"
				/>
				<contactcard 
					name="First LastName"
					position="XYZ Engineer"
				/>
				<contactcard 
					name="First LastName"
					position="XYZ Engineer"
				/>
				<contactcard 
					name="First LastName"
					position="XYZ Engineer"
				/>
				<contactcard 
					name="First LastName"
					position="XYZ Engineer"
				/>
				<contactcard 
					name="First LastName"
					position="XYZ Engineer"
				/>
				<contactcard 
					name="First LastName"
					position="XYZ Engineer"
				/>
			</div>
		</div>
	);
}

export default About;
