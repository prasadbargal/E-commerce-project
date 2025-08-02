import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductList.css';

const products = [
  {
    id: 'mensSolidCasualShirt',
    name: 'Mens Solid Casual Shirt',
    brand: 'ROADSTER',
    discount: 56,
    originalPrice: 1699,
    price: 790,
    rating: 4.5,
    ratingCount: 19297,
    image: '/menproductimages/menimage1.jpg',
  },
  {
    id: 'menStripedSlimFitShirt',
    name: 'Men Striped Slim Fit Shirt',
    brand: 'HIGHLANDER',
    discount: 42,
    originalPrice: 1299,
    price: 779,
    rating: 5,
    ratingCount: 15300,
    image: '/menproductimages/menimage2.jpg',
  },
  {
    id: 'womenStripedSlimFit',
    name: 'Women Striped Slim Fit',
    brand: 'HIGHLANDER',
    discount: 40,
    originalPrice: 1299,
    price: 779,
    rating: 5,
    ratingCount: 15300,
    image: '/womenimages/women1.avif',
  },
  // Add more products as needed
];

const ProductList = () => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product-list-container">
      {products.map((product) => (
        <div
          key={product.id}
          className="product-card"
          onClick={() => handleProductClick(product.id)}
        >
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <p className="product-name"># {product.name}</p>
            <p className="product-brand">{product.brand}</p>
            <div className="product-pricing">
              <span className="discount">↓ {product.discount}%</span>
              <span className="original-price">₹{product.originalPrice}</span>
              <span className="price">₹{product.price}</span>
            </div>
            <div className="product-rating">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={i < Math.round(product.rating) ? 'star filled' : 'star'}>
                  ★
                </span>
              ))}
              <span className="rating-count">({product.ratingCount.toLocaleString()})</span>
            </div>
            <button
              className="add-to-cart-button"
              onClick={(e) => {
                e.stopPropagation();
                alert(`Added ${product.name} to cart.`);
                // Integrate with cart context if available
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
