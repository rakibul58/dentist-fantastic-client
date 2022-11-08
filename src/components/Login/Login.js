import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <Helmet>
                <title>Login</title>
                <meta name="description" content="Dentist Service" />
            </Helmet>
            <div className="w-full max-w-md p-8 space-y-3 rounded-3xl bg-gray-50 text-gray-800 mx-auto shadow-xl mt-4 my-8">
                <h1 className="text-2xl font-bold text-center text-error">Login</h1>
                <form novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-3 text-sm">
                        <label htmlFor="username" className="block text-gray-600">Email</label>
                        <input type="email" name="email" id="username" placeholder="Email" className="w-full rounded-full border px-4 py-3 border-gray-300 bg-gray-50 text-gray-800 focus:border-red-600" required />
                    </div>
                    <div className="space-y-3 text-sm">
                        <label htmlFor="password" className="block text-gray-600">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="border w-full px-4 py-3 rounded-full border-gray-300 bg-gray-50 text-gray-800 focus:border-red-600" required />

                    </div>
                    <button className="block w-full p-3 text-center rounded-full text-gray-50 bg-red-600 hover:border hover:border-error hover:text-error hover:bg-gray-50 font-semibold">Login</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                    <p className="px-3 text-sm text-gray-600">Or</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-3 space-x-4 border rounded-full focus:ring-2 focus:ring-offset-1 border-blue-600 focus:ring-red-600 font-semibold hover:bg-blue-50">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current text-blue-500">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Login with Google</p>
                    </button>
                </div>
                <p className="text-xs text-center sm:px-6 text-gray-600">Don't have an account?
                    <Link rel="noopener noreferrer" to='/register' className="underline text-gray-800 text-error"> Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;