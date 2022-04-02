import React from 'react';

const PriceTag = (props) => {
    const {name, price}= props.priceOption;
    return (
        <div className='bg-orange-200'>
            <h2>{name}</h2>
            <p>{price}</p>
        </div>
    );
};

export default PriceTag;