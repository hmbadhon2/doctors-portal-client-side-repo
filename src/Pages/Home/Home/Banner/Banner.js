import React from 'react';
import chair from '../../../../assets/images/chair.png';

const Banner = () => {
    return (
    <div className="hero mt-32 mx-5">
  <div className="hero-content mx-10 mx-auto  flex-col lg:flex-row-reverse">
    <div className='lg:w-1/2'>
    <img src={chair} alt=''  />
    </div>
    
    <div className='lg:w-1/2'>
      <h1 className="text-5xl font-bold ">Your New Smile Starts Here</h1>
      <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
      <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;