// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import ComparisonTable, { defaultRows } from './ComparisonTable';
import heroImg from '../img/homepage hero.jpeg'; // <-- import your image

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-inner">
          <h1>Love is grown, not mined.</h1>
          <p>
            Mmiri Diamonds brings you Water Diamonds — lab-grown stones as pure as water,
            without the scars of mining.
          </p>
          <div className="button-group">
            <Link to="/products" className="btn primary">Shop Rings</Link>
            <Link to="/custom-design" className="btn outline">Design Your Ring</Link>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <h2>What Are Water Diamonds?</h2>
        <p className="quote">‘Blood may be thicker than water, but water leaves no stains.’</p>
        <ComparisonTable rows={defaultRows} />
      </section>
    </div>
  );
}

export default Home;
