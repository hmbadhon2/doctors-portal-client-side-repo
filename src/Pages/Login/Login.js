import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';


const Login = () => {
    const {register, handleSubmit} =useForm()
    const [loginError, setLoginError] = useState('')
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail)
    const {signIn} = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    if(token){
      navigate(from, {replace:true})
    }

    const handleLogin = data =>{
         console.log(data)
         setLoginError('')
         signIn(data.email, data.password)
         .then(res => {
          const user = res.user;

          setLoginUserEmail(data.email)
          // navigate(from, {replace:true})
          console.log(user)
         })
         .catch(err => setLoginError(err))

    }
    return (
        <div className=' h-[800px] flex justify-center items-center  shadow-2xl lg:max-w-lg lg:mx-auto px-5 py-10 mx-5 rounded-lg mt-32'>
            <div>
            <h3 className='text-3xl font-bold text-center mb-6 '> Login</h3>
            <form onSubmit={handleSubmit(handleLogin)} className='grid grid-cols-1 gap-6  '> 


            <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="text"{...register("email")} placeholder="Type here" className="input input-bordered w-full" />
            </div>

    <div className="form-control w-full">
  <label className="label">
    <span className="label-text">Password</span>
  </label>
  <input type="text"{...register("password")} placeholder="Type here" className="input input-bordered w-full" />
  <label className="label">
    <span className="label-text-alt">Forgot Password ?</span>
  </label>
</div>
 <input type="submit" value="login" className='btn btn-accent w-full' />
          {
             loginError&&
             <p> {loginError.message}</p>
          }
            <p className='text-center'> New to Doctors Portal? <span className='text-secondary'> <Link to='/register'> Create new account</Link></span></p>
            <div className="divider">OR</div>
            <button   className='w-full btn btn-outline text-center'>
            CONTINUE WITH GOOGLE
            </button>
            </form>
            </div>
        </div>
    );
};

export default Login;