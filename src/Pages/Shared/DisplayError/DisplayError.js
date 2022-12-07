import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const DisplayError = () => {
    const {logOut} =  useContext(AuthContext)
    const error = useRouteError()
    
    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(err => console.err(err))
       }
  

    return (
        <div>
                 <p className='text-center'>
                         {error.statusText || error.message}
                </p>

                <h4 className="text-3xl"> <button onClick={handleLogOut}>Please Sign Out</button></h4>
        </div>
    );
};

export default DisplayError;