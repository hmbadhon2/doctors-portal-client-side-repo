import { format } from 'date-fns/esm';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../context/AuthProvider';

const BookingAppointment = ({treatment, setTreatment, refetch, selectedDate}) => {
    const {name: treatmentName,slots, price} = treatment
    const date = format(selectedDate, 'PP')
    const {user} = useContext(AuthContext)


    const handleBooking = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value

        const booking = {
            treatment:treatmentName,
            appointmentDate:date, 
            patientName:name,
            email,
            phone,
            slot,
            price

        }
        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setTreatment(null)
            if(data.acknowledged){
                toast.success('Booking Confirmed')
                refetch();
            }
           else{
            toast.error(data.message)
        
           }
        })
        .catch(err =>console.error(err))
      
        
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{treatmentName}</h3>

   <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
   <input type="text" disabled value={date} className="input input-bordered w-full" />
   <select name='slot' className="select select-bordered w-full">
         {
            slots.map( (slot, i )=> <option 
            value={slot}
            key={i}
            >{slot}</option>)
         }
    </select>
   <input type="text" name='name' disabled defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered w-full" />
   <input type="email" disabled defaultValue={user?.email} name='email' placeholder="Your email" className="input input-bordered w-full" />
   <input type="text" name='phone' placeholder="Your phone number" className="input input-bordered w-full" />
   <input type="submit" value="Submit" className='w-full btn btn-accent' />

   </form>
  </div>
</div>
        </div>
    );
};

export default BookingAppointment;