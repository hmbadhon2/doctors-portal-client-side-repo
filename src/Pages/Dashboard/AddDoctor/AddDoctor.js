import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../../Components/Button/PrimaryButton';

const AddDoctor = () => {

    const navigate = useNavigate()
    const {data:specialties} = useQuery({
      queryKey:['specialty'],
      queryFn:async ()=>{
       const res = await fetch('http://localhost:5000/appointmentSpecialty')
       const data = await res.json()
       return data;

      }
    })

    const {handleSubmit, register, formState:{ errors}} = useForm()


    const handleAddDoctor = data =>{
      const image = data.image[0]
      console.log(data.name, data.email, data.specialty,image)

      const formData = new FormData();
      formData.append('image', image);

      const url = 'https://api.imgbb.com/1/upload?key=a6a33c149a4456cc771b25ad7ff970f7'
      fetch(url, {
        method:'POST',
        body:formData
      })
      .then(res => res.json())
      .then(imgData => {
        console.log(imgData.data.url)
        if(imgData.success){
          const doctor = {
            name:data.name,
            email:data.email,
            specialty:data.specialty,
            image:imgData.data.url 
          }

          fetch('http://localhost:5000/doctors',{
            method:'POST',
            headers:{
              'content-type':'application/json',
              authorization:`bearer ${localStorage.getItem('accessToken')}`
            },

            body:JSON.stringify(doctor)

          })
          .then(res => res.json())
          .then(res =>{
            console.log(res);
            toast.success(`${data.name} is added successfully`)
            navigate('/dashboard/managedoctor')
          })

        }
      })

    }



    return (
        <div>
            <h2 className="text-4xl"> Add A Doctor</h2>
            <div className='flex justify-center items-center pt-8'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Signup</h1>
        </div>
        <form
          onSubmit={handleSubmit(handleAddDoctor)}
          noValidate=''
          action=''
          className='space-y-12 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='name' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                {...register("name",{
                  required:"name is required"
                })}
                type='text'
                id='name'
              
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-secondary bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
                { errors.name&& <p className='text-red-500'>{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                 {...register("email",{
                  required:"email is required"
                 })}
                type='email'
                id='email'
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-secondary bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>
            <div>
              <div className='flex justify-between mb-2'>
                <label htmlFor='password' className='text-sm'>
                  Specialty
                </label>
              </div>
            
              <select 
              {...register("specialty")}
              className="select w-full px-3 py-2  rounded-md border-gray-300 bg-gray-200 focus:outline-secondary text-gray-900 ">
  
              {
                specialties &&
                specialties.map(specialty => <option
                key={specialty._id}
                specialty = {specialty}
                >{specialty.name}</option>)
              }
                  
              
            </select>
            </div>
          </div>
          <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                {...register("image",{
                  required:'Photo is required'
                })}
                type='file'
                id='image'
                accept='image/*'
                
              />
            </div>
          <div className='space-y-2'>
            <div>
              <PrimaryButton classes ='w-full font-semibold px-8 py-3 rounded-md'> Add Doctor</PrimaryButton>
            </div>
          </div>
        </form>
      
      
      </div>
    </div>
        </div>
    );
};

export default AddDoctor;