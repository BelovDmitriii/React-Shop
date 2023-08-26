import React from 'react';
import { HandySvg } from 'handy-svg';
import iconSrc from '../../images/search.svg';

const SearchIcon = () => {
  return(
    <HandySvg
      src={iconSrc}
      className="icon"
      width="20"
      height="20"
    />
  )
}

export default SearchIcon;