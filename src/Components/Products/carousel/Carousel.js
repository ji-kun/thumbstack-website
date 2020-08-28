import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";

const Carousel = ({ children }) => {
  const [active, setActive] = useState(1);
  let xDown = null;
  let yDown = null;

  const classNameResolver = (i) => {
    if (active === i) return `${styles.carousel_center}`;
    else if (i < active) return `${styles.carousel_left}`;
    else if (i > active) return `${styles.carousel_right}`;
  };
  const handleLeftClick = () => {
    if (active === 1) setActive(children.length);
    else setActive(active - 1);
  };

  const handleRightClick = () => {
    if (active === children.length) setActive(1);
    else setActive(active + 1);
  };
  const handleSliderChange = (event) => {
    if (event.target.value > active) handleRightClick();
    else if (event.target.value < active) handleLeftClick();
  };

  const getTouches = (evt) => {
    return evt.touches;
  };

  const handleTouchStart = (evt) => {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  const handleTouchMove = (evt) => {
    if (!xDown || !yDown) {
      return;
    }

    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 5) handleRightClick();
      else if (xDiff < -5) handleLeftClick();
    }

    xDown = null;
    yDown = null;
  };

  const handleKey = (e) => {
    if (e.keyCode === 37) handleLeftClick();
    else if (e.keyCode === 39) handleRightClick();
  };

  useEffect(() => {
    const carousel = document.getElementById("carouselTouch");
    carousel.addEventListener("touchstart", handleTouchStart);
    carousel.addEventListener("touchmove", handleTouchMove);

    return () => {
      carousel.removeEventListener("touchstart", handleTouchStart);
      carousel.removeEventListener("touchmove", handleTouchMove);
    };
  });

  return (
    <div className={styles.carousel_space}>
      <div className={styles.carousel_container} id="carouselTouch">
        {children.map((Card, index) => {
          return <div className={classNameResolver(index + 1)}>{Card}</div>;
        })}
      </div>
      <div className={styles.controller_container}>
        <input
          type="range"
          min="1"
          max={children.length}
          value={active}
          className={styles.slider}
          id="myRange"
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
};

export default Carousel;
