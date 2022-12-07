import React from 'react';
import treatment from '../../../../assets/images/treatment.png'

const Exceptional = () => {
    return (
        <div className="hero mt-32">
  <div className="hero-content flex-col gap-24 lg:flex-row justify-between mx-auto">
    <img src={treatment } alt='' className="rounded-lg shadow-2xl  lg:w-[498px]" />
    <div>
      <h1 className="text-5xl font-bold w-1/2">Exceptional Dental Care, on Your Terms</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Exceptional;