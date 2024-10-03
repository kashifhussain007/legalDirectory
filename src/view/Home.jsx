import React from 'react';
import manOnIndex from '../assets/index Images/manOnSearch.png';
import gps from '../assets/index Images/gps.png';
import user from '../assets/index Images/user.png';
import ServicesList from '../components/Home/ServicesList';
import OurMoto from '../components/Home/OurMoto';
import AtternyReviews from '../components/Home/AtternyReviews';
import WhyChooseUS from '../components/Home/WhyChooseUS';
import FindingLawyers from '../components/Home/FindingLawyers';
import Blogs from '../components/Home/Blogs';
import Subscription from '../components/Home/Subscription';
import Footer from '../components/footer/Footer';
const Home = () => {
  return (
        <div className='searchEngine_main bg-white'>
            <div className='row'>
                <div className='col-md-8'>
                    <div className='search_container'>
                           <p className='searchEngine_heading'>
                            Find the  <span>Right</span> <br/>
                            <span>Lawyer</span> for you
                           </p>
                    </div>
                    <div className='searchEngine_inputs d-flex justify-content-start'>
                       <div className='location_container'>
                            <input type="text"  placeholder='Location' className='locaton_input'/>
                            <img src={gps} alt="gps-img"  className='gps_settings'/>
                       </div>
                       <div className='location_container'>
                            <input type="text"  placeholder='Name/Person' className='locaton_input'/>
                            <img src={user} alt="gps-img"  className='user_settings'/>
                       </div>
                       <div className='search_btn_settings'>
                            <button className='btn btn-primary btn_typography'> Search</button>
                       </div>                       
                    </div>
                </div>
                <div className='col-md-4'>
                        <img src={manOnIndex} alt="manOnSearchPage" />
                </div>
            </div>

            <div>
                <ServicesList/>
            </div>
            {/* --------OurMoto Component ------------- */}
            <div>
                <OurMoto/>
            </div>
            <div>
                <AtternyReviews/>
            </div>
            <div>
                <WhyChooseUS/>
            </div>
            <div>
                <FindingLawyers/>
            </div>
            <div>
                <Blogs/>
            </div>
            <div>
                <Subscription/>
            </div>
            <div className='set_foooter_m'>
                <Footer/>
            </div>

           
         
        </div>
  )
}

export default Home;