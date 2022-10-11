import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from './Topic';

const Topics = () => {
    const topicsData = useLoaderData().data;
    console.log(topicsData);
    return (
        <div>
            <div className='grid grid-cols-4 gap-2 m-10'>
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