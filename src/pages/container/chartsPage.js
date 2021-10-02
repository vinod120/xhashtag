import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'First dataset',
      data: [2000, 4000, 3500, 3000, 8000, 6000, 2000],
      borderColor: '#bf0a9e',
    },
  ],
};
function ChartPage() {
  return (
    <div>
      <Line data={data} />
    </div>
  );
}

export default ChartPage;
