import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const MyAppointment2 = () => {
  const {user} = useContext(AuthContext)

    const url = `http://localhost:5000/bookings?email=${user?.email}`
    const { data: bookings =[]} = useQuery({
        queryKey:['bookings', user?.email],
        queryFn:()=> fetch(url,{
          headers:{
            authorization:`bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
         return data;
        })
        
    })

    return (
        <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Treatment</th>
        <th>Date </th>
        <th>Time</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
     
     {
      bookings.map ((booking, i) =>  <tr key={booking._id}>
      <th>{i}</th>
      <td>{booking.patientName}</td>
      <td>{booking.treatment}</td>
      <td>{booking.appointmentDate}</td>
      <td>{booking.slot}</td>
      <td>
        {
          booking.price && !booking.paid &&
          <Link to={`/dashboard/payment/${booking._id}`}>
           <button className=' btn-primary btn-sm rounded'> Pay</button>
          </Link>
        }

        {
           booking.price && booking.paid &&
           <span className='text-success'> Paid </span>  
        }
      </td>
    </tr>)
     }
     
    </tbody>
  </table>
</div>
    );
};

export default MyAppointment2;