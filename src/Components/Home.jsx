import React, { useState } from 'react';

import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Todo } from './Todo';

export const Home=()=>{
   
     const [data, setData] = useState("");

     const handleOnChange=(e)=>{
      setData(e.target.value)
     }
    
    return(
        <>
          <div className="container">
            <section className='mt-3 text-centre'>
                    <h3>Enter Your Task</h3>
                    <div className='todo col-lg-5 mx-auto d-flex
                    justify-content-between align-items-center'>
                        <input 
                        onChange={handleOnChange}
                        className='form-control'
                        name='task'
                        value={data}/>
                        <Button 
                        variant='contained' 
                        className='mx-2'
                       style={{background:"#ee5253"}} >
                         <AddIcon/>
                       </Button>
                    </div>
                    <Todo/>
            </section>
            </div>  
        </>
    )
}