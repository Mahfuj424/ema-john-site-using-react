import React from 'react';
import Cart from '../cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
    const cart = useLoaderData();
    

    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-9 my-10 mx-auto'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                    />)
                }
            </div>
            <div className='col-span-3 mt-20 me-10'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;