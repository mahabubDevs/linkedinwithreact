import React from 'react'
import {Grid,TextField} from '@mui/material';
import Headingforreglog from '../components/Headingforreglog';
import Imageforlogreg from '../components/Imageforlogreg';
const Login = () => {
  return (
    <>
        <Grid  container spacing={2}>
        <Grid className='from' item xs={12}>
          <div className='container'>
          <Imageforlogreg />
           <Headingforreglog title={"Login"} para={"Free register and you can enjoy it"} />
          
          <div className='reginput'>
          <TextField className='input' id="outlined-basic" label="E-mail Address" variant="outlined" />
          </div>
          <div className='reginput'>
          <TextField  className='input' id="outlined-basic" label="Password" variant="outlined" /> 
          </div>
            
           
           
          
          <button className='button'>Login</button>

          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default Login