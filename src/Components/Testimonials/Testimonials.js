import React from 'react';
import styles from './Testimonials.module.css';

function Testimonials() {
	return(
		<div>
			<div className={styles.rightBlob}>
				<div>
					<div className={styles.circle}></div>
					<h3 className={styles.quote}>
						"
					</h3>
					<h3 className={styles.saying}>
						What our<br />Customers<br />are Saying<br />
					</h3>
				</div>
			</div>
		</div>
	);
}

export default Testimonials;
