import React from 'react';
import goodsList from "./catalog";

const Goods = (props) => {
    return (
        <div className='goods'>
            <div className='goods__item'>
                <h3>{props.title}</h3>
                <p>{props.price}</p>
                <img src={props.image}/>
            </div>`
        </div>
    );
};

export default Goods;

