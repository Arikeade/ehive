import * as React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';


import './index.css'




// Generate Order Data
function Orders() {

  
  
  return (

   
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}
        direction="row"
        justifyContent="center"
        alignItems="center">
          <Grid item xs={3}>        
            <div className="grid1">
              <div>
                <div className="column">
                  <img src="" alt="" />
                </div>
                <div className="column right-align">
                  <a href="/chart">
                   <div id="button-wrapper">
                     <button>View Chart</button>
                   </div>
                  </a>
                </div>
              </div>
              <div>
                <i className="fa-brands fa-ethereum"></i> 
                <h4>1,325.367</h4>
              </div>
              <div>
                <i className="fa-solid fa-dollar-sign"></i>
                <h4>0.00000871</h4>
              </div>
            </div>            
         </Grid>
         
            <Grid item xs={7} >    
              <div className="grid2">
                <div >
                  <h3>Staked Tokens</h3>
                </div>
                <div >
                  <img className='' src="" alt="" /> 
                  <h4>0</h4>
                </div>
                <div>
                  <i className="fa-solid fa-dollar-sign"></i> 
                  <h4>0</h4>
                </div>
              </div>  
            </Grid>
          
        </Grid>

        <div className='layer'>
          <div className='layer1'>
            <div>
              <h4>Unclaimed</h4>
            </div>
            <div className='flex'>
              <div>
               <h4>0</h4>
              </div>
              <div className='click'>
               <p>EHIVE</p>
              </div>          
            </div>
            <div>
              <i className="fa-solid fa-dollar-sign"></i> 
              <h4>0</h4>
            </div>
          </div>              

          <div className='layer1'>   
            <div>
              <h4>Claimed</h4>
            </div>
            <div className='flex'>
              <div>
               <h4>0</h4>
              </div>
              <div className='click'>
               <p>EHIVE</p>
              </div>          
            </div>
            <div>
              <i className="fa-solid fa-dollar-sign"></i> 
              <h4>0</h4>
            </div>
          </div>
            
          <div>
          <h4>Claimed History </h4>
          <div>             
            <div>
              <table >
                <thead className='thead'>
                  <tr >
                    <th>Date</th>
                    <th>Value</th>
                    <th>EHIVE</th>
                  </tr>
                </thead>
                <tbody ></tbody>
              </table>
            </div>
          </div>
        </div>  
      </div>  
      <div className='button'>
      <button className='pointer'> Connect Wallet</button>  
      </div>
       
     </Box>
   
  
  );
}

export default Orders;






