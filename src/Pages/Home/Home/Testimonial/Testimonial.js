import React from 'react';
import quete from '../../../../assets/icons/quote.svg'
import people1 from '../../../../assets/images/people1.png'
import people2 from '../../../../assets/images/people2.png'
import people3 from '../../../../assets/images/people3.png'
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {

    const TestimonialData = [
        {
            id:1,
            description:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:people1,
            name:'Winson Herry',
            location:'California'
        },
        {
            id:2,
            description:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:people2,
            name:'Winson Herry',
            location:'California'
        },
        {
            id:3,
            description:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:people3,
            name:'Winson Herry',
            location:'California'
        },

    ]

    return (
        <div className='mx-5 mt-32'>
            <div className='flex justify-between'>
                <div>
                <h3 className='text-xl font-bold text-primary'>Testimonial</h3>
                <h2 className='text-3xl'>What Our Patients Says</h2> 
                </div>
                <div className='w-48' >
                    <img src={quete} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    TestimonialData.map(Testimonial =><TestimonialCard
                    key={Testimonial.id}
                    Testimonial ={Testimonial}
                    ></TestimonialCard>)
                }
            </div>
            
        </div>
    );
};

export default Testimonial;