import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0,15);
    const [products] = useState(first10);
    const [freind, setFriend]=useState([]);
    const handleAddFriend=(product)=>{
        
        const newFriend=[...freind,product];
        setFriend(newFriend);
    }
    

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd => <Product
                        handleAddFriend={handleAddFriend}
                         product={pd}>

                         </Product>)
                }
            </div>
            <div className="cart-container">
            <Cart freind={freind}></Cart>
            </div>
            
            
           
        </div>
    );
};

export default Shop;