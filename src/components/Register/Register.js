import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <Helmet>
                <title>Register</title>
                <meta name="description" content="Dentist Service" />
            </Helmet>
            <div className="flex flex-col max-w-md p-6 rounded-3xl sm:p-10 bg-gray-50 text-gray-800 mx-auto mb-16 mt-4">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold text-error">Register</h1>
                    <p className="text-sm text-gray-600">Register to create an account</p>
                </div>
                <form className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label for="name" className="block mb-2 text-sm">Full Name</label>
                            <input type="text" name="name" id="name" placeholder="Enter Your Name" className="w-full px-3 py-2 border rounded-full border-gray-300 bg-gray-50 text-gray-800" />
                        </div>
                        <div>
                            <label for="imageURL" className="block mb-2 text-sm">Image URL</label>
                            <input type="text" name="imageURL" id="imageURL" placeholder="Image URL" className="w-full px-3 py-2 border rounded-full border-gray-300 bg-gray-50 text-gray-800" />
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="Enter Your Email" className="w-full px-3 py-2 border rounded-full border-gray-300 bg-gray-50 text-gray-800" required/>
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label for="password" className="text-sm">Password</label>
                            </div>
                            <input type="password" name="password" id="password" placeholder="Enter Password" className="w-full px-3 py-2 border rounded-full border-gray-300 bg-gray-50 text-gray-800" required/>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="button" className="w-full px-8 py-3 font-semibold rounded-full bg-red-600 text-gray-50 hover:border hover:border-red-600 hover:bg-gray-50 hover:text-red-600">Register</button>
                        </div>
                        <p className="px-6 text-sm text-center text-gray-600">Already have an account?
                            <Link rel="noopener noreferrer" to='/login' className="hover:underline text-red-600"> Login</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;