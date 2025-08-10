import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import InfoPage from './components/InfoPage';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import CustomDesign from './components/CustomDesign';

// Main application component. It defines the overall page layout
// and sets up client-side routing. Each route renders a different
// component representing a page on the site.
function App() {
  return (
    <div className="app-container">
      {/* Global navigation bar */}
      <Navbar />
      {/* Main content area with top/bottom margin for the header and footer */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/custom-design" element={<CustomDesign />} />
        </Routes>
      </main>
      {/* Global footer */}
      <Footer />
    </div>
  );
}

export default App;
