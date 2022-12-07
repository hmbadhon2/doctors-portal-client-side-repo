import React from 'react';

const TestimonialCard = ({Testimonial}) => {

    const {description, name, location, img, } =Testimonial;

    return (
        <div className="card shadow-xl">
  <div className="card-body">
    
    <p>{description}</p>
    <div className='flex items-center mt-9'>
        <img src={img} alt="" />
        <div className='ml-5'>
            <h4>{name} </h4>
            <p> {location}</p>
        </div>
    </div>
  </div>
</div>
    );
};

export default TestimonialCard;