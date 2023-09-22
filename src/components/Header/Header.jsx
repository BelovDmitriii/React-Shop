import React from 'react';
import { Link } from 'react-router-dom';
import {ROUTES} from '../../utils/routes';
import LOGO from '../../images/logo.png';
import AVATAR from '../../images/avatar.png';
import styles from '../../styles/Header.module.css';
import SearchIcon from '../Icons/SearchIcon';
import LikeIcon from '../Icons/Like';
import CartIcon from '../Icons/cart';
import { useDispatch, useSelector } from 'react-redux';
import { toggleForm } from '../../features/user/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const {currentUser} = useSelector((user) => user );
  console.log(currentUser);

  const handleClick = () => {
    if(!currentUser){
      dispatch(toggleForm(true));
    }
  }

  return(
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt='logo' />
        </Link>
      </div>
      <div className={styles.mainInfo}>
        <div className={styles.user} onClick={handleClick}>
          <div 
            className={styles.avatar}
          >
            <img src={AVATAR} alt="avatar" />
          </div>
        </div>
        <div className={styles.userName}>
            UserName
        </div>
        <div className={styles.userInfo}>
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
            <div className={styles.box}></div>
          </form>
          <div className={styles.account}>
            <Link to={ROUTES.HOME}>
              <LikeIcon />
            </Link>
            <Link to={ROUTES.CART} className={styles.cart}>
              <CartIcon />
              <span className={styles.count}>15</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;