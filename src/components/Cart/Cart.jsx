/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import React from 'react';
import './Cart.css'


const Cart = ({cart}) => {

    let total = 0;
    let shipping = 0;
    let grandTotal = 0;
    let quantity = 0;

    for(let product of cart){

        // product.quantity = product.quantity || 1;

        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
          
        quantity = quantity + product.quantity;
    }

    let tax = total * 7 /100;
    grandTotal = grandTotal + total + tax;


    return (
        <div className='cart'>
            <h2 style={{marginLeft:'15px'}}>Order Summary</h2>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${parseFloat(tax.toFixed(2))}</p>
                <h3>Grand Total: ${parseFloat(grandTotal.toFixed(2))}</h3>
        </div>
    );
};

export default Cart;