import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import toast from 'react-hot-toast';
import ConfermationModal from '../../Components/ConvermationModal/ConfermationModal';
import Spinner from '../../Components/Spinner/Spinner';

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  const closeModal = () =>{
    setDeletingDoctor(null);
  }

    const {data:doctors = [], refetch, isLoading} = useQuery({
        queryKey:['doctors'],
        queryFn:async ()=>{
            const res = await fetch('http://localhost:5000/doctors',{
              headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
              }
            })
            const data = await res.json()
            // console.log(data)
            return data;
           
        }
    })

    const handleDeletingDoctor = doctor =>{
      fetch(`http://localhost:5000/doctors/${doctor._id}`, {
        method:'DELETE',
        headers:{
          authorization:`bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then(res => res.json())
      .then(data =>{
        if(data.deletedCount>0){    
          toast.success(`Doctor ${doctor.name} deleted successfully`)
          refetch()
        }
        console.log(data)
      })

    }
    if(isLoading){
      return <div> <Spinner></Spinner></div>
    }
    return (
        <div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
  
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>PIC</th>
        <th>NAME</th>
        <th>SPECIALTY</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
      
     {
         doctors.map((doctor, i) =>  <tr
            key={doctor._id}
            doctor = {doctor}
            >
              <th>
                {i+1}
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={doctor.image}alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </div>
              </td>
              <td>
               {doctor.name}
              </td>
              <td>{doctor.specialty}</td>
              <th>
                <label onClick = {()=>setDeletingDoctor(doctor)} htmlFor="confirmatin-modal" className="btn btn-xs btn-error  ">Delete</label>
              </th>
            </tr>)
           
     }
    </tbody>
    
    
  </table>
            </div>

            <div>
            {
        deletingDoctor &&
        <ConfermationModal
          title = 'Are you sure you want to delete ?'
          message = {`If you ${deletingDoctor.name} delete.It can not be undone`}
          modalData={deletingDoctor}
          successButtonName ="Delete"
          successButtonAction ={handleDeletingDoctor}
          closeModal={closeModal}>

          </ConfermationModal>
            }
      </div>
      </div>
    );
};

export default ManageDoctors;