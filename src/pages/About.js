import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import ProfileCard from '../components/ProfileCard';
import PageHero from '../components/PageHero';
import about1 from '../components/images/about1.png';
import about2 from '../components/images/about2.png';
import about3 from '../components/images/about3.png';
import founder1 from '../components/images/founder1.jpg';
import founder2 from '../components/images/founder2.jpg';
import founder3 from '../components/images/founder3.jpg';
import advisor1 from '../components/images/advisor1.png';
import advisor2 from '../components/images/advisor2.jpg';
import advisor3 from '../components/images/advisor3.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const founders = [
  {
    id: 2,
    name: 'Rodger McKain, Ph.D.',
    title: 'CEO',
    blurb: '30 years as Fortune 500 Executive',
    bio: [
      'Rodger brings expertise in building large businesses and succesful exit strategies. He successfully lead the growth of multi-billion dollar S&P 500 companies.',
      'Previous Roles:',
      'VP and Head at British Petroleum (Global Exploration, Gas to Chemicals/Liquids).',
      'Interim CEO, LG Fuel Cell Systems, Inc.',
      'VP Govt. Programs Rolls-Royce Fuel Cell Systems.',
      'President SOFCO-EFS Holdings, LLC (Acquired by Rolls-Royce/LG).',
      'Education: Case Western Reserve University.',
    ],
    imageUrl: founder2,
    linkedInUrl: 'https://www.linkedin.com/in/rodger-mckain-5223168/',
  },
  {
    id: 3,
    name: 'Emir Dogdibegovic, Ph.D.',
    title: 'CTO and CCO',
    blurb: '15 years of Scaleup and Deployment of Clean Energy Technologies',
    bio: [
      'Emir brings the technical and product scaleup know-how and strategic business expertise in customer acquisition, project development and deployment, and revenue generation.',
      'Previous Roles:',
      'Director Strategy and Execution, Origis Energy.',
      'Senior Engineer & Senior Program Manager, Nexceris.',
      'Affiliate, Lawrence Berkeley National Laboratory.',
      '70+ journal articles, patents, and presentations.',
      'Education: USC, UC Berkeley - Berkeley Lab.',
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
      'Eric brings the innovation (developed IP licensed to Alchemity) and startup scaleup expertise through multiple ventures.',
      'Current Roles:',
      'Founder of VC-backed Battery Company (Ion Storage Systems).',
      'Director of Maryland Energy Innovation Institute.',
      'Published >300 papers, >40 patents.',
      'Education: UC Berkeley, Stanford University.',
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
      'Board member of multiple ventures, creating joint ventures and leading the acquisition of companies',
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
      '23 years at Chevron, leading refinery operations.',
      'Various roles at Hawaiian Electric, Par Holdings, and Island Energy Services.',
      'Education: University of Hawaii',
    ],
    imageUrl: advisor2,
    linkedInUrl: 'https://www.linkedin.com/in/matt-zoller-8557465a/',
  },
  {
    id: 6,
    name: 'Glenn Fuller',
    title: 'Advisor',
    blurb: '25 years of Expertise in Process, Controls, Lean Six Sigma',
    bio: [
      '18 years at Chevron, leading Lean Six sigma, Process and Operations.',
      'Senior Process Engineer (renewable fuels), Kern Energy. ',
      'Education: UC Santa Barbara',
    ],
    imageUrl: advisor3,
    linkedInUrl: 'https://www.linkedin.com/in/glenn-fuller-a990b56/',
  },
];

const gridStyle = {
  display: 'grid',
  gap: '2rem',
  maxWidth: '1400px',
  margin: '1rem auto',
  width: '90%',
  justifyContent: 'center'
};

const founderGridStyle = {
  ...gridStyle,
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  maxWidth: '1200px',
  gap: '3rem'
};

const advisorGridStyle = {
  ...gridStyle,
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  maxWidth: '1200px',
  gap: '3rem'
};

const buttonStyle = {
  backgroundColor: '#0077b5',
  color: '#fff',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  cursor: 'pointer',
  marginTop: '1rem auto',
  fontWeight: '500',
};

const titleStyle = {
  fontSize: '40px',
  color: '#25abe0',
  marginBottom: '3rem',
  marginTop: '5rem',
  textAlign: 'center',
  fontWeight: '500',
};

const linkedinButtonStyle = {
  backgroundColor: '#25abe0',
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

// Add animation variants after imports
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

function About() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const images = [about1, about2, about3];

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
      <style>
        {`
          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
      <div style={{ position: 'relative' }}>
        <PageHero 
          title="About Us"
          style={{ marginTop: '-300px', position: 'relative', zIndex: 2 }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '80%',
          height: '120%',
          overflow: 'hidden',
          clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 20% 100%)',
          zIndex: 1,
          marginTop: '-29px',
          display: 'flex',
          alignItems: 'center'
        }}>
          <div style={{
            display: 'flex',
            gap: '0',
            animation: 'slide 30s linear infinite',
            alignItems: 'center',
            margin: 0,
            padding: '0 2rem',
            width: 'max-content',
            height: '100%',
            transform: 'translateX(0)'
          }}>
            {images.map((image, index) => (
              <div key={index} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                padding: '0',
                marginTop: '40px',
                paddingBottom: '40px',
                flexShrink: 0
              }}>
                <img
                  src={image}
                  alt={`About ${index + 1}`}
                  style={{
                    width: '650px',
                    height: '650px',
                    objectFit: 'contain',
                    flexShrink: 0,
                    marginBottom: '0.5rem',
                    opacity: 1
                  }}
                />
              </div>
            ))}
            {images.map((image, index) => (
              <div key={`duplicate-${index}`} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                padding: '0',
                marginTop: '40px',
                paddingBottom: '40px',
                flexShrink: 0
              }}>
                <img
                  src={image}
                  alt={`About ${index + 1}`}
                  style={{
                    width: '650px',
                    height: '650px',
                    objectFit: 'contain',
                    flexShrink: 0,
                    marginBottom: '0.5rem',
                    opacity: 1
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ padding: 'var(--section-padding)', backgroundColor: '#000000'}}>
        <h2 style={{...titleStyle, marginTop: '0'}}>Founders</h2>
        <div style={founderGridStyle}>
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <ProfileCard
                key={founder.name}
                {...founder}
                id={`founder-${index + 1}`}
                onClick={() => handleOpenModal(founder)}
              />
            </motion.div>
          ))}
        </div>

        <h2 style={{...titleStyle, marginTop: '4rem'}}>Advisors</h2>
        <div style={advisorGridStyle}>
          {advisors.map((advisor, index) => (
            <motion.div
              key={advisor.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <ProfileCard
                name={advisor.name}
                title={advisor.title}
                imageUrl={advisor.imageUrl}
                blurb={advisor.blurb}
                onClick={() => handleOpenModal(advisor)}
                isAdvisor={true}
                linkedInUrl={advisor.linkedInUrl}
                id={`advisor-${index + 1}`}
              />
            </motion.div>
          ))}
        </div>

        {selectedPerson && (
          <Modal
            show={showModal}
            onClose={handleCloseModal}
            title={`${selectedPerson.name} - ${
              selectedPerson.name.includes('Rodger') ? 'CEO' :
              selectedPerson.name.includes('Emir') ? 'CTO & CCO' :
              selectedPerson.title
            }`}
            linkedInUrl={selectedPerson.linkedInUrl}
            size={
              selectedPerson.name.includes('Emir') ? 'xlarge' :
              selectedPerson.name.includes('Matt') || selectedPerson.name.includes('Glenn') ? 'default' :
              'large'
            }
          >
            <ul style={{ 
              textAlign: 'left', 
              paddingLeft: '0',
              listStyle: 'none',
              margin: '0',
              fontSize: '1.2rem'
            }}>
              {selectedPerson.bio && selectedPerson.bio.map((point, index) => {
                if (index === 0) {
                  return <li key={index} style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>{point}</li>;
                } else if (index === 1 && selectedPerson.title === 'Advisor') {
                  return (
                    <>
                      <h4 key="current-role" style={{ textAlign: 'left', marginBottom: '0.5rem', fontSize: '1.4rem' }}>Current Role</h4>
                      <li key={index} style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>{point}</li>
                    </>
                  );
                } else if (point === 'Previous Roles:') {
                  return <h4 key={index} style={{ textAlign: 'left', marginBottom: '0.5rem', fontSize: '1.4rem' }}>Previous Roles</h4>;
                } else if (point.startsWith('Education:')) {
                  return (
                    <>
                      <h4 key={`edu-${index}`} style={{ textAlign: 'left', marginBottom: '0.5rem', fontSize: '1.4rem' }}>Education</h4>
                      <li key={index} style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>{point.replace('Education:', '').trim()}</li>
                    </>
                  );
                } else if (point === 'Previous Roles:' || point === 'Education:') {
                  return null;
                } else if ((selectedPerson.bio[index - 1] === 'Previous Roles:' || 
                          selectedPerson.bio[index - 2] === 'Previous Roles:' ||
                          selectedPerson.bio[index - 3] === 'Previous Roles:' ||
                          selectedPerson.bio[index - 4] === 'Previous Roles:') &&
                          (selectedPerson.name.includes('Emir') || selectedPerson.name.includes('Rodger'))) {
                  return <li key={index} style={{ marginBottom: '0.5rem', lineHeight: '1', fontSize: '1.2rem' }}>{point}</li>;
                } else if (selectedPerson.bio[index - 1] === 'Previous Roles:' || 
                          selectedPerson.bio[index - 2] === 'Previous Roles:' ||
                          selectedPerson.bio[index - 3] === 'Previous Roles:') {
                  return <li key={index} style={{ marginBottom: '0.5rem', lineHeight: '1', fontSize: '1.2rem' }}>{point}</li>;
                } else {
                  return <li key={index} style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>{point}</li>;
                }
              })}
            </ul>
          </Modal>
        )}
      </div>
    </>
  );
}

export default About;