import React from 'react'
import "./contact.css"
import CallIcon from "../../util/images/call.png"
import HomeIcon from "../../util/images/home.png"
import MailIcon from "../../util/images/mail.png"


const ContactInfoItem = ({ imageSrc, title, children }) => (
  <div className="contact-info-item">
    <div className="contact-info-icon">
      {/* <i className={icon}></i> */}
      <img className='jewwllery-icon-contact' src={imageSrc} alt="Jewellery Web App" />
    </div>
    <div className="contact-info-content">
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  </div>
);
function contact() {
  return (
    <div className="contact-container">
    <div className="section-header">
      <div className="container">
        <h2>Contact Us</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>
    
    <div className="container">
      <div className="row">
        <div className="contact-info">
          <ContactInfoItem imageSrc={HomeIcon} title="Address">
            4671 Sugar Camp Road,<br/> Owatonna, Minnesota, <br/>55060
          </ContactInfoItem>
          <ContactInfoItem imageSrc={CallIcon} title="Phone">
            571-457-2321
          </ContactInfoItem>
          <ContactInfoItem imageSrc={MailIcon} title="Email">
            ntamerrwael@mfano.ga
          </ContactInfoItem>
        </div>
        
        <div className="contact-form">
          <form action="" id="contact-form">
            <h2>Send Message</h2>
            <div className="input-box">
              <input type="text" required name="fullName" />
              <span>Full Name</span>
            </div>
            
            <div className="input-box">
              <input type="email" required name="email" />
              <span>Email</span>
            </div>
            
            <div className="input-box">
              <textarea required name="message"></textarea>
              <span>Type your Message...</span>
            </div>
            
            <div className="input-box">
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  )
}

export default contact