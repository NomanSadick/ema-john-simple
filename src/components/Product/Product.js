import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus } from '@fortawesome/free-solid-svg-icons'
import './Product.css';


const Product = (props) => {
    //console.log(props.product);
    const { img, name ,price } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                
                <p>Salary:${price}</p>
                <br />
                
                <button className="main-button"
                onClick={()=>props.handleAddFriend(props.product)}
                >
                     <FontAwesomeIcon icon={faPlus} />add friend</button>
            </div>


        </div>
    );
};

export default Product;