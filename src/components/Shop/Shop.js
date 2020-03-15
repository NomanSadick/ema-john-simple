import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const first10 = fakeData.slice(0,15);
    const [products] = useState(first10);
    const [freind, setFriend]=useState([]);
    const handleAddFriend=(product)=>{
        console.log('add freind')
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
                <h1>Toatal add friend</h1>
            <h5>Total add list:{freind.length}</h5>
            </div>
            
            
           
        </div>
    );
};

export default Shop;