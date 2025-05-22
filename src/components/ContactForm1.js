import React, { useState } from 'react';
import styles from './ContactForm.module.css'; 

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    capacity: '',
    companyName: '',
    message: '',
  });

  const [wordCount, setWordCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'message') {
      const words = value.trim().split(/\s+/).filter(word => word.length > 0);
      const currentWordCount = value.trim() === '' ? 0 : words.length;
      
      if (currentWordCount <= 250) {
        setWordCount(currentWordCount);
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      }
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (wordCount > 250) {
      alert('Message cannot exceed 250 words');
      return;
    }
    console.log('Form Data Submitted:', formData);
    alert('Thank you for your message! We will be in touch shortly.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      capacity: '',
      companyName: '',
      message: '',
    });
    setWordCount(0);
  };

  return (
    <section className={styles.section}>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Name Field Group */}
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="firstName">Name*</label>
          <div className={styles.nameGroup}>
            <input type="text" id="firstName" name="firstName" placeholder="First" value={formData.firstName} onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Last" value={formData.lastName} onChange={handleChange} required />
          </div>
        </div>

        {/* Email Field Group */}
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="email">Email*</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        {/* Capacity/Interest Field Group - Keeping name 'capacity' for consistency for now */}
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="capacity">Reason for Inquiry*</label>
          <select id="capacity" name="capacity" value={formData.capacity} onChange={handleChange} required>
            <option value="" disabled>Select an option...</option>
            <option value="sales">Sales</option>
            <option value="partnership">Partnership Opportunities</option>
            <option value="investment">Investment</option>
            <option value="support">Technical Support</option>
            <option value="general">General Information</option>
            <option value="careers">Careers</option>
          </select>
        </div>

        {/* Company Name Field Group */}
        <div className={styles.fieldGroup}>
           <label className={styles.label} htmlFor="companyName">Company Name</label>
           <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} />
        </div>


        {/* Message Field Group */}
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="message">Message*</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            maxLength={2000}
          />
          <div className={styles.wordCount}>
            {wordCount}/250 words
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </section>
  );
}

export default ContactForm; 