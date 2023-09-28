import React from 'react';
import styles from '../../styles/Categories.module.css';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const Categories = ({title, products=[], amount}) => {
  const newUuid = uuid();

  const list = products.filter((_, i) => i < amount);
  return(
    <section className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.list}>
        {list.map(( name ) => (
          <Link key={newUuid} to={`/category/${name}`} className={styles.item}>
            <h3 className={styles.title}>{name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;