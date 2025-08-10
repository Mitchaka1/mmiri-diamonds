import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import ComparisonTable, { defaultRows } from './ComparisonTable';
import heroImage from '../img/homepage hero.jpeg';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay">
          <Container className="text-center text-white py-5">
            <h1 className="display-4">Love is grown, not mined.</h1>
            <p>
              Mmiri Diamonds brings you Water Diamonds — lab-grown stones as pure as
              water, without the scars of mining.
            </p>
            <div className="mt-4">
              <Button
                as={Link}
                to="/products"
                variant="light"
                size="lg"
                className="me-3"
              >
                Shop Rings
              </Button>
              <Button
                as={Link}
                to="/custom-design"
                variant="outline-light"
                size="lg"
              >
                Design Your Ring
              </Button>
            </div>
          </Container>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <h2>What Are Water Diamonds?</h2>
        <p className="quote">'Blood may be thicker than water, but water leaves no stains.'</p>
        <ComparisonTable rows={defaultRows} />
      </section>
    </div>
  );
}

export default Home;
