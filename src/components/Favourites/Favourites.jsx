import React, {useState} from 'react';
import Products from '../Products/Products';
import { useSelector } from 'react-redux';

const Favourites = () => {
  const { favourite } = useSelector(({ user }) => user);
  console.log(favourite);
  
  const [amount, setAmount] = useState(4);

  const handleShowMoreButton = () => {
    setAmount(prevAmount => prevAmount + 4);
  }
  
  return(
    <>
      {!favourite.length ? (
        <div style={{color: 'red', fontSize:'32px'}}>Here is empty</div>
      ) : (
        <>
          <Products products={favourite} amount={amount} title="Your Favourite Products"/>
          <div style={{margin: '15px auto'}}>
            {amount < favourite.length && (
              <button
                style={{border: 'none', cursor:'pointer'}}
                onClick={handleShowMoreButton}
              >Show more...
              </button>
            )}
          </div>
        </>
      )}
    </>
  )
}

export default Favourites;