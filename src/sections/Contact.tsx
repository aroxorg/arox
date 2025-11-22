import  { useState, useEffect } from 'react';
import "./Contact.css";
// CORRECTED: Import types explicitly using 'import type'
import type { ChangeEvent, FormEvent, FC } from 'react'; 

// 1. Define the type for the form data
interface FormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

// 2. Define the type for the API response
interface ApiResponse {
  message: string;
}
 
const ContactPage: FC = () => {

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState({
    message: '',
    isError: false,
  });

  // 3. Type-safe change handler
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 4. Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus({ message: 'Sending...', isError: false });

    // This endpoint must match your serverless function file path (api/contact.cjs)
    const API_ENDPOINT = '/api/contact';


    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      let data: ApiResponse;
      try {
        data = await response.json();
      } catch (jsonError) {
        // Handle case where server returns non-JSON (like a default 404 page)
        console.error("Failed to parse JSON response:", jsonError);
        setSubmitStatus({ 
          message: 'Server did not return a valid response. Check your API route.', 
          isError: true 
        });
        return;
      }

      if (response.ok) {
        // SUCCESS
        setSubmitStatus({ 
          message: data.message, 
          isError: false 
        });
        // Clear form fields
        setFormData({ fullName: '', email: '', subject: '', message: '' }); 
      } else {
        // FAILURE (4xx or 5xx status code)
        setSubmitStatus({ 
          message: data.message || 'An unknown error occurred on the server.', 
          isError: true 
        });
      }
    } catch (error) {
      // NETWORK ERROR
      console.error("Network Fetch Error:", error);
      setSubmitStatus({ 
        message: 'A network error occurred. Please check your connection.', 
        isError: true 
      });
    }
  };

  useEffect(() => {
  if (!submitStatus.message) return;

  // Add class automatically handled by JSX above
  const timer = setTimeout(() => {
    setSubmitStatus({ message: '', isError: false });
  }, 4000);

  return () => clearTimeout(timer);
}, [submitStatus.message]);

  return (
    <div className="contact-container" id="contact">
      <div className="contact-content">
        <div className="contact-left">
          <h1 className="main-heading">
            We are always ready to help you and answer your questions
          </h1>
          <p className="description">
            If you have a question about our products or services, don't
            hesitate to contact us. Our team is available to answer your
            questions and provide support.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <h3>Call Center</h3>
              {/* <p>855 100 4444</p> */}
              <p>+1 2265771451</p>
            </div>

            <div className="info-item">
              <h3>Our Location</h3>
              <p>785 Wonderland Rd S, </p>
              <p>London, ON N6K 2Y5</p>
            </div>

            <div className="info-item">
              <h3>Email</h3>
              <p>Aroxbeauty.salon@gmail.com</p>
            </div>

            <div className="info-item">
              <h3>Social network</h3>
              <div className="social-icons">
                <span className="social-icon">f</span>
                <span className="social-icon">X</span>
                <a
                  className="social-icon"
                  href="https://www.linkedin.com/posts/azm-technologies_urgent-techabrcloud-freshers-activity-7360998398281379840-JfFU?utm_source=share&utm_medium=member_ios&rcm=ACoAABUBh_0BYonzRYKG44iq961DR0D9GrMRdxc"
                >
                  in
                </a>
                <a
                  href="mailTo:Aroxbeauty.salon@gmail.com"
                  className="social-icon"
                >
                  @
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <div className="form-container">
            <h2>Get in Touch</h2>
            <p className="form-description">
              Define your goals and identify areas where we can help you
              succeed.
            </p>

<form className="contact-form" onSubmit={handleSubmit}>
      {/* Ensure all inputs have a 'name' attribute matching the state keys (fullName, email, etc.) */}
      <input
        type="text"
        placeholder="Full Name"
        className="form-input"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        required
      />
      <input 
        type="email" 
        placeholder="Email" 
        className="form-input" 
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input 
        type="text" 
        placeholder="Subject" 
        className="form-input" 
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        required
      />
      <textarea
        placeholder="Message"
        className="form-textarea"
        rows={4}
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      
      <button
        type="submit"
        className="primary-button"
        style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}
        disabled={submitStatus.message === 'Sending...'}
      >
        {submitStatus.message === 'Sending...' ? 'Sending...' : 'Send a Message'}
      </button>

      {/* Submission Status Message */}

{submitStatus.message && submitStatus.message !== 'Sending...' &&
<div
  id="alertDiv"
  className={`alertDiv ${submitStatus.message ? "show" : ""}`}
  style={{
    background: submitStatus.isError ? "rgba(94, 0, 0, 0.49)" : "rgba(0, 2, 27, 0.47)",
    border: submitStatus.isError ? "1px solid rgba(255,0,0,0.25)" : "1px solid rgba(0,128,0,0.18)", 
    padding: "0.5rem 0.75rem",
    borderRadius: "4px",
  }}
>
  {submitStatus.message}
</div>
}
    </form>
          </div>
        </div>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2920.434829488982!2d-81.2934824!3d42.94804029999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9ffd8425d455f9%3A0x95d687c9bbcf305!2sAROX%20Beauty!5e0!3m2!1sen!2sng!4v1755448777159!5m2!1sen!2sng"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}


export default ContactPage;