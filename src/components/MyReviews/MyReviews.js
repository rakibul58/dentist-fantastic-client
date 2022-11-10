import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Review from './Review';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews , setReviews] = useState([]);

    const notifyDelete = () => toast.success('Review Deleted Successfully');

    //review loading
    useEffect(()=>{
        fetch(`http://localhost:5000/comments?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data));
    },[user?.email]);

    // delete comment
    const handleDelete = id =>{
        const proceed = window.confirm("Are You sure you want to delete?");
        if(proceed){
            fetch(`http://localhost:5000/comments/${id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount>0){
                    notifyDelete();
                    const remaining = reviews.filter(rev => rev._id!== id);
                    setReviews(remaining);
                }
            })
        }
    }

    return (
        <div>
            <Helmet>
                <title>My Reviews</title>
            </Helmet>
            <h1 className='text-3xl text-error mt-5 mb-12 font-bold text-center'>My Reviews</h1>
            <div className='flex flex-col gap-5 mb-16'>
                {
                    reviews.map(myReview => <Review
                    key={myReview._id}
                    myReview={myReview}
                    handleDelete={handleDelete}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default MyReviews;