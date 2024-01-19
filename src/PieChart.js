import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: 'Group A', value: 30 },
  { name: 'Group B', value: 22 },
  { name: 'Group C', value: 14 },
  { name: 'Group D', value: 20},
  { name: 'Group E', value: 2 },
  { name: 'Group F', value: 14 },
];


export default class Example extends PureComponent {


  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
       
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
