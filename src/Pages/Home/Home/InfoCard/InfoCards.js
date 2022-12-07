import React from 'react';

const InfoCards = ({card}) => {

    const{title, text,icon,bgClass} = card
    return (
        <div className={`py-12 card card-side shadow-xl ${bgClass} `}>
    <figure className='w-86 ml-6'><img src={icon} alt=""/></figure>
    <div className="card-body">
     <h2 className="card-title font-bold">{title}</h2>
      <p>{text}</p>
    
     </div>
</div>
    );
};

export default InfoCards;