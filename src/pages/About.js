import React, { useState } from 'react';
import Modal from '../components/Modal';
import ProfileCard from '../components/ProfileCard';
import PageHero from '../components/PageHero';
import aboutBg from '../components/images/about.bg.png'; // Adjust the path as needed
// Import founder images
import founder1 from '../components/images/founder1.jpg';
import founder2 from '../components/images/founder2.jpg';
import founder3 from '../components/images/founder3.jpg';
import founder4 from '../components/images/founder4.jpg';

// Placeholder data
const founders = [
  {
    id: 1,
    name: 'Eric Washman',
    title: 'Founder and Executive Chair',
    bio: [
      'Director Maryland Energy Innovation Institute',
      '30+ years of Energy Research and Product Development/Innovation',
      'Founder of VC-backed Battery Company',
      'Past President, The Electrochemical Society',
    ],
    imageUrl: founder1,
    linkedInUrl: 'https://www.linkedin.com/in/ericwashman', // Add LinkedIn URL
  },
  {
    id: 2,
    name: 'Roger McKain',
    title: 'CEO',
    bio: [
      'Former Interim CEO, LG Fuel Cell Systems, Inc.',
      'President SOFCO-EFS Holdings, LLC.',
      'Vice President Government Programs Rolls-Royce Fuel Cell Systems.',
    ],
    imageUrl: founder2,
    linkedInUrl: 'https://www.linkedin.com/in/rogermckain', // Add LinkedIn URL
  },
  {
    id: 3,
    name: 'Emir Dogdibegovic',
    title: 'CTO',
    bio: [
      '15+ years Development and Scaleup of Clean Energy Technologies',
      'Lawrence Berkeley National Laboratory Affiliate',
    ],
    imageUrl: founder3,
    linkedInUrl: 'https://www.linkedin.com/in/emirdogdibegovic', // Add LinkedIn URL
  },
];

const advisors = [
  {
    id: 4,
    name: 'Nitin Parekh',
    title: 'Advisor',
    bio: [
      'Director Stanford High Impact Fund Proven entrepreneur, fundraiser, corporate venture investor',
      'Board member, creating joint ventures and leading the acquisition of public and private companies.',
    ],
    imageUrl: founder4, // Already added
  },
  { id: 5, name: 'Dr. Evelyn Reed', title: 'Strategic Advisor' },
  { id: 6, name: 'Marcus Jones', title: 'Technology Advisor' },
  { id: 7, name: 'Priya Sharma', title: 'Market Advisor' },
  { id: 8, name: 'Kenji Tanaka', title: 'Financial Advisor' },
];

// Basic grid styles - can move to CSS Module if needed
const gridStyle = {
  display: 'grid',
  gap: '1.5rem',
  maxWidth: 'var(--container-width)',
  margin: '2rem auto',
};

const founderGridStyle = {
  ...gridStyle,
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
};

const advisorGridStyle = {
  ...gridStyle,
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
};

function About() {
  const [showModal, setShowModal] = useState(false);
  const [selectedFounder, setSelectedFounder] = useState(null);

  const handleOpenModal = (founder) => {
    setSelectedFounder(founder);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFounder(null);
  };

  return (
    <>
      <PageHero title={'Placeholder'} backgroundImageUrl={aboutBg}/>
      <div style={{ padding: 'var(--section-padding)', backgroundColor: '#e8f5e9'}}>
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Founders</h2>
        <div style={founderGridStyle}>
          {founders.map((founder) => (
            <ProfileCard
              key={founder.id}
              name={founder.name}
              title={founder.title}
              imageUrl={founder.imageUrl} // Pass the image URL
              linkedInUrl={founder.linkedInUrl} // Pass the LinkedIn URL if available
              onClick={() => handleOpenModal(founder)}
            />
          ))}
        </div>

        <h2
          style={{
            textAlign: 'center',
            marginTop: '4rem',
            marginBottom: '1rem',
          }}
        >
          Advisors
        </h2>
        <div style={advisorGridStyle}>
          {advisors.map((founder) => (
            <ProfileCard
              key={founder.id}
              name={founder.name}
              title={founder.title}
              imgUrl = {founder.imageUrl} // Pass the image URL if available
            />
          ))}
        </div>

        {selectedFounder && (
          <Modal
            show={showModal}
            onClose={handleCloseModal}
            title={`${selectedFounder.name} - ${selectedFounder.title}`}
          >
            <ul>
              {selectedFounder.bio.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </Modal>
        )}
      </div>
    </>
  );
}

export default About;