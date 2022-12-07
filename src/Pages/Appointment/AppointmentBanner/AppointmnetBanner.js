import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';


const AppointmnetBanner = ({selectedDate, setSelectedDate}) => {

 

    return (
        <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="rounded-lg max-w-sm shadow-2xl" alt='Dentist chair' />
          <div>
            <DayPicker
            mode='single'
            selected={selectedDate}
            onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    );
};

export default AppointmnetBanner;