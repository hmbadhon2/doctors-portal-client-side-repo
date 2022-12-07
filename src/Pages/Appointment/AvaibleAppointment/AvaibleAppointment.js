
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, {useState } from 'react';
import Loading from '../../Shared/Loading/Loading';

import AppointmentOption from './AppointmentOption';
import BookingAppointment from './BookingAppointment/BookingAppointment';

const AvaibleAppointment = ({selectedDate}) => {
    const [treatment, setTreatment] = useState(null)
    const date = format(selectedDate, 'PP')

    //  use react query
    const {data:appointmentOptions=[], isLoading,refetch} =useQuery({
        queryKey:['appointmentOptions'],
        queryFn:()=> fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
        .then(res => res.json())
    })

 

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <section className='mt-32'>
            <p className='text-center text-secondary text-2xl font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>

            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-6'>
                {
                  appointmentOptions.map(option => <AppointmentOption
                  key={option._id}
                  option = {option}
                  setTreatment = {setTreatment}
                  ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingAppointment
                treatment = {treatment}
                selectedDate = {selectedDate}
                setTreatment ={setTreatment}
                refetch = {refetch}
               
                >
                </BookingAppointment>
            }
        </section>
    );
};

export default AvaibleAppointment;