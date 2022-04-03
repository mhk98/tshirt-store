import React from 'react';
import './TShirt.css'

const TShirt = ({handleAddToCart, tShirt}) => {
    const {name, price, picture} = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture}></img>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(tShirt)}>Add To Cart</button>
        </div>
    );
};

export default TShirt;