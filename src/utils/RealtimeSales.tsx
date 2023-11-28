

// import React, { useState, useEffect } from 'react';

// const initialData:any = {
//   labels: [],
//   datasets: [
//     {
//       label: '',
//       backgroundColor: '#6466f1',
//       data: [],
//     },
//   ],
// };

// const RealTimeData = () => {
//   const [data, setData] = useState(initialData);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const newData = {
//         labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
//         datasets: [
//           {
//             label: `$${Math.floor(Math.random() * 100)}K`,
//             backgroundColor: ['#6466f1'],
//             data: Array(7)
//               .fill(0)
//               .map(() => Math.floor(Math.random() * 5)), 
//           },
//         ],
//       };

//       setData(newData);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);
//   return data;
// };

// export default RealTimeData;


import React, { useState, useEffect } from 'react';

const RealTimeData = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: '',
        borderColor: '#6466f1', 
        fill: true, 
        data: [],
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const currentDayOfMonth = currentDate.getDate();

      const newLabels = Array(currentDayOfMonth)
        .fill(0)
        .map((_, index) => `Day ${index + 1}`);

      const newData:any = {
        labels: newLabels,
        datasets: [
          {
            label: `$${Math.floor(Math.random() * 100)}K`,
            backgroundColor: '#c6d3fd',
            borderColor: '#6466f1',
            borderWidth:1,
            fill: true,
            data: Array(currentDayOfMonth)
              .fill(4)
              .map(() => Math.floor(Math.random() * 5)),
          },
        ],
      };

      setData(newData);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return data;
};

export default RealTimeData;