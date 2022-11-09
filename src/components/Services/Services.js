import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';

const Services = () => {
    const services = useLoaderData();
    return (
        <div className='mb-32'>
            <Helmet>
                <title>Services</title>
            </Helmet>
            <div className="space-y-2 text-center mb-8 mt-12">
                <h2 className="text-5xl font-bold text-error">All Services</h2>
                <p className="font-serif text-md text-gray-600">Services that you might get if you visit</p>
            </div>
            <div className='flex flex-wrap justify-center gap-20'>
                {services.map(service => <ServiceCard
                key={service._id}
                service={service}
                >
                </ServiceCard>)}
            </div>
        </div>
    );
};

export default Services;