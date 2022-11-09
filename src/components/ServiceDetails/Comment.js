import React from 'react';


const Comment = ({comment , user}) => {
    const {review , reviewer , photoURL , time} = comment;
    return (
        <div className='px-5'>
            <div className="flex flex-col p-6 space-y-6 overflow-hidden rounded-3xl shadow-md bg-gray-50 text-gray-800  w-full">
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start sm:gap-0 items-center space-x-4">
                    <img alt="" src={photoURL} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
                    <div className="flex flex-wrap flex-col space-y-1">
                        <p className="text-sm font-semibold">{reviewer === user?.displayName ? 'Me' : reviewer}</p>
                        <span className="text-xs text-gray-600">{time}</span>
                    </div>
                </div>
                <div className='text-center sm:text-start'>
                    <p className="text-xl text-gray-600">{review}</p>
                </div>
            </div>
        </div>
    );
};

export default Comment;