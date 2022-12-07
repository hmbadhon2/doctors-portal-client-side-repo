import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin2 from '../hooks/useAdmin2';
// import useAdmin from '../hooks/UseAdmin';

import Header from '../Pages/Shared/Header/Header';

const DashboardLayout = () => {

    const {user} = useContext(AuthContext)
    const [isAdmin] = useAdmin2(user?.email);

    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
             <input id="doctors-drawer" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-content flex flex-col items-center ">
            <Outlet></Outlet>
            </div> 

        <div className="drawer-side">
        <label htmlFor="doctors-drawer" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 text-base-content">
        <li><Link to='/dashboard'>My Appointment</Link></li>
        <li><Link to='/dashboard/myAppointment2'>My Appointment2</Link></li>

        {
          isAdmin &&
          <>
           <li> <Link to='/dashboard/allUser2'> All User 2</Link></li>
           <li> <Link to='/dashboard/adddoctor'> Add A Doctor</Link></li>
           <li> <Link to='/dashboard/managedoctor'> Manage Doctors</Link></li>
          </>  
         
        }
       
      {/* {
        isAdmin &&
        <>
          <li><Link to='/dashboard/allUser'>All User</Link></li>
        </>
      } */}
       
        </ul>
  
  </div>
</div>
            
        </div>
    );
};

export default DashboardLayout;