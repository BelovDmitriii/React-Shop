import React from 'react';
import styles from '../../styles/Banner.module.css';
import saleImage from '../../images/sale.jpg';

const Banner = () => {
  return(
    <section className={styles.banner}>
      <div className={styles.left}>
        <p className={styles.content}>
          NEW SALES
          <span>SALE</span>
        </p>
        <button className={styles.more}>See more</button>
      </div>

      <div className={styles.right}>
        <img src={saleImage} alt="sale_photo" />
        <p className={styles.discount}>
          save up to <span>50%</span> off
        </p>
      </div>

    </section>
  );
}

export default Banner;