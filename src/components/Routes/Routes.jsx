import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import { ROUTES } from '../../utils/routes';
import SingleProduct from '../Products/SingleProduct';
import Favourites from '../Favourites/Favourites';

const AppRoutes = () => {
  return(
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProduct/>} />
      <Route path={ROUTES.FAVOURITE} element={<Favourites />} />
    </Routes>
  )
}

export default AppRoutes;