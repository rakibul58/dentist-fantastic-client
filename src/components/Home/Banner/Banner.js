import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/images/banner/1.jpg';


const Banner = () => {
    return (
        <section className="bg-gray-100 text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">Welcome to<span>{" "}</span>
                        <span className="text-red-600">Dentist Fantastic</span>
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Get the care you need today
                        <br className="hidden md:inline lg:hidden"/>Bringing You the highest quality of dental care
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link rel="noopener noreferrer" to='/login' className="px-8 py-3 text-lg font-semibold bg-red-600 text-gray-50 rounded-full hover:bg-transparent hover:border hover:border-red-600 hover:text-red-600">Login</Link>
                        <Link rel="noopener noreferrer" to='/services' className="px-8 py-3 text-lg font-semibold border border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-full">Services</Link>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-full sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={img1} alt="" className="object-contain h-72 sm:h-80 lg:h-fit xl:h-112 2xl:h-128 rounded-3xl" />
                </div>
            </div>
        </section>
    );
};

export default Banner;