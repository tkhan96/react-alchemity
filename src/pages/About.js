import React, { useState } from 'react';
import Modal from '../components/Modal';
import ProfileCard from '../components/ProfileCard';
import PageHero from '../components/PageHero';
import aboutBg from '../components/images/about.png'; // Adjust the path as needed
// Import founder images
import founder1 from '../components/images/founder1.png';
import founder2 from '../components/images/founder2.png';
import founder3 from '../components/images/founder3.png';
import advisor1 from '../components/images/advisor1.png';
import advisor2 from '../components/images/advisor2.png';
import advisor3 from '../components/images/advisor3.png';

// Placeholder data
const founders = [
  {
    id: 2,
    name: 'Rodger McKain, Ph.D.',
    title: 'Chief Executive Officer',
    blurb: 'Fortune 500 Executive',
    bio: [
      'VP and Head at British Petroleum',
      'Former Interim CEO, LG Fuel Cell Systems, Inc.',
      'VP Govt. Programs Rolls-Royce Fuel Cell Systems',
      'President SOFCO-EFS Holdings, LLC',
      'Education: Case Western Reserve University',
    ],
    imageUrl: founder2,
    linkedInUrl: 'https://www.linkedin.com/in/rodger-mckain-5223168/',
  },
  {
    id: 3,
    name: 'Emir Dogdibegovic, Ph.D.',
    title: 'Chief Technology and Commercialization Officer',
    blurb: '15 years Development, Scaleup, and Deployment of Clean Energy Technologies',
    bio: [
      'Associated know-how for product deployment Director Strategy and Execution, Origis Energy',
      'Sr. Eng. & Sr. Program Manager, Nexceris',
      'Affiliate, Lawrence Berkeley National Laboratory',
      '70+ journal articles, patents, and presentations',
      'Education: USC, UC Berkeley – LBNL',
    ],
    imageUrl: founder3,
    linkedInUrl: 'https://www.linkedin.com/in/emir-dogdibegovic-ph-d-ba976b192/',
  },
  {
    id: 1,
    name: 'Eric Wachsman, Ph.D.',
    title: 'Executive Chair',
    blurb: '30 years of Energy Research and Product Development/Innovation',
    bio: [
      'Developed the IP licensed to Alchemity',
      'Director Maryland Energy Innovation Institute',
      'Founder of VC-backed Battery Company (Ion Storage Systems)',
      'Published >300 papers, >40 patents',
      'Education: UC Berkeley, Stanford University',
    ],
    imageUrl: founder1,
    linkedInUrl: 'https://www.linkedin.com/in/ericdwachsman/',
  },
];

const advisors = [
  {
    id: 4,
    name: 'Nitin Parekh',
    title: 'Advisor',
    blurb: 'Proven entrepreneur, fundraiser, corporate venture investor',
    bio: [
      'Director Stanford High Impact Fund',
      'Board member, creating joint ventures and leading the acquisition of companies',
      'Education: University of Wisconsin-Madison, Stanford University, UCLA',
    ],
    imageUrl: advisor1,
    linkedInUrl: 'https://www.linkedin.com/in/nitin-parekh-454578/',
  },
  {
    id: 5,
    name: 'Matt Zoller',
    title: 'Advisor',
    blurb: '30 years of Proven Leadership in Energy and Refinery Operations',
    bio: [
      '23 years at Chevron, leading refinery operations',
      'Supervisor for Operations, Load Dispatch and Process at Hawaiian Electric, Par Holdings, and Island Energy Services',
      'Education: University of Hawaii',
    ],
    imageUrl: advisor2,
    linkedInUrl: 'https://www.linkedin.com/in/matt-zoller-8557465a/',
  },
  {
    id: 6,
    name: 'Glenn Fuller',
    title: 'Advisor',
    blurb: '25 years of Expertise in Process, Controls, Lean Six Sigma – Renewables and Refineries',
    bio: [
      '18 years at Chevron, leading Lean Six sigma, Process and Operations',
      'Sr. Process Engineer, Kern Energy',
      'Education: UC Santa Barbara',
    ],
    imageUrl: advisor3,
    linkedInUrl: 'https://www.linkedin.com/in/glenn-fuller-a990b56/',
  },
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

const buttonStyle = {
  backgroundColor: '#0077b5',
  color: '#fff',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  cursor: 'pointer',
  marginTop: '1rem',
  fontWeight: '500',
};

const titleStyle = {
  fontSize: '40px',
  color: '#25abe0',
  marginBottom: '3rem',
  textAlign: 'center',
  fontWeight: '500',
};

const linkedinButtonStyle = {
  backgroundColor: '#45a10f',
  color: 'white',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  marginTop: '1rem',
  transition: 'background-color 0.3s ease',
};

function About() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleOpenModal = (person) => {
    setSelectedPerson(person);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPerson(null);
  };

  return (
    <>
      <PageHero title={'About Us'} backgroundImageUrl={aboutBg}/>
      <div style={{ padding: 'var(--section-padding)', backgroundColor: '#000'}}>
        <h2 style={titleStyle}>Founders</h2>
        <div style={founderGridStyle}>
          {founders.map((founder) => (
            <ProfileCard
              key={founder.id}
              name={founder.name}
              title={founder.title}
              imageUrl={founder.imageUrl}
              linkedInUrl={founder.linkedInUrl}
              blurb={founder.blurb}
              onClick={() => handleOpenModal(founder)}
              isEric={founder.id === 1}
            />
          ))}
        </div>

        <h2 style={titleStyle}>Advisors</h2>
        <div style={advisorGridStyle}>
          {advisors.map((advisor) => (
            <ProfileCard
              key={advisor.id}
              name={advisor.name}
              title={advisor.title}
              imageUrl={advisor.imageUrl}
              blurb={advisor.blurb}
              onClick={() => handleOpenModal(advisor)}
              isAdvisor={true}
              linkedInUrl={advisor.linkedInUrl}
            />
          ))}
        </div>

        {selectedPerson && (
          <Modal
            show={showModal}
            onClose={handleCloseModal}
            title={`${selectedPerson.name} - ${selectedPerson.title}`}
            linkedInUrl={selectedPerson.linkedInUrl}
          >
            <ul>
              {selectedPerson.bio && selectedPerson.bio.map((point, index) => (
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