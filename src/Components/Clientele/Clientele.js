import React from 'react';
import styles from './Clientele.module.css';
import Group from '../../assets/group.png';
import Bueno from '../../assets/bv.png';
import Dbs from '../../assets/dbs.png';
import Honeywell from '../../assets/honeywell.png';
import Indrones from '../../assets/indrones.png';
import Indu from '../../assets/indu.png';
import MM from '../../assets/mountmusic.png';
import Nexus from '../../assets/nexus.png';
import Pristine from '../../assets/pristine.png';

function Clientele() {
	return(
		<div className={styles.clientele}>
			<div className={styles.left}>
				<div className={styles.divi}></div>
				<h2 className={styles.what}>They Trusted<br /><u>Us</u></h2>
			</div>
			<div className={styles.right}>
				<div className={styles.header}>
					<h3 className={styles.clients}>Our Esteemed Clientele</h3>
					<div className={styles.underline}>
					</div>
				</div>
				<div className={styles.logos}>
					<img src = {Group} className={styles.logo} />
				</div>
			</div>
		</div>
	);
}

export default Clientele;
