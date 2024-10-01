import React from 'react';
import whyUsImg from '../../assets/index Images/Whyus_Background.png';
import dotPattern from '../../assets/index Images/Pattern.png';

const WhyChooseUS = () => {
  return (
    <div className="WhyUs_main">
      <div className="row">
        <div className="col-md-6">
            <img src={whyUsImg} alt="whyUsImage" className='img-fluid' />
        </div>
        <div className="col-md-6  content_block ">
            <h3 className='whyUs_heading'>
               Why Choose Us?
            </h3>
           <div className='whyUs_content_container'>
                  <div className='whyUs_content'>
                        <div className = 'd-flex justify-content-start px-2'>
                            <img src={dotPattern} alt="dotPattern"  className='dotPattern_settings'/> 
                            <h3 className='chooseUs_heading align-self-center '>Search for Lawyers</h3>
                        </div>
                        <p className='whyUs_child_data'>Thoroughly Verified and Reconfirmed Information to Ensure Accurate and Reliable Details About Attorneys.</p>
                    </div>
                    <div className='whyUs_content'>
                        <div className = 'd-flex justify-content-start px-2'>
                            <img src={dotPattern} alt="dotPattern"  className='dotPattern_settings'/> 
                            <h3 className='chooseUs_heading align-self-center '>Review Profiles</h3>
                        </div>
                        <p className='whyUs_child_data'>Thoroughly Verified and Reconfirmed Information to Ensure Accurate and Reliable Details About Attorneys.</p>
                    </div>
                    <div className='whyUs_content'>
                        <div className = 'd-flex justify-content-start px-2'>
                            <img src={dotPattern} alt="dotPattern"  className='dotPattern_settings'/> 
                            <h3 className='chooseUs_heading align-self-center '>Contact Directly</h3>
                        </div>
                        <p className='whyUs_child_data'>Thoroughly Verified and Reconfirmed Information to Ensure Accurate and Reliable Details About Attorneys.</p>
                    </div>
           </div>
            
        </div>
       
      </div>
    </div>
  );
}

export default WhyChooseUS;