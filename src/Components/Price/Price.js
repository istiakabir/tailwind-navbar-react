import React from 'react';
import PriceTag from '../PriceTag/PriceTag';

const Price = () => {
 const PriceOptions = [
     {id:1, name: 'Free', price: 0},
     {id:2, name: 'Standard', price: 9.99},
     {id:3, name: 'Premium', price: 50}
 ];


    return (
        <div>
            <h2>THIS IS PRICE LIST HERE</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae amet quod molestiae aliquid, iste voluptas voluptates facilis totam soluta natus.</p>
           <div className='grid grid-cols-3 gap-52'>
           {
                PriceOptions.map(PriceOption => <PriceTag
                key ={PriceOption.id}
                priceOption= {PriceOption}
                ></PriceTag>)
            }
           </div>
        </div>
    );
};

export default Price;