import React, { useState } from 'react';
import { PencilSquareIcon , TrashIcon } from '@heroicons/react/24/solid';

const Review = ({myReview , handleDelete , handleUpdate}) => {
    const {service , _id , review , time} = myReview;
    const [open , setOpen] = useState(false);
    const handleChange = () =>{
        setOpen(!open);
        console.log('clicked')
    }

    //Updating review
    const updateReview = event =>{
        event.preventDefault();
        const newReview = event.target.review.value;
        handleUpdate(_id , newReview , time);
        handleChange();
    }

    return (
        <div className='px-5'>
            <div className="flex flex-col py-4 px-6 space-y-6 overflow-hidden rounded-3xl shadow-md bg-gray-50 text-gray-800">
                <div className="flex flex-wrap gap-2 justify-between sm:gap-0 items-start space-x-4">
                    <div className="flex flex-wrap flex-col space-y-1">
                        <p className="text-xl font-bold text-info">{service}</p>
                        <span className="text-xs text-gray-600">{time}</span>
                    </div>
                    <div className='flex gap-2'>
                        <PencilSquareIcon onClick={handleChange} title='Edit' className='h-6 w-6 text-green-600 hover:text-green-700'></PencilSquareIcon>
                        <TrashIcon onClick={()=>handleDelete(_id)} title='Delete' className='h-6 w-6 text-error hover:text-primary'></TrashIcon>
                    </div>
                </div>
                <div className={`text-center sm:text-start ${!open? 'flex' : 'hidden'}`}>
                    <p name='review' className="text-xl text-gray-600 w-full pt-3 pl-3 rounded-3xl">{review}</p>
                </div>
                <form onSubmit={updateReview} className={`gap-5 text-center sm:text-start ${open? 'flex' : 'hidden'}`}>
                    <textarea name='review' className="text-xl text-gray-600 w-full pt-3 pl-3 rounded-3xl" defaultValue={review}/>
                    <input className='btn btn-error hover:bg-info rounded-full px-6 mt-3' type="submit" value='Update' />
                </form>
            </div>
        </div>
    );
};

export default Review;