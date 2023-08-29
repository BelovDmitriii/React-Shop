import React from 'react';
import styles from '../../styles/Products.module.css';
import { Link } from 'react-router-dom';

const Products = ({title, style={}, products=[]}, amount) => {
const list = products.filter((_,i) => i < amount);

  return(
    <section className={styles.container} style={style}>
      {title && <h2>{title}</h2>}
      <div className={styles.productsList}>
        {list.map(({ id, image, title, category: {name: cat}, price}) => (
          <Link to={`/${id}`} key={id} className={styles.productItem}>
            <div 
              className={styles.image}
              style={{backgroundImage: `url(${image})`}}
            />
            <div className={styles.wrapper}>
              <h3 className={styles.title}>{title}</h3>
              <div className={styles.category}>{cat}</div>
              <div className={styles.info}>
                <div className={styles.prices}>
                  <div className={styles.price}>
                    {price}$
                  </div>
                  <div className={styles.oldPrice}>
                    {Math.floor(price * 0.8)}$
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Products;