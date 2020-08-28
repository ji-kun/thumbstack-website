import React, { useState } from "react";
import styles from './Products.module.css';

import Carousel from "./carousel/Carousel";
import Card from "./card/Card";
import carouselArray from "../../assets/data/carouselData";

function Products() {
  return(
    <div>
      <Carousel>
        {carouselArray.map((c, index) => {
          return (
            <Card
              heading={c.heading}
              subHeading={c.subHeading}
              para={c.para}
              img={c.img}
            />
          );
        })}
      </Carousel>
    </div>
  );
}

export default Products;