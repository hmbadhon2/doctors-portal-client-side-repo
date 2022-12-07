
import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const Alluser2 = () => {
    const url = 'http://localhost:5000/users'
    const {data:users =[], refetch} = useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res = await fetch(url)
            const data = await res.json() 
            return data;
        }

    })

    const handleMakeAdmin = id =>{
       fetch(`http://localhost:5000/users/${id}`, {
        method:'PUT'
       })
       .then(res => res.json())
       .then(data => {
        if(data.modifiedCount>0){
            toast.success('Admin created Successfully')
            refetch()
        }
        console.log(data)
       })
    }


   return (
        <div className="overflow-x-auto">
  <table className="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
  
      {
        users.map((user, i) => 
            <tr key={user._id}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                {  user?.role !== 'admin' &&
                    <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>
                }
            </td>
            <td>Blue</td>
          </tr>
          )
      }
    </tbody>
  </table>
</div>
    );
};

export default Alluser2;