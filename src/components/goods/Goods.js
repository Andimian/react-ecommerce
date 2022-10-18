import React from 'react';

const Goods = (props) => {

    const showAlert = () => {
        alert('wow');
    }

    let res = props.goods.map(function(item) {
        return <li key={item.id}>
            <h3 onClick={showAlert}>{item.title}</h3>
            <p>{item.price}</p>
            <div className="goods__img">
                <img src={item.image} alt=""/>
            </div>
        </li>;
    });

    return (
        <ul className='goods'>
            {res}
        </ul>
    );
};

export default Goods;
