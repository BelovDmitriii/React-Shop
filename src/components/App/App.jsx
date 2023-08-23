import React from 'react';
import AppRoutes from '../Routes/Routes';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import styles from '../../styles/App.module.css';

const App = () => {
  return(
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  )
}

export default App;