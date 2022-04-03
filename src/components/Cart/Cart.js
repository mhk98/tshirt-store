import React from 'react';
import TShirt from '../TShirt/TShirt';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {

    // 1. Conditional Rendering
    // 2. Ternary operator
    // 3. && Operator (shorthand)
    // 4. 
    let command;
    if(cart.length === 0){
        command = <p>Please add at least one item</p>
    }
    else if(cart.length === 1){
        command = <p>Please add more item</p>
    }
    else{
        command = <p>Thanks for adding item</p>
    }
    return (
        <div>
            <h2>Selected Item: {cart.length}</h2>
            
            {
                cart.map(tShirt => 
                <p>{tShirt.name}
                <button onClick={() =>handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }

            {cart.length === 0 || <p className='orange'> YAY! You are buying</p>}

            {cart.length===3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>Tin jon ke ki gift diba</p>
                </div>}
            {command}

            {cart.length ===4 ? <p>Keep Adding</p> : <button>Remove All</button>}
            {cart.length === 4 && <button>Review Order</button>}
        </div>
    );
};

export default Cart;