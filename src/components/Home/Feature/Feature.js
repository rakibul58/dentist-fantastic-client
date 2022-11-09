import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import img from '../../../assets/images/banner/2.jpg';

const Feature = () => {
    return (
        <section className="bg-gray-100 text-gray-800 my-36">
            <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                <div className="flex flex-col px-6 py-8 space-y-6 rounded-3xl sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-red-600 text-gray-50">
                    <div className="flex space-x-2 sm:space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                        </svg>
                        <div className="space-y-2">
                            <p className="text-2xl font-medium leading-snug">Teeth Whitening</p>
                            <p className="leading-snug">Whitening is among the most popular dental procedures because it can greatly improve how your teeth look.</p>
                        </div>
                    </div>
                    <div className="flex space-x-2 sm:space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                        </svg>
                        <div className="space-y-2">
                            <p className="text-2xl font-medium leading-snug">Teeth Cleaning</p>
                            <p className="leading-snug">Teeth cleaning is part of oral hygiene and involves the removal of dental plaque from teeth (dental caries).</p>
                        </div>
                    </div>
                    <div className="flex space-x-2 sm:space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                        </svg>
                        <div className="space-y-2">
                            <p className="text-2xl font-medium leading-snug">Modern Anesthetic</p>
                            <p className="leading-snug">Dental anesthesia is a field of anesthesia that includes not only local but sedation and general anesthesia.</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 xl:w-3/5 bg-gray-100">
                    <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                        <PhotoProvider>
                            <PhotoView src={img}>
                                <img src={img} alt="" className="rounded-3xl shadow-lg bg-gray-500 aspect-video sm:min-h-96" />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;