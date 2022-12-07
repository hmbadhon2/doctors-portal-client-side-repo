import React, { useState } from 'react';
import AppointmnetBanner from './AppointmentBanner/AppointmnetBanner';
import AvaibleAppointment from './AvaibleAppointment/AvaibleAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())


    return (
        <div>
            <AppointmnetBanner
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            ></AppointmnetBanner>
            <AvaibleAppointment
             selectedDate={selectedDate}
            ></AvaibleAppointment>
        </div>
    );
};

export default Appointment;