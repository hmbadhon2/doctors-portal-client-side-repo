import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import useAdmin2 from '../../../hooks/useAdmin2';
import Loading from '../../Shared/Loading/Loading';

const AdminRouts2 = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin2(user?.email)

    if(loading || isAdminLoading){
        return <Loading></Loading>
    }

    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace ></Navigate>
};

export default AdminRouts2;