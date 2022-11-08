import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    // for storing error
    const [error, setError] = useState('');
    // for creating use and setting img and name to profile
    const { createUser, updateUserProfile } = useContext(AuthContext);

    // Registering 
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const imageURL = form.imageURL.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name , imageURL , email , password);

        // creating user
        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                setError('');
                const profile = {
                    displayName: name,
                    photoURL: imageURL
                };
                // setting image and name
                updateUserProfile(profile)
                    .then(() => { })
                    .catch(error => setError(error.message));
            })
            .catch(error=>{
                // console.error(error);
                setError(error.message)
            });

    }
    return (
        <div>
            {/* Dynamic Title */}
            <Helmet>
                <title>Register</title>
                <meta name="description" content="Dentist Service" />
            </Helmet>
            <div className="flex flex-col max-w-md p-6 rounded-3xl sm:p-10 bg-gray-50 text-gray-800 mx-auto mb-16 mt-4">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold text-error">Register</h1>
                    <p className="text-sm text-gray-600">Register to create an account</p>
                </div>
                {/* Register Form */}
                <form onSubmit={handleSubmit} className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm">Full Name</label>
                            <input type="text" name="name" id="name" placeholder="Enter Your Name" className="w-full px-3 py-2 border rounded-full border-gray-300 bg-gray-50 text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="imageURL" className="block mb-2 text-sm">Image URL</label>
                            <input type="text" name="imageURL" id="imageURL" placeholder="Image URL" className="w-full px-3 py-2 border rounded-full border-gray-300 bg-gray-50 text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="Enter Your Email" className="w-full px-3 py-2 border rounded-full border-gray-300 bg-gray-50 text-gray-800" required />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                            </div>
                            <input type="password" name="password" id="password" placeholder="Enter Password" className="w-full px-3 py-2 border rounded-full border-gray-300 bg-gray-50 text-gray-800" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <input type="submit" className="w-full px-8 py-3 font-semibold rounded-full bg-red-600 text-gray-50 hover:border hover:border-red-600 hover:bg-gray-50 hover:text-red-600" value='Register' />
                        </div>
                        <p className='text-center text-error'><small>{error}</small></p>
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