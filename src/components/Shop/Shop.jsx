/* eslint-disable*/
import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProducts(data));
    },[])
    const hendelAddtoCard = (product)=>{
        const newCart = [...cart,product];
        setCart(newCart);
        console.log(cart);
    }


    return (
        <div className='shop'>
            <div className='product-conteiner'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product ={product}
                        hendelAddtoCard = {hendelAddtoCard}
                        ></Product>)
                }
            </div>
        
            <div className='cart'>
                <h2 style={{marginLeft:'15px'}}>Order Summary</h2>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: $</p>
                <p>Total Shipping Charge: $</p>
                <p>Tax: $</p>
                <h3>Grand Total: $</h3>
                
            </div>
        </div>
    );
};

export default Shop;