import React from 'react';
import { HandySvg } from 'handy-svg';
import iconCloud from '../../images/cloud.svg';


const LikeIcon = () => {
  return(
    <HandySvg
      src={iconCloud}
      className="icon"
      width="32"
      height="32"
    />
  )
}

export default LikeIcon;