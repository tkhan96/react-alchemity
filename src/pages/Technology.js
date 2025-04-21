import React, { useEffect, useRef, useState } from 'react';
import PageHero from '../components/PageHero'; // Import PageHero
import Modal from '../components/Modal';

// Import the technology image
import technologyImage from '../components/images/technology.png'; // Adjust the path as needed
import technologyBg from '../components/images/technology-hero.png'; // Adjust the path as needed
// Inline styles consistent with the Home page
const sectionStyle = {
  padding: 'var(--section-padding)',
  margin: '0 auto',
  backgroundColor: '#e8f5e9', // Light green background
  textAlign: 'center',
};

const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 2fr 1fr',
  gap: '2rem',
  alignItems: 'center',
  marginTop: '4rem',
  padding: '0 2rem',
};

const cardStyle = {
  padding: '1.5rem',
  backgroundColor: 'var(--background-light)',
  border: '1px solid var(--border-color)',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  textAlign: 'left',
  opacity: 0,
  transform: 'translateY(50px)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
};

const cardClickStyle = {
  transform: 'scale(0.95)',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  display: 'block',
  margin: '0 auto',
  maxWidth: '800px',
};

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) scale(0.7)',
  backgroundColor: 'white',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  maxWidth: '600px',
  width: '90%',
  zIndex: 1000,
  opacity: 0,
  transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
};

const modalVisibleStyle = {
  opacity: 1,
  transform: 'translate(-50%, -50%) scale(1)',
};

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0)',
  zIndex: 999,
  transition: 'background-color 0.6s ease',
};

const overlayVisibleStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  background: 'none',
  border: 'none',
  fontSize: '1.5rem',
  cursor: 'pointer',
  color: '#666',
  transition: 'transform 0.3s ease',
};

const closeButtonHoverStyle = {
  transform: 'rotate(90deg)',
};

function Technology() {
  const cardsRef = useRef([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isCardClicked, setIsCardClicked] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const handleCardClick = (index) => {
    setIsCardClicked(true);
    setTimeout(() => {
      setIsCardClicked(false);
      setSelectedCard(index);
    }, 150);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const cardData = [
    {
      title: "Fast On-Site Assembly",
      description: "Our modular design allows for rapid on-site assembly, reducing installation time and project risk.",
      details: "Fast On-Site Assembly Details: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      title: "World's Most Powerful PEM Electrolysis Stack",
      description: "Harness the power of the most advanced PEM electrolysis stack for efficient hydrogen production.",
      details: "World's Most Powerful PEM Electrolysis Stack Details: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Low-Cost Hydrogen Production",
      description: "Fully integrated systems ensure cost-effective hydrogen production at scale.",
      details: "Low-Cost Hydrogen Production Details: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    {
      title: "Advanced Technology",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      details: "Advanced Technology Details: Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
    }
  ];

  return (
    <>
      <PageHero backgroundImageUrl={technologyBg} /> {/* Add PageHero */}
      <div style={sectionStyle}>
        <h1 style={{ fontSize: '100px', color: 'var(--primary-color)', marginBottom: '1rem' }}>
          Heather™
        </h1>
        
        <div style={gridContainerStyle}>
          {/* Left Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div
              ref={(el) => (cardsRef.current[0] = el)}
              style={{
                ...cardStyle,
                ...(isCardClicked && selectedCard === 0 ? cardClickStyle : {})
              }}
              onClick={() => handleCardClick(0)}
            >
              <h3>{cardData[0].title}</h3>
              <p>{cardData[0].description}</p>
            </div>
            <div
              ref={(el) => (cardsRef.current[1] = el)}
              style={{
                ...cardStyle,
                ...(isCardClicked && selectedCard === 1 ? cardClickStyle : {})
              }}
              onClick={() => handleCardClick(1)}
            >
              <h3>{cardData[1].title}</h3>
              <p>{cardData[1].description}</p>
            </div>
          </div>

          {/* Center Image */}
          <div>
            <img
              src={technologyImage}
              alt="Technology Overview"
              style={imageStyle}
            />
          </div>

          {/* Right Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div
              ref={(el) => (cardsRef.current[2] = el)}
              style={{
                ...cardStyle,
                ...(isCardClicked && selectedCard === 2 ? cardClickStyle : {})
              }}
              onClick={() => handleCardClick(2)}
            >
              <h3>{cardData[2].title}</h3>
              <p>{cardData[2].description}</p>
            </div>
            <div
              ref={(el) => (cardsRef.current[3] = el)}
              style={{
                ...cardStyle,
                ...(isCardClicked && selectedCard === 3 ? cardClickStyle : {})
              }}
              onClick={() => handleCardClick(3)}
            >
              <h3>{cardData[3].title}</h3>
              <p>{cardData[3].description}</p>
            </div>
          </div>
        </div>
      </div>

      {selectedCard !== null && (
        <Modal
          show={true}
          onClose={handleCloseModal}
          title={cardData[selectedCard].title}
        >
          <p>{cardData[selectedCard].details}</p>
        </Modal>
      )}
    </>
  );
}

export default Technology;