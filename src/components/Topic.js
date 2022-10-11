import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    // console.log(topic);
    const {id, name, logo} = topic;
    return (
        <Link to={`/quiz/${id}`}>
            <div className=''>
            <img className='bg-slate-100 w-50' src={logo} alt="" />
            <div className='flex mt-6'>
                <h1 className='flex-1 w-64'>{name}</h1>
                <button className='flex-1 w-32'>practice</button>
            </div>
        </div>
        </Link>
    );
};

export default Topic;