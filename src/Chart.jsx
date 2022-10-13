import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import ReactDOM from 'react-dom'
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import logoo from './img/logoo.png'
import './index.css'

// Generate Sales Data


function Chart () {
  return (  
    <React.Fragment >
      <div className='component'>
        <div className='flex'>
          <img className='logo' src={logoo} alt="logo" />
          <h1 className='number'>5,274,670,915.34 <span className='span'>($35,340.3)</span></h1>
        </div>
        <p className='hive'> Total EHIVE Rewards Generated From Validators </p>
      
       
      </div>
      
      
    </React.Fragment>
  );
}

export default Chart;
  
