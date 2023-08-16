/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import React from 'react';
import './Cart.css'


const Cart = ({cart}) => {
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    let grandTotal = 0;
    for(let product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    let tax = total * 7 /100;
    grandTotal = grandTotal + total + tax;
    return (
        <div className='cart'>
            <h2 style={{marginLeft:'15px'}}>Order Summary</h2>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${parseFloat(tax.toFixed(2))}</p>
                <h3>Grand Total: ${parseFloat(grandTotal.toFixed(2))}</h3>
        </div>
    );
};

export default Cart;