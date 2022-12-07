import React from 'react';
import bg from '../../../../assets/images/appointment.png'
import doctor from '../../../../assets/images/doctor.png'


const MakeAppointment = () => {
    return (
        <div className='hero mt-32 w-full' style={{background:`url(${bg})`}}>
        <div className="hero-content flex-col lg:flex-row text-base-100">
    <div className='w-1/2 hidden lg:block md:block -mt-32 mb-0 pb-0'>
    <img src={doctor} alt='' className="rounded-lg" />
    </div>
    
    <div className='w-1/2 '>
      <h1 className="text-5xl font-bold">Make an appointment Today</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default MakeAppointment;