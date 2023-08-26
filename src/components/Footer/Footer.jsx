import React from 'react';
import styles from '../../styles/Footer.module.css';
import { Link } from 'react-router-dom';
import {ROUTES} from '../../utils/routes';
import LOGO from '../../images/logo.png';
import TelegramIcon from '../Icons/telegram';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt='logo' />
        </Link>
      </div>
      <div className={styles.rights}>
        Developed by @BelovDmitriii
      </div>
      <div className={styles.contacts}>
        <div>Tel: 8(911)-159-97-53</div>
        <div>email: belovd90@mail.ru</div>
        <div><TelegramIcon/>@BelovDmitriii</div>
      </div>
    </section>
  )
}

export default Footer;