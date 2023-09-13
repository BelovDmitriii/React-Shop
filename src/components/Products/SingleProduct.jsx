import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductQuery } from '../../features/api/apiSlice';
import { ROUTES } from '../../utils/routes';
import Product from './Product';
import Products from './Products';
import { useDispatch, useSelector } from 'react-redux';
import { getRelatedProducts } from '../../features/products/productsSlice';

function SingleProduct() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { related } = useSelector(({ products }) => products);

  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({id});

  useEffect(() => {
    if(!isFetching && !isLoading && !isSuccess){
      navigate(ROUTES.HOME);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isLoading, isFetching, isSuccess]);

  useEffect(() => {
    console.log(data);
    if(data){
      dispatch(getRelatedProducts(data.category));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    !data ? (
      <section className="preloader">
        Loading...
      </section>
    ) : (
      <>
        <Product {...data} />
        <Products products={related} amount={4} title="Related products"/>
      </>
    )
  )
}

export default SingleProduct;