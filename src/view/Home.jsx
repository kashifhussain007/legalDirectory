import React from 'react';
import manOnIndex from '../assets/index Images/manOnSearch.png';
import gps from '../assets/index Images/gps.png';
import user from '../assets/index Images/user.png';
import ServicesList from '../components/Home/ServicesList';
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
            <div className='ourMoto_main'>
                <h3 className='motoHeading'>We're dedicated to providing impartial information
                on attorneys and the legal process.</h3>
                <p className='moto_content'>
                We aim to provide you with clear, unbiased information about attorneys and the legal process. We're here to help you make informed decisions with confidence, offering trustworthy resources and insights every step of the way.
                </p>
            </div>
        </div>
  )
}

export default Home;