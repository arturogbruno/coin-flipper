import React from 'react';
import './Coin.css';

const Coin = ({ side, imgSrc }) => {
    console.log(side);
    return(
        <img src={imgSrc} alt={side} />
    )
}

export default Coin;