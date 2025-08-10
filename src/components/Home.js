import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Love is grown, not mined.</h1>
        <p>
          Mmiri Diamonds brings you Water Diamonds — lab-grown stones as pure as water,
          without the scars of mining.
        </p>
        <div className="button-group">
          <Link to="/products" className="btn primary">
            Shop Rings
          </Link>
          <Link to="/custom-design" className="btn outline">
            Design Your Ring
          </Link>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <h2>What Are Water Diamonds?</h2>
        <p className="quote">'Blood may be thicker than water, but water leaves no stains.'</p>
        <div className="comparison-table">
          <div className="table-row table-header">
            <div className="cell">Mined Diamonds</div>
            <div className="cell">Water Diamonds</div>
          </div>
          <div className="table-row">
            <div className="cell">Extremely durable</div>
            <div className="cell">Extremely durable</div>
          </div>
          <div className="table-row">
            <div className="cell">Exceptional</div>
            <div className="cell">Exceptional</div>
          </div>
          <div className="table-row">
            <div className="cell">Environmentally destructive</div>
            <div className="cell">Sustainably created</div>
          </div>
          <div className="table-row">
            <div className="cell">Higher</div>
            <div className="cell">Lower</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
