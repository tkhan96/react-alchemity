import React, { useState } from 'react';
import styles from './ContactForm.module.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    resume: null,
  });

  const [wordCount, setWordCount] = useState(0);
  const [attachments, setAttachments] = useState(0);
  const MAX_WORDS = 250;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === 'resume') {
      setFormData(prevState => ({
        ...prevState,
        resume: files[0]
      }));
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (wordCount > MAX_WORDS) {
      alert('Message exceeds the 250-word limit. Please shorten your message.');
      return;
    }
    console.log('Form Data Submitted:', formData);
    alert('Thank you for your message! We will be in touch shortly.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      resume: null,
    });
    setWordCount(0);
    setAttachments(0);
  };

  return (
    <section className={styles.section}>
      <form onSubmit={handleSubmit} className={styles.form}>
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

        {/* Resume Upload Field Group */}
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

        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </section>
  );
}

export default ContactForm; 