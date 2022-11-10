import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Review from './Review';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    const notifyDelete = () => toast.success('Review Deleted Successfully');
    const notifyUpdate = () => toast.success('Review Updated Successfully');

    //review loading
    useEffect(() => {
        fetch(`http://localhost:5000/comments?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [user?.email, reviews]);

    // delete comment
    const handleDelete = id => {
        const proceed = window.confirm("Are You sure you want to delete?");
        if (proceed) {
            fetch(`http://localhost:5000/comments/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        notifyDelete();
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    //update comment
    const handleUpdate = (id, newReview, time) => {
        const newTime = time + " (Updated)";
        const newReviewElement = {
            review: newReview,
            newTime
        }
        console.log(newReviewElement)
        fetch(`http://localhost:5000/comments/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReviewElement)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    notifyUpdate();
                    const remaining = reviews.filter(com => com._id !== id);
                    const updated = reviews.find(com => com._id === id);
                    updated.review = newReview;
                    updated.time = time;
                    const newComments = [...remaining, updated];
                    setReviews(newComments);
                }
            });
    }

    return (
        <div>
            <Helmet>
                <title>My Reviews</title>
            </Helmet>
            <h1 className='text-3xl text-error mt-5 mb-12 font-bold text-center'>My Reviews</h1>
            {
                reviews.length > 0 ?
                    <>
                        <div className='flex flex-col gap-5 mb-16'>
                            {
                                reviews.map(myReview => <Review
                                    key={myReview._id}
                                    myReview={myReview}
                                    handleDelete={handleDelete}
                                    handleUpdate={handleUpdate}
                                ></Review>)
                            }
                        </div>
                    </> :
                    <>
                        <div className="alert bg-blue-400 shadow-lg my-40 w-1/2 p-10 mx-auto">
                            <div className='mx-auto'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span className='text-xl font-bold'>No Reviews Added</span>
                            </div>
                        </div>
                    </>
            }
        </div>
    );
};

export default MyReviews;