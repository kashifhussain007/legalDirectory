import React from 'react';
// import * as images from '../../components/common/images';
import dropdown from '../../assets/icons/icons States.png';

const Header = () => {
  return (
    <div className='header_box inner_stroke'>
        <div className='header_content_box'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <span className='logo_design logo_left_part'>Logo</span><span className='logo_design logo_right_part'>Here</span>
                    </div>
                    <div className='menu_list align-self-center'>
                        <ul>
                            <li className='active_menu_clr'>Home</li>
                            <li>Services</li>
                            <li>Events</li>
                            <li>Jobs <img src={dropdown} alt="dropdown" className='dropdown_positioning'/></li>
                            <li>Blogs <img src={dropdown} alt="dropdown" className='dropdown_positioning'/></li>
                            <li>Why Us</li>
                        </ul>
                    </div>
                    <div className='auth_details align-self-center'>
                        <ul>
                            <li className='login_typo'>Login</li>
                            <li className='auth_seprator'>|</li>
                            <li className='signup_typo'>
                                <button className='signup_btn'>Sign Up</button>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Header;