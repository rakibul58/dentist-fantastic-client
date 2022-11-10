import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AddServices = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [image , setImage] = useState('');
    //toast
    const notify = () => toast.success('Service Added Successfully');

    //sets image beside the form
    const handleBlur = event =>{
        event.preventDefault();
        const imageURL = event.target.value;
        setImage(imageURL);
    }

    //sends new service to database
    const handleSubmit = event =>{
        event.preventDefault();
        const form  = event.target;
        const service = form.service.value;
        const price = form.price.value;
        const description = form.description.value;

        // console.log(service , price , description , image);
        const order = {
            service,
            price,
            image,
            description
        }

        fetch('https://dentist-fantastic-server.vercel.app/services' , {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.acknowledged){
                notify();
                form.reset();
                //navigate to all services
                navigate('/services');
            }
        })
        .catch(err=>console.error(err));
    }
    return (
        <div>
            <Helmet>
                <title>Add Service</title>
            </Helmet>
            <div className="space-y-2 text-center mb-8 mt-12">
                <h2 className="text-4xl font-bold text-error">Add Service</h2>
                <p className="font-serif text-md text-gray-600">Services that You Want to Add , Please Add Here</p>
            </div>
            <section className="px-6  bg-gray-100 text-gray-900 mt-12 mb-20">
                <form onSubmit={handleSubmit} noValidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                    <fieldset className="grid grid-cols-4 gap-12 shadow-sm bg-gray-500 bg-opacity-10 py-12 px-12 rounded-3xl">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-bold text-3xl text-error">{user?.displayName ? user?.displayName : user?.email}</p>
                            <p className="text-xs font-semibold">{user?.email}</p>
                            <div>
                                <img className='mt-6 rounded-3xl' src={image} alt="" />
                            </div>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="service" className="text-lg">Service</label>
                                <input name='service' id="service" type="text" placeholder="Enter Service" className="w-full rounded-full focus:ring focus:ring-opacity-75 focus:ring-red-600 bg-gray-100 border border-gray-300 text-gray-900 mt-2 pl-3 py-4 bg-opacity-80" required/>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="price" className="text-lg">Price</label>
                                <input name='price' id="price" type="number" placeholder="Enter an Amount" className="w-full rounded-full focus:ring focus:ring-opacity-75 focus:ring-red-600 bg-gray-100 border border-gray-300 text-gray-900 mt-2 pl-3 py-4 bg-opacity-80" required/>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="address" className="text-lg">Image URL</label>
                                <input onBlur={handleBlur} id="address" type="text" placeholder="Enter Image URL" className="w-full rounded-full focus:ring focus:ring-opacity-75 focus:ring-red-600 bg-gray-100 border border-gray-300 text-gray-900 mt-2 pl-3 py-4 bg-opacity-80" required/>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="description" className="text-lg">Description</label>
                                <textarea name='description' rows='4' id="description" type="text" placeholder="Description" className='w-full rounded-3xl focus:ring focus:ring-opacity-75 focus:ring-red-600 bg-gray-100 border border-gray-300 text-gray-900 mt-2 pl-3 py-4 bg-opacity-80' required/>
                            </div>
                            <input className='btn btn-error hover:btn-info rounded-full' type="submit" value="Add Service" />
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default AddServices;