import React from 'react';
import cavity from '../../../../assets/images/cavity.png'
import fluoride from '../../../../assets/images/fluoride.png'
import whitening from '../../../../assets/images/whitening.png'
import ServicesCard from './ServicesCard';

const Services = () => {

    const serviceData = [
        {
          id:1,
          img:cavity,
          title:'Fluoride Treatment',
          description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'  
        },
        {
          id:2,
          img:fluoride,
          title:'Fluoride Treatment',
          description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'  
        },
        {
          id:3,
          img:whitening,
          title:'Fluoride Treatment',
          description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'  
        }
    ]

    return (
        <div>
            <div className='text-center mt-32'>
                <h3 className='text-xl font-bold text-primary'>OUR SERVICES</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 mx-5'>
                {
                    serviceData.map(service =><ServicesCard
                    key={service.id}
                    service = {service}
                    ></ServicesCard>)
                }
            </div>
        
        </div>
    );
};

export default Services;