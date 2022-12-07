import React from 'react';
import InfoCards from './InfoCards';
import clock from '../../../../assets/icons/clock.svg'
import marker from '../../../../assets/icons/marker.svg'
import phone from '../../../../assets/icons/phone.svg'


const InfoCard = () => {

    const cardData = [
        {
            
            id:1,
            icon:clock,
            title:'Opening Hours',
            text:'Lorem Ipsum is simply dummy text of the pri',
            bgClass:'bg-primary'
        },
        {
           
            id:2,
            icon:marker,
            title:'Visit our location',
            text:'Brooklyn, NY 10036, United States',
            bgClass:'bg-primary'
        },
        {
           
            id:3,
            icon:phone,
            title:'Contact us now',
            text:'+000 123 456789',
            bgClass:'bg-primary'
        },
    ]

    return (
        <div className='grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-3 mt-32 mx-auto mx-5'>
            {
                cardData.map(card => <InfoCards
                    key={card.id}
                    card={card}
                    ></InfoCards>)
            }
        </div>
    );
};

export default InfoCard;