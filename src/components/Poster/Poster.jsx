import React, { useEffect, useState } from 'react';
import styles from '../../styles/Poster.module.css';
import IMG from '../../images/nike.png';
import IMG2 from '../../images/nike2.png';
import IMG3 from '../../images/nike3.png';
import IMG4 from '../../images/nike4.png';

const Poster = () => {
  const images = [IMG, IMG2, IMG3, IMG4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex => (currentIndex + 1) % images.length)
    }, 5000);
    return () => clearInterval(interval)
  }, [images.length] )

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