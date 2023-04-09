import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'

const ReviewItem = ({ product }) => {
    const { img, name, price, quantity } = product;
    return (
        <div className='w-[750px]'>
            <div className='border mx-auto p-3 flex justify-between'>
                <div className='flex gap-5'>
                    <img className='w-32 h-32 rounded-lg' src={img} alt="" />
                    <div>
                        <h1 className='text-2xl'>{name}</h1>
                        <h3 className='text-lg my-3'>Shopping charge : ${quantity}</h3>
                        <h3 className='text-lg'>Price : ${price}</h3>
                    </div>
                </div>
                <div onClick={()=> flasfjls} className='my-auto cursor-pointer text-red-500 '>
                    <TrashIcon className='w-16 h-16 bg-red-200 rounded-full p-3'/>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;