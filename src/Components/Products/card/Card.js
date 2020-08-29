import React from "react";
import styles from "./Card.module.css";
import android from "../../../assets/android.png";
import apple from "../../../assets/company.png";

const Card = ({ bgColor, img, heading, subHeading, para }) => {
  return (
    <div className={styles.card_parent}>
      <div
        className={styles.left}
        style={{ backgroundImage: `url("${img}")` }}
      />
      <div className={styles.right}> 
        <h1 className={styles.heading}>{heading}</h1>
        <h2 className={styles.sub_heading}>{subHeading}</h2>
        <p className={styles.para}>{para}</p>
        <div className={styles.buttons}>
          <div
            className={styles.button}
            style={{ background: bgColor }}
          >
            Download For -
            <img src={android} className={styles.imageAdjust}/>
          </div>
          <div className={styles.separator}></div>
          <div
            className={styles.button}
            style={{ background: bgColor }}
          >
            Download For -  
            <img src={apple} className={styles.imageAdjust} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
