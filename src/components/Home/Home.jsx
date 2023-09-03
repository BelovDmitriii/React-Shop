import React from 'react';
import Poster from '../Poster/Poster';
import Products from '../Products/Products';
import { useSelector } from 'react-redux';
import Categories from '../Categories/Categories';

const Home = () => {
  const { products, categories } = useSelector((state) => state);
  return (
    <>
      <Poster />
      <Products products={products.list} amount={8} title="Trending"/>
      <Categories products={categories.list} amount={4} title="You must see THIS"/>
    </>
  )
}

export default Home;