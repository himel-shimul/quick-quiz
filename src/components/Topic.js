import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const Topic = ({topic}) => {
    // console.log(topic);
    const {id, name, logo} = topic;
    return (
        <Link to={`/quiz/${id}`}>
            <div className='border rounded p-2 bg-lime-50'>
            <img className='bg-slate-100 w-50' src={logo} alt="" />
            <div className='flex mt-6'>
                <h1 className=' w-1/2 text-xl font-bold p-2 '>{name}</h1>
                <button className=' w-1/2 bg-lime-400 hover:bg-lime-200 rounded-md p-2 text-xl'>practice <ArrowRightIcon className="h-6 w-5 text-gray-800 inline"></ArrowRightIcon></button>
            </div>
        </div>
        </Link>
    );
};

export default Topic;