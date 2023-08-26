import React from 'react';
import { Link } from 'react-router-dom';
import {ROUTES} from '../../utils/routes';
import LOGO from '../../images/logo.png';
import AVATAR from '../../images/avatar.png';
import { SearchIcon } from '../../Icons/SearchIcon';
import styles from '../../styles/Header.module.css';

const Header = () => {
  return(
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt='logo' />
        </Link>
      </div>
      <div className={styles.mainInfo}>
        <div className={styles.user}>
          <div 
            className={styles.avatar}
          >
            <img src={AVATAR} alt="avatar" />
          </div>
        </div>
        <div className={styles.userInfo}>
          <div className={styles.userName}>
            UserName
          </div>
          <form className={styles.form}>
            <div className={styles.icon}>
              <SearchIcon />
            </div>
            <div className={styles.input}>
              <input 
                type="search"
                name="search"
                placeholder="Поиск товара..."
                autoComplete="off"
                onChange={() => {}}
                value=""
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Header;