import React from 'react';
import locateLawyer from '../../assets/index Images/find_lawyers/find_lawyer.png';
import location1 from '../../assets/index Images/find_lawyers/lawyer_1.png';
import location2 from '../../assets/index Images/find_lawyers/lawyer_2.png';
import location3 from '../../assets/index Images/find_lawyers/lawyer_3.png';
import location4 from '../../assets/index Images/find_lawyers/lawyer_4.png';
import location5 from '../../assets/index Images/find_lawyers/lawyer_5.png';
import location6 from '../../assets/index Images/find_lawyers/lawyer_6.png';
import linkBtn from '../../assets/index Images/find_lawyers/Link_btn.png';


import searchByPractice from '../../assets/index Images/search_by_practice/search_by_practice.png';
import practice_1 from '../../assets/index Images/search_by_practice/practice_1.png';
import practice_2 from '../../assets/index Images/search_by_practice/practice_2.png';
import practice_3 from '../../assets/index Images/search_by_practice/practice_3.png';
import practice_4 from '../../assets/index Images/search_by_practice/practice_4.png';
import practice_5 from '../../assets/index Images/search_by_practice/practice_5.png';
import practice_6 from '../../assets/index Images/search_by_practice/practice_6.png';
import seeMore_btn from '../../assets/index Images/search_by_practice/seeMore_btn.png';



const FindingLawyers = () => {
  return (
    <div className='find_lawyers_main'>
        <h3 className='find_lawyer_heading'>Having Difficulty in Finding Lawyers?</h3>
       <div className='row'>
            <div className='col-md-8 align-self-center'>
                <h3 className='search_by_location'>Search By Location</h3>
                <div className='d-flex justify-content-start '>
                    <div className='me-3'>
                        <img src={location1} alt="" />
                         <p >islamabad</p>
                    </div>
                    <div className='me-3'>
                        <img src={location3} alt="" />
                         <p className='mb-0 ms-2'>Lahore</p>
                    </div>
                    <div className='mx-3'>
                        <img src={location3} alt="" />
                         <p>Karachi</p>
                    </div>
                    <div className='mx-3'>
                        <img src={location4} alt="" />
                         <p>Peshawar</p>
                    </div>
                    <div className='mx-3'>
                        <img src={location5} alt="" />
                         <p>Multan</p>
                    </div>
                    <div className='mx-3'>
                        <img src={location6} alt="" />
                         <p>Quetta</p>
                    </div>
                </div>
                <div className='link_btn my-3'>
                    <img src={linkBtn} alt="" className='img-fluid' />
                </div>
            </div>
            <div className='col-md-4'>
                <img src={locateLawyer} alt="" className='img-fluid' />
            </div>

       </div>

       <div className='row mt-5'>
            <div className='col-md-4'>
                <img src={searchByPractice} alt="" className='img-fluid' />
            </div>
            <div className='col-md-8 align-self-center'>
                <h3 className='search_by_location'>Search By Location</h3>
                <div className='d-flex justify-content-start '>
                    <div className='me-3'>
                        <img src={practice_1} alt="" />
                         <p>Bankruptcy</p>
                    </div>
                    <div className='me-3'>
                        <img src={practice_2} alt="" />
                         <p>Civil Rights</p>
                    </div>
                    <div className='mx-3'>
                        <img src={practice_3} alt="" />
                         <p>Defense</p>
                    </div>
                    <div className='mx-3'>
                        <img src={practice_4} alt="" />
                         <p>Family</p>
                    </div>
                    <div className='mx-3'>
                        <img src={practice_5} alt="" />
                         <p>Labor</p>
                    </div>
                    <div className='mx-3'>
                        <img src={practice_6} alt="" />
                         <p>Identity Theft</p>
                    </div>
                </div>
                <div className='link_btn my-3'>
                    <img src={seeMore_btn} alt="" className='img-fluid' />
                </div>
            </div>
       </div>
    </div>
  )
}

export default FindingLawyers;