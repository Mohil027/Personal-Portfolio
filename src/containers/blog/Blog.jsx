import React from 'react';
import './blog.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


const Blog = () => {
  return (
    <div className="container" id='contact'>
      <main className="row">
        {/* Left Section (Column) Starts */}
        <section className="col left">
          {/* Title Starts */}
          <div className="contactTitle">
            <h2>Get In Touch</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
          </div>
          {/* Title Ends */}

          {/* Contact Info Starts */}
          <div className="contactInfo">
            <div className="iconGroup">
              <div className="icon">
              <FaPhoneAlt className='iconinner'/>
              </div>
              <div className="details">
                <span>Phone</span>
                <span>+1 480 322-5093</span>
              </div>
            </div>
            {/* Repeat similar structure for other contact info */}
            <div className="iconGroup">
              <div className="icon">
                <FaEnvelope />
              </div>
              <div className="details">
                <span>Email</span>
                <span>mkhimani@asu.edu</span>
              </div>
            </div>
            <div className="iconGroup">
              <div className="icon">
                <FaMapMarkerAlt />
              </div>
              <div className="details">
                <span>Location</span>
                <span>Tempe, Arizona</span>
              </div>
            </div>
          </div>
          {/* Contact Info Ends */}

          {/* Social Media Starts */}
          <div className="social-icons">
            <a href="https://github.com" className="icon-link"><FaGithub className="icon" /></a>
            <a href="https://linkedin.com" className="icon-link"><FaLinkedin className="icon" /></a>
            <a href="https://twitter.com" className="icon-link"><FaTwitter className="icon" /></a>
          </div>
          {/* Social Media Ends */}
        </section>
        {/* Left Section (Column) Ends */}

        {/* Right Section (Column) Starts */}
        <section className="col right">
          {/* Form Starts */}
          <form className="messageForm">
            <div className="inputGroup halfWidth">
              <input type="text" name="" required />
              <label>Your Name</label>
            </div>
            <div className="inputGroup halfWidth">
              <input type="text" email="" required />
              <label>Email</label>
            </div>
            <div className="inputGroup fullWidth">
              <input type="text" subject="" required />
              <label>Subject</label>
            </div>
            <div className="inputGroup fullWidth">
              <input type="text" Say Something="" required className='saysomething'/>
              <label>Say Something</label>
            </div>
            {/* Repeat similar structure for other form inputs */}
            <div className="inputGroup fullWidth">
              <button>Send Message</button>
            </div>
          </form>
          {/* Form Ends */}
        </section>
        {/* Right Section (Column) Ends */}
      </main>
    </div>
  );
}

export default Blog