import React, { useEffect, useState } from 'react';
import styles from '../../styles/Poster.module.css';
import { images } from '../../utils/consts';

const Poster = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex => (currentIndex + 1) % images.length)
    }, 5000);
    return () => clearInterval(interval)
  }, [] )

  return(
    <section className={styles.poster}>
      <div className={styles.title}>
        % SALE %
      </div>
      <div className={styles.product}>
        <div className={styles.text}>
          <div className={styles.subtitle}>
            the best seller of 2023
          </div>
          <h1 className={styles.head}>NIKE AIR</h1>
          <button className={styles.button}>Buy NOW</button>
        </div>
        <div className={styles.image}>
          <img src={images[currentIndex]} alt="product" />
        </div>
      </div>
    </section>
  );
}

export default Poster;