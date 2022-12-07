import React from 'react';

const AppointmentOption = ({option, setTreatment}) => {

    const {name, slots,price} = option;

    return (
        <div className="card  shadow-xl">
  <div className="card-body">
    <h2 className="text-center text-2xl  text-secondary font-bold">{name}</h2>
    <p className='text-center'>{slots.length>0? slots[0]:'Try Another Day'}</p>
    <p className='text-center'>{slots.length} {slots.length>1?'spaces':'space'} Available </p>
    <p className='text-center'> {price}</p>
    <div className="card-actions justify-center">
     <label htmlFor="booking-modal"  onClick={() =>setTreatment(option)} className="btn btn-primary text-white">BOOK APPOINTMENT</label> 
      
    </div>
  </div>
</div>
    );
};

export default AppointmentOption;