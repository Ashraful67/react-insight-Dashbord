import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



export default function MidDashbord() {
  const data = [
    {
      name: '2015',
      uv: 4000,
    },
    {
      name: '2016',
      uv: 3000,
    },
    {
      name: '2017',
      uv: 2000,
    },
    {
      name: '2018',
      uv: 2780,
    },
    {
      name: '2019',
      uv: 1890,
    },
    {
      name: '2020',
      uv: 2390,
    },
    {
      name: '2021',
      uv: 3490,
    },
    {
      name: '2022',
      uv: 3490,
    },
    {
      name: '2023',
      uv: 3490,
    },
  ];
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
