import React from "react";
import askQuestion from "../../assets/index Images/askQuestion.png";
import freeConsultation from '../../assets/index Images/freeConsultaion.png';
import legalEvents from '../../assets/index Images/legalEvents.png';
import legalArticles from '../../assets/index Images/legalArticles.png';
import EastIcon from "@mui/icons-material/East";
const ServicesList = () => {
  return (
   <div className="services_main">
         <div className="row ">
      <div className=" col-lg-3 col-md-3 ">
        <div className="askQuestion_block">
          <img src={askQuestion} alt="askQuestion" />
          <div className="services_shadow_effect">
            <p className="services_heading">Ask a Question</p>
            <p className="services_content">
              Get expert legal advice tailored to your needs
            </p>
            <div className="read_more_btn d-flex justify-content-start align-self-center">
              Read More <EastIcon className="readMore_icon" />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-3">
        <div className="askQuestion_block">
          <img src={freeConsultation} alt="askQuestion" />
          <div className="services_shadow_effect">
            <p className="services_heading">Free Consultation</p>
            <p className="services_content">
              Get personalized legal advice at no cost
            </p>
            <div className="read_more_btn d-flex justify-content-start align-self-center">
              Read More <EastIcon className="readMore_icon" />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-3">
        <div className="askQuestion_block">
          <img src={legalEvents} alt="askQuestion" />
          <div className="services_shadow_effect">
            <p className="services_heading">Legal Events</p>
            <p className="services_content">
              Stay informed about upcoming legal seminars and conferences
            </p>
            <div className="read_more_btn d-flex justify-content-start align-self-center">
              Read More <EastIcon className="readMore_icon" />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-3">
        <div className="askQuestion_block">
          <img src={legalArticles} alt="askQuestion" />
          <div className="services_shadow_effect">
            <p className="services_heading">Legal Articles</p>
            <p className="services_content">
             Expert Insights and In-Depth Analysis on Legal Matters
            </p>
            <div className="read_more_btn d-flex justify-content-start align-self-center">
              Read More <EastIcon className="readMore_icon" />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default ServicesList;
