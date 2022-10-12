import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


const Chart = ({topicsData}) => {
    console.log(topicsData);
    const data = [
        {
          name: topicsData[0].name,
          uv: 4000,
          Total: topicsData[0].total,
          amt: 2400
        },
        {
          name: topicsData[1].name,
          uv: 3000,
          Total: topicsData[1].total,
          amt: 2210
        },
        {
          name: topicsData[2].name,
          uv: 2000,
          Total: topicsData[2].total,
          amt: 2290
        },
        {
          name: topicsData[3].name,
          uv: 2780,
          Total: topicsData[3].total,
          amt: 2000
        }
      ];
      
    return (
        <div>
            
           <LineChart width={500} height={400} data={data}>
           <Line type="monotone" dataKey="Total" stroke="#CDDC39" activeDot={{ r: 8 }} />
           <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
           </LineChart> 
        </div>
    );
};

export default Chart;