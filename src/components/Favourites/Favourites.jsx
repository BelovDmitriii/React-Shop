import React, {useState} from 'react';
import Products from '../Products/Products';
import { useSelector } from 'react-redux';

const Favourites = () => {
  const { products: {list} } = useSelector((state) => state);
  
  const [amount, setAmount] = useState(4);

  const handleShowMoreButton = () => {
    setAmount(prevAmount => prevAmount + 4);
  }
  
  return(
    <>
      <Products products={list} amount={amount} title="Your Favourite Products"/>
      <div style={{margin: '15px auto'}}>
        {amount < list.length && (
          <button
            style={{border: 'none', cursor:'pointer'}}
            onClick={handleShowMoreButton}
          >Show more...
          </button>
        )}
      </div>
    </>
  )
}

export default Favourites;