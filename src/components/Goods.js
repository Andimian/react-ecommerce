import React from 'react';
import goodsList from "../catalog";

const Goods = (props) => {

    // {goodsList.map(item => <Goods title={item.title} price={item.price} image={item.image} />)}

/*    <h3>{props.title}</h3>
    <p>{props.price}</p>
    <img src={props.image}/>*/

    return (
        <div className='goods'>
            <div className='goods__item'>
               catalog
            </div>
        </div>
    );
};

export default Goods;

