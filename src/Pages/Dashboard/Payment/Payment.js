import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log('for stripe',stripePromise)

const Payment = () => {
    


    const booking = useLoaderData();
    console.log('bookings', booking)

    return (
        <div>
            <h3 className="text-3xl"> Payment for {booking.treatment}</h3>
            <p className='text-xl'> Please pay <strong> ${booking.price}</strong> for your appointment on ${booking.appointmentDate} at  {booking.slot}</p>

            <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm
                booking = {booking}
                />
            </Elements>
            </div>
            
        </div>
    );
};

export default Payment;