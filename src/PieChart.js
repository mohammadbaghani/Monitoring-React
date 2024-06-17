import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';


export default function App(props) {
  const data01 = [
    { name: 'دما', value: props.n },
    { name: 'میزان تولید', value:props.t  },
    { name: 'Group C', value: 14 },
    { name: 'Group D', value: 20},
  
  ];
  


 return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
       
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={90}
            fill="rgb(21, 87, 20)"
            label
          />
       
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );



}



