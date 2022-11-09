import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const serviceData = useLoaderData();
    const { image, service, price, description } = serviceData;
    return (
        <div className='px-10'>
            <div className="max-w-full rounded-3xl shadow-xl bg-gray-50 text-secondary flex flex-wrap my-20">
                <div className='lg:w-1/3 w-full'>
                    <img src={image} alt="" className="object-cover object-center h-full w-full rounded-l-3xl bg-gray-500" />
                </div>
                <div className="lg:w-2/3 flex flex-col justify-between pl-8 pr-6 py-8 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{service}</h2>
                        <p className="text-gray-500">{description}</p>
                    </div>
                    <p className='text-info font-bold text-xl'>Price: {price}$</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;