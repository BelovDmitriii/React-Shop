import React, { useState } from 'react'
import styles from '../../styles/Product.module.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import { useDispatch } from 'react-redux';
import { addItemToCart, addItemToFavourite } from '../../features/user/userSlice';


const Product = (item) => {
  const {image, title, price, description} = item;
  const dispatch = useDispatch();

  const [currentSize, setCurrentSize] = useState();
  const currentImage = image;

  const SIZES = [4, 4.5, 5, 6];

  const addToCart = () => {
    dispatch(addItemToCart(item));
  }

  const addToFavourite = () => {
    dispatch(addItemToFavourite(item));
  }

  return (
    <section className={styles.product}>
      <div className={styles.images}>
        <div className={styles.current}>
          <img src={currentImage} alt="product_image" />
        </div>
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.price}>
          {price} $
        </div>
        <div className={styles.color}>
          <span>Color:</span> Yellow
        </div>
        <div className={styles.sizes}>
          <span>Sizes:</span>
          <div className={styles.list}>
            {SIZES.map((size) => (
              <div 
                className={`${styles.size} ${currentSize === size ? styles.active : ''}`}
                onClick={() => setCurrentSize(size)}
                key={size}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <p className={styles.description}>
          {description}
        </p>

        <div className={styles.actions}>
          <button onClick={addToCart} className={styles.add} disabled={!currentSize}>Add to cart</button>
          <button onClick={addToFavourite} className={styles.favourite}>Add to favourites</button>
        </div>

        <div className={styles.bottom}>
          <div className={styles.purchase}>7 people purchased</div>

          <Link className={styles.link} to={ROUTES.HOME}>Return to store</Link>
        </div>
      </div>
    </section>
  )
};

export default Product;