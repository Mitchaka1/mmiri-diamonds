import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Reuse the same sample products as in ProductList
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

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id, 10));
  const [activeTab, setActiveTab] = useState('description');

  if (!product) {
    return <p>Product not found.</p>;
  }

  const otherProducts = products.filter((p) => p.id !== product.id);

  return (
    <div className="product-detail-page container">
      <div className="detail-top">
        <img src={product.image} alt={product.name} className="detail-image" />
        <div className="detail-info">
          <h1>{product.name}</h1>
          <p className="price">${product.price.toLocaleString()}</p>
          <button className="btn primary">Add to Cart</button>
          <ul className="spec-list">
            <li><strong>Carat:</strong> {product.carat}</li>
            <li><strong>Color:</strong> {product.color}</li>
            <li><strong>Clarity:</strong> {product.clarity}</li>
            <li><strong>Metal:</strong> {product.metal}</li>
          </ul>
        </div>
      </div>

      <div className="tabs">
        <button
          className={activeTab === 'description' ? 'active' : ''}
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>
        <button
          className={activeTab === 'certification' ? 'active' : ''}
          onClick={() => setActiveTab('certification')}
        >
          Certification
        </button>
        <button
          className={activeTab === 'shipping' ? 'active' : ''}
          onClick={() => setActiveTab('shipping')}
        >
          Shipping & Returns
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'description' && (
          <p>
            This elegant {product.name} features a Water Diamond centre stone
            complemented by a sleek band. Each Water Diamond is lab-grown and
            environmentally conscious.
          </p>
        )}
        {activeTab === 'certification' && (
          <p>
            All Water Diamonds are certified by leading gemological institutes,
            ensuring their quality and authenticity.
          </p>
        )}
        {activeTab === 'shipping' && (
          <p>
            We offer free insured shipping worldwide and a 30-day return policy
            on all ring purchases.
          </p>
        )}
      </div>

      <h2>You may also like</h2>
      <div className="recommendations">
        {otherProducts.map((item) => (
          <div key={item.id} className="recommend-card">
            <Link to={`/products/${item.id}`} className="product-link">
              <img src={item.image} alt={item.name} className="recommend-image" />
              <h4>{item.name}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetail;
