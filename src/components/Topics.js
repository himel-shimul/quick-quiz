import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from './Topic';
import image from '../utilities/metrixs.jpg'

const Topics = () => {
    const topicsData = useLoaderData().data;
    console.log(topicsData);
    return (
        <div className='px-4 py-16 h-screen mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <p className='text-3xl font-bold'>Welcome to all the code lovers!</p>
            <p className='text-2xl '>Click the Button as you wish</p>
            <div className='grid lg:grid-cols-4 lg:cols-gap-8 gap-8 m-10'>
            {
                topicsData.map(topic => <Topic 
                key={topic.id}
                topic={topic}
                ></Topic>)
            }
        </div>
        </div>
    );
};

export default Topics;