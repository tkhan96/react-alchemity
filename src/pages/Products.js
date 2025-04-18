import React from 'react';
import PageHero from '../components/PageHero';
import productsBg from '../components/images/product-hero.png'; // Adjust the path as needed

function Products() {
  return (
    <>
      <PageHero backgroundImageUrl={productsBg}/>
      <div style={{ padding: 'var(--section-padding)', minHeight: '60vh', backgroundColor: '#e8f5e9' }}>
        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          Explore Alchemity's suite of products designed to empower your business. Learn about features, benefits, and integration capabilities.
        </p>
        {/* Placeholder for product details/cards */}
      </div>
    </>
  );
}

export default Products; 