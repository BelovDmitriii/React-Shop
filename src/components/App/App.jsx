import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppRoutes from '../Routes/Routes';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import styles from '../../styles/App.module.css';
import { getCategories } from '../../features/categories/categoriesSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

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