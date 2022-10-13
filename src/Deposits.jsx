import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

 function Deposits() {
  return (
    <React.Fragment>
      <h2>Recent Deposits</h2>
      <p> 
        <h4>
        $3,024.00
        </h4>
      </p>
      <p className=''>
        on 15 March, 2019
      </p>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Deposits ;
