import React from 'react';
import { useTitle } from '../../../hooks/useTitle';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Exceptional from './Exceptional/Exceptional';
import InfoCard from './InfoCard/InfoCard';
import Testimonial from './Testimonial/Testimonial';


const Home = () => {
    
    useTitle('Home')

    return (
        <div>
          <Banner></Banner>
          <InfoCard></InfoCard>
          <Services></Services>
          <Exceptional></Exceptional> 
          <MakeAppointment></MakeAppointment>
          <Testimonial></Testimonial>
        </div>
    );
};

export default Home;