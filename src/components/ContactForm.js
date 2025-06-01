import React, { useState, useEffect } from 'react';
import styles from './ContactForm.module.css';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailConfig';

function ContactForm({ isCareers = false }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    reason: '',
    affiliation: '',
    message: '',
  });

  const [wordCount, setWordCount] = useState(0);
  const [attachments, setAttachments] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const MAX_WORDS = 250;

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === 'resume') {
      setAttachments(files.length);
    } else if (name === 'message') {
      const words = value.trim().split(/\s+/).filter(word => word.length > 0);
      const currentWordCount = words.length;
      
      if (currentWordCount <= MAX_WORDS) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (wordCount > MAX_WORDS) {
      setSubmitStatus({
        type: 'error',
        message: 'Message exceeds the 250-word limit. Please shorten your message.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const templateId = isCareers ? EMAILJS_CONFIG.TEMPLATES.CAREERS : EMAILJS_CONFIG.TEMPLATES.CONTACT;
      
      console.log('Sending email with config:', {
        serviceId: EMAILJS_CONFIG.SERVICE_ID,
        templateId: templateId,
        publicKey: EMAILJS_CONFIG.PUBLIC_KEY
      });

      const response = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        templateId,
        e.target,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('EmailJS Response:', response);

      if (response.status === 200) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! We will be in touch shortly.'
        });
        
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
          reason: '',
          affiliation: '',
      message: '',
    });
    setWordCount(0);
    setAttachments(0);
        e.target.reset();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.section}>
      <form onSubmit={handleSubmit} className={styles.form} encType="multipart/form-data">
        {/* Name Field Group */}
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="firstName">Name*</label>
          <div className={styles.nameGroup}>
            <input 
              type="text" 
              id="firstName" 
              name="firstName" 
              placeholder="First Name" 
              value={formData.firstName} 
              onChange={handleChange} 
              required 
              style={{ color: '#000000' }}
            />
            <input 
              type="text" 
              name="lastName" 
              placeholder="Last Name" 
              value={formData.lastName} 
              onChange={handleChange} 
              required 
              style={{ color: '#000000' }}
            />
          </div>
        </div>

        {/* Email Field Group */}
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="email">Email*</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter your email address" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            style={{ color: '#000000' }}
          />
        </div>

        {/* Reason for Inquiry Field Group - Only show for Contact form */}
        {!isCareers && (
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="reason">Reason for Inquiry*</label>
            <select 
              id="reason" 
              name="reason" 
              value={formData.reason} 
              onChange={handleChange} 
              required 
              style={{ color: '#000000' }}
            >
              <option value="">Select a reason</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Product Information">Product Information</option>
              <option value="Partnership Opportunity">Partnership Opportunity</option>
              <option value="Media Inquiry">Media Inquiry</option>
              <option value="Other">Other</option>
            </select>
          </div>
        )}

        {/* Affiliation Field Group - Only show for Contact form */}
        {!isCareers && (
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="affiliation">Affiliation*</label>
            <select 
              id="affiliation" 
              name="affiliation" 
              value={formData.affiliation} 
              onChange={handleChange} 
              required 
              style={{ color: '#000000' }}
            >
              <option value="">Select your affiliation</option>
              <option value="Individual">Individual</option>
              <option value="Academic">Academic</option>
              <option value="Industry">Industry</option>
              <option value="Government">Government</option>
              <option value="Media">Media</option>
              <option value="Other">Other</option>
            </select>
          </div>
        )}

        {/* Message Field Group */}
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="message">Message*</label>
          <textarea 
            id="message" 
            name="message" 
            placeholder="Type your message here (max 250 words)"
            value={formData.message} 
            onChange={handleChange} 
            required 
            style={{ 
              color: '#000000',
              fontFamily: 'inherit',
              fontSize: 'inherit'
            }}
          />
          <div className={styles.wordCount}>
            {wordCount}/{MAX_WORDS} words
          </div>
        </div>

        {/* Resume Upload Field Group - Only show for Careers form */}
        {isCareers && (
        <div className={`${styles.fieldGroup} ${styles.resumeGroup}`}>
          <label className={styles.label} htmlFor="resume">Attach Resume</label>
          <input 
            type="file" 
            id="resume" 
            name="resume" 
            accept=".pdf,.doc,.docx" 
            onChange={handleChange}
            style={{ color: '#000000' }}
          />
          <div className={styles.attachmentCount}>
            Attachments ({attachments})
          </div>
        </div>
        )}

        {submitStatus.message && (
          <div className={`${styles.statusMessage} ${styles[submitStatus.type]}`}>
            {submitStatus.message}
          </div>
        )}

        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </section>
  );
}

export default ContactForm; 