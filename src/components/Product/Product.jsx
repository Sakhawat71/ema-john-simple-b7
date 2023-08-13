/* eslint-disable */
import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {

    const {img,name,price,shipping,seller,id} = props.product;
    const hendelAddtoCard = props.hendelAddtoCard;

    return (
        <div className='singel-porduct'>
            <div className='product-image'>
                <img src={img} alt="" />
            </div>
            <div className='product-info'>
                <h6 className='text-style'>{name}</h6>
                <p className='text-style'>Price: ${price}</p>
                <p className='shipping-remove-margin'>Shipping: ${shipping}</p>
                <small>Seller: {seller}</small>
            </div>
            <button onClick={ ()=> hendelAddtoCard(id)} className='btn-cart text-style'>
                Add to Cart <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Product;