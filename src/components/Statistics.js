import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from './Chart';

const Statistics = () => {
    const topicsData = useLoaderData().data;
    // console.log(topicsData);
    return (
        <div>
            <p>statistics</p>
            <Chart topicsData={topicsData}></Chart>
        </div>
    );
};

export default Statistics;