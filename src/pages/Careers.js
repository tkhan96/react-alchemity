import React, { useState } from 'react';
import styles from './Contact.module.css';
import PageHero from '../components/PageHero';
import careersVideo from '../components/images/careers.mov';

function Careers() {
  // Simple state for the job application form
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    message: '',
  });
  const [attachments, setAttachments] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const MAX_WORDS = 250;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setForm({ ...form, resume: files[0] });
      setAttachments(files.length);
    } else if (name === 'message') {
      const words = value.trim().split(/\s+/).filter(word => word.length > 0);
      const currentWordCount = words.length;
      if (currentWordCount <= MAX_WORDS) {
        setWordCount(currentWordCount);
        setForm({ ...form, [name]: value });
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (wordCount > MAX_WORDS) {
      alert('Message exceeds the 250-word limit. Please shorten your message.');
      return;
    }
    alert('Application submitted!');
    setForm({ name: '', email: '', phone: '', resume: null, message: '' });
    setAttachments(0);
    setWordCount(0);
  };

  return (
    <>
      <PageHero 
        backgroundVideoUrl={careersVideo}
        title="Careers"
      />
      <div className={styles.contactPage}>
        <div className={styles.contentWrapper}>
          {/* Left: Info */}
          <div className={styles.contactInfo}>
            <h2 style={{ color: '#25abe0' }}>We're Hiring!</h2>
            <p style={{ color: '#fff', marginBottom: '2rem' }}>
              If you're interested in one of our open positions, start by applying here and attaching your resume.
            </p>
          </div>
          {/* Right: Form */}
          <div className={styles.formWrapper}>
            <section style={{ background: '#141414', borderRadius: '8px', padding: '2rem', color: '#fff', border: '1px solid #fff', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ color: '#25abe0', fontWeight: 600 }} htmlFor="name">Name*</label>
                  <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #fff', marginTop: '0.5rem' }} />
                </div>
                <div>
                  <label style={{ color: '#25abe0', fontWeight: 600 }} htmlFor="email">Email*</label>
                  <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #fff', marginTop: '0.5rem' }} />
                </div>
                <div>
                  <label style={{ color: '#25abe0', fontWeight: 600 }} htmlFor="phone">Phone</label>
                  <input type="text" id="phone" name="phone" value={form.phone} onChange={handleChange} style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #fff', marginTop: '0.5rem' }} />
                </div>
                <div>
                  <label style={{ color: '#25abe0', fontWeight: 600 }} htmlFor="resume">Attach Resume</label>
                  <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" onChange={handleChange} style={{ width: '100%', marginTop: '0.5rem', color: '#fff' }} />
                  <div style={{ color: '#aaa', fontSize: '0.95rem', marginTop: '0.5rem' }}>Attachments ({attachments})</div>
                </div>
                <div>
                  <label style={{ color: '#25abe0', fontWeight: 600 }} htmlFor="message">Message</label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={4} style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #fff', marginTop: '0.5rem', color: '#000' }} />
                  <div style={{ fontSize: '0.9rem', color: '#aaa', textAlign: 'right', marginTop: '0.5rem', marginBottom: '1rem' }}>{wordCount}/{MAX_WORDS} words</div>
                </div>
                <button type="submit" style={{ width: '100%', background: '#25abe0', color: '#fff', padding: '1rem', border: 'none', borderRadius: '4px', fontWeight: 600, fontSize: '1.1rem', marginTop: '0.5rem', cursor: 'pointer', transition: 'background 0.3s' }}>Submit Application</button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Careers;