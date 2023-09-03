import React, { useEffect } from 'react';
import Poster from '../Poster/Poster';
import Products from '../Products/Products';
import { useDispatch, useSelector } from 'react-redux';
import Categories from '../Categories/Categories';
import Banner from '../Banner/Banner';
import { filterByPrice } from '../../features/products/productsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { products: {list, filtered}, categories } = useSelector((state) => state);

  useEffect(() => {
    if(!list.length) return;

    dispatch(filterByPrice(15));
  }, [dispatch, list.length])
  return (
    <>
      <Poster />
      <Products products={list} amount={8} title="Trending"/>
      <Categories products={categories.list} amount={4} title="You must see THIS"/>
      <Banner />
      <Products products={filtered} amount={4} title="Special Prices less then 15$"/>
    </>
  )
}

export default Home;