import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../../Shared/ServiceCard/ServiceCard';

const MyServices = () => {
    const [service, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services?length=3')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div>
            <div className="space-y-2 text-center mb-8 mt-12">
                <h2 className="text-5xl font-bold text-error">Services</h2>
                <p className="font-serif text-md text-gray-600">Services that you might get if you visit</p>
            </div>
            <div className='flex flex-wrap justify-evenly mb-12 gap-y-5 lg:gap-y-0'>
                {
                    service.map(service=><ServiceCard
                    key={service._id}
                    service={service}
                    >
                    </ServiceCard>)
                }
            </div>
            <div className='flex justify-center mb-12'>
                <Link to='/services'><button type="button" className="px-8 py-3 font-semibold rounded-full bg-error text-gray-100 hover:bg-info">See All</button></Link>
            </div>
        </div>
    );
};

export default MyServices;