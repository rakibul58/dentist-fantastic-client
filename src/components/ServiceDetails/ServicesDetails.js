import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Comment from './Comment';

const ServicesDetails = () => {
    // shows the services details and comments in this component
    const serviceData = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, image, service, price, description } = serviceData;

    const [oldComment, setOldComment] = useState([]);

    //toast
    const notify = () => toast.success('Review Added Successfully');

    // posting comment
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        const time = new Date().toLocaleString() + "";

        const comment = {
            reviewer: user?.displayName,
            email: user?.email,
            serviceId: _id,
            photoURL: user?.photoURL,
            service,
            review,
            time,
            sort_id: oldComment.length
        }

        fetch('https://dentist-fantastic-server.vercel.app/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    notify();
                    form.reset();
                    const newComment = [...oldComment, comment]
                    // const sortedDates = newComment?.map(obj => { return { ...obj, time: new Date(obj.time) } })
                    //     .sort((a, b) => b.time - a.time)
                    // console.log(sortedDates);
                    setOldComment(newComment);

                }
            })
            .catch(err => console.error(err));
    }


    useEffect(() => {
        fetch(`https://dentist-fantastic-server.vercel.app/comments/${_id}`)
            .then(res => res.json())
            .then(data => setOldComment(data));
    }, [_id, oldComment]);


    // console.log(oldComment)
    return (
        <div className='px-10'>
            <Helmet>
                <title>
                    {service} Details
                </title>
            </Helmet>
            <div className="max-w-full rounded-3xl shadow-xl bg-gray-50 text-secondary flex flex-wrap my-20">
                <div className='lg:w-1/3 w-full'>
                    <PhotoProvider>
                        <PhotoView src={image}>
                            <img src={image} alt="" className="object-cover object-center h-full w-full rounded-l-3xl bg-gray-500" />
                        </PhotoView>
                    </PhotoProvider>

                </div>
                <div className="lg:w-2/3 flex flex-col justify-between pl-8 pr-6 py-8 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{service}</h2>
                        <p className="text-gray-500">{description}</p>
                    </div>
                    <p className='text-info font-bold text-xl'>Price: {price}$</p>
                </div>
            </div>
            {/* Reviews */}
            <div className="divider font-bold text-error text-lg">Reviews</div>
            <div>
                {
                    user ? <>
                        <form onSubmit={handleSubmit} className="col-span-full">
                            <textarea rows='3' id="address" name='review' type="text" placeholder="Comment" className="w-full rounded-3xl focus:ring focus:ring-opacity-75 focus:ring-red-600 bg-gray-100 border border-gray-300 text-gray-900 mt-2 pl-4 bg-opacity-80 pt-3" required />
                            <input type='submit' className='btn font-bold mt-4 mb-12 px-12 rounded-full btn-error hover:bg-info' value='Post' />
                        </form>
                    </>
                        :
                        <>
                            <h1 className='text-center text-gray-900 font-semibold text-xl my-12'>
                                Please <Link className='font-bold text-error' to='/login'>Login</Link> to add an review
                            </h1>
                        </>
                }
            </div>
            {/* comments */}
            <div>
                <h1 className='text-3xl text-error'>{oldComment.length} Reviews Added</h1>
                <div className='mt-8 mb-20 flex flex-col gap-5'>
                    {
                        oldComment.map(comment => <Comment
                            key={comment._id}
                            comment={comment}
                            user={user}
                        >
                        </Comment>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;