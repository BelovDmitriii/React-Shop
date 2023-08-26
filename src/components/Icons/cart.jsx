import React from 'react';
import { HandySvg } from 'handy-svg';
import Cart from '../../images/cart.svg';

const CartIcon = () => {
  return(
    <HandySvg
      src={Cart}
      className="icon"
      width="32"
      height="32"
    />
  )
}

export default CartIcon;