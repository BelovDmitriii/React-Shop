import React from 'react';
import styles from '../../styles/Sidebar.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import logo from '../../images/favourite.png';

const Sidebar = () => {
  const newUuid = uuid();
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
              <li key={newUuid}>
                {category}
              </li>
            </NavLink>
          ))}
          
        </ul>
      </nav>
      <div className={styles.favouriteLink}>
        <NavLink to={'/favourites'} style={{textDecoration:"none", color: 'rgba(0, 0, 0, 0.6)', fontSize: '26px'}}>
          <img style={{width: '20px', height: '20px', marginRight:'10px'}} src={logo} alt="logo" />
          Favourites
        </NavLink>
      </div>
      <div className={styles.footer}>
        <a href="/help" target='_blank' className={styles.link}>
          Help
        </a>
        <br />
        <a href="/terms" target='_blank' className={styles.link} style={{textDecoration: "underline"}}>
          Terms
        </a>

      </div>
    </section>
  )
}

export default Sidebar;