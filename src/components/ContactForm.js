import React, { useState } from 'react';
import styles from './ContactForm.module.css'; // Import CSS module

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    capacity: '',
    companyName: '',
    industryType: '',
    projectLocation: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Thank you for your message! We will be in touch shortly.');
    // Reset form - properly clear fields
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      capacity: '',
      companyName: '',
      industryType: '',
      projectLocation: '',
      message: '',
    });
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
          <label className={styles.label} htmlFor="capacity">How can we help you?*</label>
          <select id="capacity" name="capacity" value={formData.capacity} onChange={handleChange} required>
            <option value="" disabled>Select an option...</option>
            <option value="sales">Sales Inquiry</option>
            <option value="support">Technical Support</option>
            <option value="partnership">Partnership Opportunities</option>
            <option value="careers">Careers</option>
            <option value="general">General Information</option>
          </select>
        </div>

        {/* Company Name Field Group */}
        <div className={styles.fieldGroup}>
           <label className={styles.label} htmlFor="companyName">Company Name</label>
           <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} />
        </div>

        {/* Industry Type Field Group */}
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="industryType">Industry Type*</label>
          <select id="industryType" name="industryType" value={formData.industryType} onChange={handleChange} required>
            <option value="" disabled>Select Industry...</option>
            <option value="developer">Renewable and E-Fuel Developer/IPPO</option>
            <option value="oilgas">Oil & Gas</option>
            <option value="steel">Steel</option>
            <option value="mining">Mining and Non-Steel Metals</option>
            <option value="ammonia">Ammonia</option>
            <option value="chemical">Chemical (Non-Ammonia)</option>
            <option value="industrialgas">Industrial Gas</option>
            <option value="shipping">Shipping</option>
            <option value="utilities">Utilities</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Project Location Field Group */}
        <div className={styles.fieldGroup}>
           <label className={styles.label} htmlFor="projectLocation">Project Location*</label>
           <select id="projectLocation" name="projectLocation" value={formData.projectLocation} onChange={handleChange} required>
              <option value="" disabled>Select Location...</option>
              <option value="africa">Africa</option>
              <option value="asia">Asia</option>
              <option value="australia">Australia</option>
              <option value="europe">Europe</option>
              <option value="middleeast">Middle East</option>
              <option value="northamerica">North America</option>
              <option value="southamerica">South America</option>
           </select>
        </div>

        {/* Message Field Group */}
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="message">Message*</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
        </div>

        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </section>
  );
}

export default ContactForm; 