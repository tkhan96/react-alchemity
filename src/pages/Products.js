import React from 'react';
import PageHero from '../components/PageHero';
import productsBg from '../components/images/products-bg-2.jpg';

function Products() {
  return (
    <>
      <PageHero title={'Products'} backgroundImageUrl={productsBg}/>
      <div style={{ padding: 'var(--section-padding)', minHeight: '60vh', backgroundColor: '#000000' }}>
        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', color: '#ffffff' }}>
          Explore Alchemity's suite of products designed to empower your business. Learn about features, benefits, and integration capabilities.
        </p>
      </div>
    </>
  );
}

export default Products; 