import React from 'react';
import whyUsImg from '../../assets/index Images/Whyus_Background.png';

const WhyChooseUS = () => {
  return (
    <div className="WhyUs_main">
      <div className="row">
        <div className="col-md-6">
            <img src={whyUsImg} alt="whyUsImage" />
        </div>
        <div className="col-md-6 whyUs_content">
            <h3 className='whyUs_heading'>
               Why Choose Us?
            </h3>
        </div>
       
      </div>
    </div>
  );
}

export default WhyChooseUS;