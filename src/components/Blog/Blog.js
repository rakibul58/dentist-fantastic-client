import React from 'react';
import { Helmet } from 'react-helmet';

const Blog = () => {
    return (
        <div className='px-10'>
            <Helmet>
                <title>Blogs</title>
            </Helmet>
            <h1 className='text-3xl mt-6 font-bold text-error'>Recent Blogs</h1>
            <div className='flex flex-wrap gap-x-5 gap-y-8 justify-around mt-8 mb-20'>
                <div className="card w-96 bg-red-800 shadow-xl bg-opacity-10">
                    <div className="card-body">
                        <h2 className="card-title font-bold text-error">Difference between SQL and NoSQL</h2>
                        <p className='text-black'>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                    </div>
                </div>
                <div className="card w-96 bg-red-800 shadow-xl bg-opacity-10">
                    <div className="card-body">
                        <h2 className="card-title font-bold text-error">What is JWT, and how does it work?</h2>
                        <p className='text-black'>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. <br/> 
                        Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. 
                        </p>
                    </div>
                </div>
                <div className="card w-96 bg-red-800 shadow-xl bg-opacity-10">
                    <div className="card-body">
                        <h2 className="card-title font-bold text-error">What is the difference between javascript and NodeJS?</h2>
                        <p className='text-black'>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                    </div>
                </div>
                <div className="card w-96 bg-red-800 shadow-xl bg-opacity-10">
                    <div className="card-body">
                        <h2 className="card-title font-bold text-error">How does NodeJS handle multiple requests at the same time?</h2>
                        <p className='text-black'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;