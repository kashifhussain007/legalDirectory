import React from 'react'
import subsBtn from '../../assets/index Images/subs_btn.png';
import crimeImg from '../../assets/index Images/crime_img2.png';
const Subscription = () => {
  return (
    <div className="subscription_main">
      <div className="subscription_box subscrip_allignment">
        <div className="row">
          <div className="offset-md-2 col-md-6 ">
            <h3>Don’t miss a thing!</h3>
            <p>
              Subscribe Now for the Latest Updates, Insights, and Exclusive
              Content Delivered to Your Inbox{" "}
            </p>
          </div>
          <div className="col-md-4 align-self-center cursor-pointer">
            <img src={subsBtn} alt="subsBtn" />
          </div>
        </div>
      </div>
      <div className="row">
          <div className="col-md-6">
            <img src={crimeImg} alt="crimeImg" className="img-fluid crime_banner" />
          </div>
          <div className='col-md-6 text-center'>
                <h3 className='youtube_heading'>Explore our YouTube Channel</h3>
          </div>
      </div>
    </div>
  );
}

export default Subscription;