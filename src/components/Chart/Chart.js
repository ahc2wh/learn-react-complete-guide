import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';


// Chart shows expense records. Each unit/bar represents a month
const Chart = (props) => {

  // transform from a dataPoint object to a number and save that all as an array (dataPointValues)
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  //totalMaximum is how we determine the max amount by whichever month has the highest amount
  //totalMaximum goes through 12 values using the spreadOperator and gets whichever is the max!
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
