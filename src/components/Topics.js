import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from './Topic';

const Topics = () => {
    const topicsData = useLoaderData().data;
    console.log(topicsData);
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
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