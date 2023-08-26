import React from 'react';
import { HandySvg } from 'handy-svg';
import TelegramIc from '../../images/telegram.svg';

const TelegramIcon = () => {
  return(
    <HandySvg
      src={TelegramIc}
      className="icon"
      width="20"
      height="20"
    />
  )
}

export default TelegramIcon;