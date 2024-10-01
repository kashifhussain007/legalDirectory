import React, { Fragment } from 'react';
import AttorneyReviewImg from '../../assets/index Images/atternoyReview.png';
import reviewFrame from '../../assets/index Images/reviewFrame.png';
import ItenarayInfoImg  from '../../assets/index Images/ittenraryInfo .png';
import infoCheck from '../../assets/index Images/info_check.png';
import saveShield from '../../assets/index Images/info_shield.png';

const AtternyReviews = () => {
  return (
    <Fragment>
        <div className="atternyReview_main atternyReview_clone">
      <div className="row box_shadow">
        <div className="col-md-1 d-flex align-self-center"><img src={reviewFrame} alt="reviewFrame" /></div>
        <div className="col-md-7">
                <h3 className='attornyReviewHeading'>Unbiased Attorney Reviews</h3>
                <p>Get Honest, Unbiased Reviews of Attorneys to Help You Make Informed Decisions with Confidence.</p>
        </div>
        <div className="col-md-4 d-flex align-self-center"><img src={AttorneyReviewImg} alt="AttornyIMG" /></div>
      </div>
    </div>

    <div className="atternyInfo_main atternyInfo_clone">
      <div className="row box_shadow">
        <div className="col-md-1"><img src={saveShield} alt="reviewFrame" /></div>
        <div className="col-md-6">
               <div>
                    <h3 className='attornyReviewHeading'>Authentic Attorney Information</h3>
                    <p>Thoroughly Verified and Reconfirmed Information to Ensure Accurate and Reliable Details About Attorneys.</p>
               </div>
              <div className='attorny_info_points'>
                <div className='d-flex jsutify-content-start'>
                        <img src={infoCheck} alt="infoCheck" className='InfoCheck_settings' />
                        <h4 className='bullets_typography'>Precision and Reliability.</h4>
                </div>
                <div className='d-flex jsutify-content-start mt-1'>
                        <img src={infoCheck} alt="infoCheck"  className='InfoCheck_settings'/>
                        <h4 className='bullets_typography'>Informed Decisions.</h4>
                </div>
                <div className='d-flex jsutify-content-start mt-1'>
                        <img src={infoCheck} alt="infoCheck" className='InfoCheck_settings' />
                        <h4 className='bullets_typography'>Trust and Assurance</h4>
                </div>
              </div>
               
        </div>
        <div className="col-md-5 d-flex align-self-center"><img src={ItenarayInfoImg} alt="AttornyIMG" className='img-fluid' /></div>
      </div>
    </div>
    </Fragment>
  );
}

export default AtternyReviews;