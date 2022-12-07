import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';

const Register = () => {

    const {register, handleSubmit, formState:{errors}} = useForm()
    const {createUser,updateUser} = useContext(AuthContext)
    const [signError, setSignError] = useState('')
    const [createdUserEmail, setCreatedUserEmail]= useState('')
    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate()

   if(token){
    navigate('/')
   }
    
    const handleReg = data =>{
        setSignError('')
        createUser(data.email, data.password)
        .then(res =>{
            const user = res.user
            toast('User created successfully')
            const userInfo = {
                displayName:data.name,
                 }
                 updateUser(userInfo)
                 .then(()=>{
                    saveUser(data.name, data.email)
                 })
                 .catch(err =>console.error(err))
                console.log(user)
        })
        .catch(err => {
            console.log(err)
            setSignError(err)
        } )
    };

    const saveUser = (name, email) => {
        const user = {name, email}
        fetch('http://localhost:5000/users', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCreatedUserEmail(email)
           })
        };
    return (
        <div className=' h-[800px] flex justify-center items-center '>
            <div className='w-96 py-7 px-5 rounded-lg  shadow-2xl '>
            <h3 className='text-3xl font-bold'> Sign Up</h3>
            
            <form onSubmit={handleSubmit(handleReg)}>
                
           <div className="form-control w-full">
             <label className="label">
                <span className="label-text">Name</span>
             </label>
            <input {...register("name")} type="text" placeholder="Your Name" className="input input-bordered w-full " />
            {
                    errors.name && 
                    <p className='text-red-600'>{errors.name?.message} </p>
                }
            </div>

           <div className="form-control w-full">
             <label className="label">
                <span className="label-text">Email</span>
             </label>
            <input {...register("email")} type="email" placeholder="Your Email" className="input input-bordered w-full " />
               
            </div>

           <div className="form-control w-full">
             <label className="label">
                <span className="label-text">Password</span>
             </label>
            <input {...register("password",)} type="password" placeholder="Your Email" className="input input-bordered w-full "/>
          
            </div>
                <button className='btn w-full btn-accent mt-6'> Sign Up </button>

                {
                    signError &&
                    <p className='text-red-600'> {signError.message} </p>
                    
                }

           </form>

           <p className='text-center mt-3'> Already have an account ? <Link to= '/login'> <span className='text-secondary'>Please Login</span> </Link></p>
           <div className="divider">OR</div>
            <button className='btn btn-outline text-center uppercase w-full'>
                Continue with Google
            </button>
            </div>
           
        </div>
    );
};

export default Register;