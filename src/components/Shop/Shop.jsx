/* eslint-disable*/
import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProducts(data));
    },[])

    useEffect(()=>{
        const stordCart = getShoppingCart();
        const savedCart = [];
        for(const id in stordCart){

            const addedPorduct = products.find(product => product.id === id);
            
            if(addedPorduct){

                const quantity = stordCart[id];
                addedPorduct.quantity = quantity;
                savedCart.push(addedPorduct)
            }
            console.log(addedPorduct);
        }
        setCart(savedCart);

    },[products])


    const hendelAddtoCard = (product)=>{
        const newCart = [...cart,product];
        setCart(newCart);
        addToDb(product.id)
    }


    return (
        <div className='shop'>
            <div className='product-conteiner'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product ={product}
                        hendelAddtoCard = {hendelAddtoCard}
                    >
                    </Product>)
                }
            </div>
        
            <div className='card-component'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;



    /*
        useEffect(()=>{
        const stordCart = getShoppingCart();

        for(const id in stordCart){

            const addedPorduct = products.find(product => product.id === id);

            const quantity = stordCart[id];

            addedPorduct.quantity = quantity;

        }
    },[products])
    
    
    
    */