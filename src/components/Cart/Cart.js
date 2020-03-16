import React from 'react';

const Cart = (props) => {
    const freind=props.freind;
let total=0;
for(let i=0;i<freind.length;i++){
    const add=freind[i];
    total=total +add.price;
}

    return (
        <div>
            <h4>Total add friend</h4>
            <p>add friend:{freind.length}</p>
    <p>Total freind:{total}</p>
        </div>
    );
};

export default Cart;