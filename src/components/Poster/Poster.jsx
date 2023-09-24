import React from 'react';
import styles from '../../styles/Poster.module.css';
import IMG from '../../images/nike.png';

const Poster = () => {
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
          <img src={IMG} alt="product" />
        </div>
      </div>
    </section>
  );
}

export default Poster;