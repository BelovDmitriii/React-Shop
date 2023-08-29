import React from 'react';
import styles from '../../styles/Sidebar.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const Sidebar = () => {
  const { list } = useSelector(({categories}) => categories);

  return(
    <section className={styles.sidebar}>
      <div className={styles.title}>
        CATEGORIES
      </div>
      <nav>
        <ul className={styles.menu}>
          {list.map((category) => (
            <NavLink
              className={({isActive}) => `${styles.link} ${isActive ? styles.activated : ""}`}
              to={`/category/${category}`}
              style={{textDecoration:"none"}}>
              <li key={uuidv4()}>
                {category}
              </li>
            </NavLink>
          ))}
        </ul>
      </nav>
      <div className={styles.footer}>
        <a href="/help" target='_blank' className={styles.link}>
          Help
        </a>
        <a href="/terms" target='_blank' className={styles.link} style={{textDecoration: "underline"}}>
          Terms
        </a>
      </div>
    </section>
  )
}

export default Sidebar;