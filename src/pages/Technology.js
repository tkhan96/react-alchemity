import React, { useEffect, useRef, useState } from 'react';
import PageHero from '../components/PageHero'; // Import PageHero
import Modal from '../components/Modal';

// Import the technology image
import technologyImage from '../components/images/TechnologyImage1.png'; // Adjust the path as needed
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
  backgroundColor: '#ffffff', // White background like founder cards
  border: '1px solid var(--border-color)',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  textAlign: 'left',
  opacity: 0,
  transform: 'translateY(50px)',
  transition: 'all 0.3s ease',
  cursor: 'default',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

// Add hover styles to the component
const cardHoverStyle = {
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
  }
};

const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  padding: '0.75rem 1.5rem',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  marginTop: '1rem',
  fontSize: '1rem',
  fontWeight: '500',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  display: 'block',
  margin: '0 auto',
  maxWidth: '500px',
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

  const handleButtonClick = (index) => {
    setSelectedCard(index);
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
      details: "World's Most Powerful PEM Electrolysis Stack Details: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
    },
    {
      title: "Sustainable Energy Solutions",
      description: "Innovative approaches to sustainable energy production and distribution for a greener future.",
      details: "Sustainable Energy Solutions Details: At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
    },
    {
      title: "Smart Grid Integration",
      description: "Seamless integration with modern smart grid systems for optimal energy distribution.",
      details: "Smart Grid Integration Details: Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus."
    }
  ];

  return (
    <>
      <PageHero backgroundImageUrl={technologyBg} /> {/* Add PageHero */}
      <div style={sectionStyle}>
        <h1 style={{ 
          fontSize: '100px', 
          color: 'var(--primary-color)', 
          marginBottom: '1rem',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          Heather™
        </h1>
        
        <div style={gridContainerStyle}>
          {/* Left Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                style={{
                  ...cardStyle,
                  transform: 'translateY(0)',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                }}
              >
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '600', 
                  color: '#333', 
                  marginBottom: '1rem',
                  textAlign: 'center'
                }}>{cardData[index].title}</h3>
                <p style={{ 
                  fontSize: '1rem', 
                  color: '#666', 
                  lineHeight: '1.5',
                  textAlign: 'center'
                }}>{cardData[index].description}</p>
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <button 
                    style={{
                      ...buttonStyle,
                      backgroundColor: '#4CAF50',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#388E3C';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#4CAF50';
                    }}
                    onClick={() => handleButtonClick(index)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
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
            {[3, 4, 5].map((index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                style={{
                  ...cardStyle,
                  transform: 'translateY(0)',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                }}
              >
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '600', 
                  color: '#333', 
                  marginBottom: '1rem',
                  textAlign: 'center'
                }}>{cardData[index].title}</h3>
                <p style={{ 
                  fontSize: '1rem', 
                  color: '#666', 
                  lineHeight: '1.5',
                  textAlign: 'center'
                }}>{cardData[index].description}</p>
                <button 
                  style={{
                    ...buttonStyle,
                    backgroundColor: '#4CAF50',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#388E3C';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#4CAF50';
                  }}
                  onClick={() => handleButtonClick(index)}
                >
                  Learn More
                </button>
              </div>
            ))}
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