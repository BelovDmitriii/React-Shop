import React from 'react';
import styles from '../../styles/Poster.module.css';
import IMG from '../../images/poster.jpg';

const Poster = () => {
  return(
    <section className={styles.poster}>
      <div className={styles.title}>
        % SALE %
      </div>
      <div className={styles.product}>
        <div className={styles.text}>
        
        </div>
        <div className={styles.subtitle}>
          the best seller of 2023
        </div>
        <h1 className={styles.head}>SOME PRODUCT</h1>
        <button className={styles.button}>Buy NOW</button>
        <div className={styles.image}>
          <img src={IMG} alt="product" />
        </div>
      </div>
    </section>
  );
}

export default Poster;