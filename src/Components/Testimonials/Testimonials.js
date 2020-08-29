import React from 'react';
import styles from './Testimonials.module.css';

import Carousel from "./carousel/Carousel";
import Card from "./card/Card";
import carouselArray from "../../assets/data/carouselData2";

function Testimonials() {
	return(
		<div className={styles.box}>
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
			<div className={styles.right}>
				<Carousel>
			        {carouselArray.map((c, index) => {
			          return (
			            <Card
			              heading={c.heading}
			              subHeading={c.subHeading}
			              para={c.para}
			              position={c.position}
			              img={c.img}
			            />
			          );
			        })}
			      </Carousel>
			</div>
		</div>
	);
}

export default Testimonials;
