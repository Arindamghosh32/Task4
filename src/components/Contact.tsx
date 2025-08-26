import { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';


type FormDataType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: FormDataType) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      
      emailjs.init("dWcEmXw0ttWURlY7t");
      
      
      await emailjs.send(
        "service_ag9n4aa",
        "template_yzoyu8l",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        }
      );

      setSubmitMessage({
        text: "Message sent successfully!",
        isError: false
      });
      
     
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitMessage({
        text: "Failed to send message. Please try again.",
        isError: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact Me</h2>
          <div className="underline"></div>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              
              <div>
                <div className="horibol">
                  <i className="fas fa-envelope"></i>
                  <h3>Email</h3>
                </div>
                
                <p>ghosharindam2822@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              
              <div>
                <div className="horibol">
                 <i className="fas fa-phone"></i>
                 <h3>Phone</h3>
                </div>
                <p>+91 8822132492</p>
              </div>
            </div>
            <div className="contact-item">
             
              <div>
                <div className="horibol">
                  <i className="fas fa-map-marker-alt"></i>
                  <h3>Location</h3>
                </div>
                
                <p>India</p>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/Arindamghosh32" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/arindam-ghosh-bb4856272/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="contact-form">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className={`form-group ${formData.name ? 'focused' : ''}`}>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
                <label htmlFor="name">Your Name</label>
              </div>
              <div className={`form-group ${formData.email ? 'focused' : ''}`}>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
                <label htmlFor="email">Your Email</label>
              </div>
              <div className={`form-group ${formData.subject ? 'focused' : ''}`}>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
                <label htmlFor="subject">Subject</label>
              </div>
              <div className={`form-group ${formData.message ? 'focused' : ''}`}>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <label htmlFor="message">Your Message</label>
              </div>
              <button 
                type="submit" 
                className="btn primary-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitMessage && (
                <div className={`submit-message ${submitMessage.isError ? 'error' : 'success'}`}>
                  {submitMessage.text}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;