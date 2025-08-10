import React from 'react';
import { Link } from 'react-router-dom';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Platinum Solitaire',
    price: 3500,
    carat: 1.5,
    color: 'D',
    clarity: 'VS1',
    metal: 'Platinum',
    image: '/images/ring1.jpg',
  },
  {
    id: 2,
    name: 'Gold Oval Cut',
    price: 3200,
    carat: 1.2,
    color: 'E',
    clarity: 'VS2',
    metal: 'Yellow Gold',
    image: '/images/ring2.jpg',
  },
  {
    id: 3,
    name: 'Silver Round Cut',
    price: 2800,
    carat: 1.0,
    color: 'F',
    clarity: 'VS1',
    metal: 'White Gold',
    image: '/images/ring3.jpg',
  },
];

function ProductList() {
  return (
    <div className="product-list container">
      <h1>Shop Rings</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/products/${product.id}`} className="product-link">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p className="price">${product.price.toLocaleString()}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
