/* eslint-disable */
import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {product} = props;
    const {img,name,price,shipping,seller,id} = product;
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
            <button onClick={ ()=> hendelAddtoCard(product)} className='btn-cart text-style'>
                Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;