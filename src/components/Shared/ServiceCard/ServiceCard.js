import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
    const { _id, image, description, price } = service;
    return (
        <div className="max-w-xs rounded-3xl shadow-md bg-gray-50 text-gray-800">
            <PhotoProvider>
                <PhotoView src={image}>
                    <img src={image} alt="" className="object-cover object-center w-full rounded-t-3xl h-72 bg-gray-500" />
                </PhotoView>
            </PhotoProvider>
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide text-warning">{service.service}</h2>
                    <p className="text-gray-800">{description.length > 100 ? description.slice(0, 60) + '...' : description}</p>
                </div>
                <div className='flex justify-start'>
                    <span className='font-bold text-warning'>Price: {price}$</span>
                </div>
                <Link to={`/services/${_id}`}><button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-full bg-error text-gray-100 hover:bg-info">View Details</button></Link>
            </div>
        </div>
    );
};

export default ServiceCard;