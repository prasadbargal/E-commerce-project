

import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { useWishlist } from './WishlistContext';
import SidebarFilter from './SidebarFilter';
import './Producthome.css'; 
import kidimg1 from './kidimages/img3.jpg';
import kidimg2 from './kidimages/img4.webp';
import kidimg3 from './kidimages/img5.webp';
import kidimg4 from './kidimages/img6.webp';
import kidimg5 from './kidimages/img7.webp';
import kidimg6 from './kidimages/img8.webp';
import kidimg7 from './kidimages/img9.webp';
import kidimg8 from './kidimages/img10.webp';
import kidimg9 from './kidimages/kidimg1.webp';
import kidimg10 from './kidimages/kidimg2.webp';

const kidsProducts = [
  {
    id: 'k1',
    imgSrc:kidimg1,
    tag: '# Kids Printed ',
    brand: 'PEPPERMINT',
    discount: '↓ 35%',
    oldPrice: '₹799',
    newPrice: '₹519',
    rating: '⭐⭐⭐⭐☆',
    ratingCount: 4300,
    size: 'Small'
  },
  {
    id: 'k2',
    imgSrc:kidimg2,
    tag: '# Kids Printed ',
    brand: 'PEPPERMINT',
    discount: '↓ 47%',
    oldPrice: '₹799',
    newPrice: '₹419',
    rating: '⭐⭐⭐⭐☆',
    ratingCount: 4300,
    size: 'Medium'
  },
  {
    id: 'k3',
    imgSrc:kidimg3,
    tag: '# Kids Printed ',
    brand: 'PEPPERMINT',
    discount: '↓ 42%',
    oldPrice: '₹899',
    newPrice: '₹519',
    rating: '⭐⭐⭐⭐☆',
    ratingCount: 4300,
    size: 'Large'
  },
  {
    id: 'k4',
    imgSrc:kidimg4,
    tag: '# Kids Printed ',
    brand: 'PEPPERMINT',
    discount: '↓ 18%',
    oldPrice: '₹699',
    newPrice: '₹569',
    rating: '⭐⭐⭐⭐☆',
    ratingCount: 4300,
    size: 'Small'
  },
  {
    id: 'k5',
    imgSrc:kidimg5,
    tag: '# Kids Printed ',
    brand: 'PEPPERMINT',
    discount: '↓ 23%',
    oldPrice: '₹599',
    newPrice: '₹459',
    rating: '⭐⭐⭐⭐☆',
    ratingCount: 4300,
    size: 'Medium'
  },
  {
    id: 'k6',
    imgSrc:kidimg6,
    tag: '# Kids Printed ',
    brand: 'PEPPERMINT',
    discount: '↓ 18%',
    oldPrice: '₹999',
    newPrice: '₹819',
    rating: '⭐⭐⭐⭐☆',
    ratingCount: 4300,
    size: 'Large'
  },
  {
    id: 'k7',
    imgSrc:kidimg7,
    tag: '# Kids Printed ',
    brand: 'PEPPERMINT',
    discount: '↓ 36%',
    oldPrice: '₹499',
    newPrice: '₹319',
    rating: '⭐⭐⭐⭐☆',
    ratingCount: 4300,
    size: 'Small'
  },
  {
    id: 'k8',
    imgSrc:kidimg8,
    tag: '# Kids Printed ',
    brand: 'PEPPERMINT',
    discount: '↓ 25%',
    oldPrice: '₹899',
    newPrice: '₹669',
    rating: '⭐⭐⭐⭐☆',
    ratingCount: 4300,
    size: 'Medium'
  },
  {
    id: 'k9',
    imgSrc:kidimg9,
    tag: '# Kids Printed ',
    brand: 'PEPPERMINT',
    discount: '↓ 07%',
    oldPrice: '₹399',
    newPrice: '₹369',
    rating: '⭐⭐⭐⭐☆',
    ratingCount: 4300,
    size: 'Large'
  },
  {
    id: 'k10',
    imgSrc:kidimg10,
    tag: '# Kids Printed ',
    brand: 'PEPPERMINT',
    discount: '↓ 31%',
    oldPrice: '₹759',
    newPrice: '₹519',
    rating: '⭐⭐⭐⭐☆',
    ratingCount: 4300,
    size: 'Medium'
  },
 
];

const Kids = () => {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist, wishlistItems } = useWishlist();
  const [showSidebar, setShowSidebar] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(kidsProducts);

  const handleAdd = (product) => {
    addToCart(product);
    alert(`Item from ${product.brand} added to cart!`);
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some(item => item.id === productId);
  };

  const handleFilter = (filters) => {
    // Implement filtering logic here based on filters object
    let filtered = kidsProducts;
    
    // Filter by price
    if (filters.price && filters.price !== 'all') {
      const [min, max] = filters.price.split('-').map(Number);
      filtered = filtered.filter(product => {
        const price = parseInt(product.newPrice.replace(/[^\d]/g, ''));
        return price >= min && price <= max;
      });
    }
    
    // Filter by sizes
    if (filters.sizes && filters.sizes.length > 0) {
      filtered = filtered.filter(product => 
        filters.sizes.includes(product.size)
      );
    }
    
    setFilteredProducts(filtered);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="kids-page-container">
      {/* Filter button for mobile */}
      <button className="filter-toggle-button" onClick={toggleSidebar}>
        FILTERS
      </button>
      
      <div className="page-layout">
        {/* Main content area - 70% width */}
        <div className="main-content" style={{ width: showSidebar ? '70%' : '100%' }}>
          <div className="products-cards">
            {filteredProducts.map((product) => (
              <div className="product-card" key={product.id} style={{ position: 'relative' }}>
                <img src={product.imgSrc} alt={product.brand} className="product-image" />
                <div
                  onClick={() => addToWishlist(product)}
                  style={{
                    position: 'absolute',
                    bottom: '8px',
                    right: '8px',
                    cursor: 'pointer',
                    fontSize: '24px',
                    color: isInWishlist(product.id) ? 'red' : 'gray',
                    userSelect: 'none',
                  }}
                  title={isInWishlist(product.id) ? 'Added to Wishlist' : 'Add to Wishlist'}
                >
                  ♥
                </div>
                <div className="product-info">
                  <p className="tag">{product.tag}</p>
                  <h2 className="brand">{product.brand}</h2>

                  <p className="price">
                    <span className="discount">{product.discount}</span>
                    <span className="old-price">{product.oldPrice}</span>
                    <span className="new-price">{product.newPrice}</span>
                  </p>

                  <div className="rating">
                    {product.rating} <span>({product.ratingCount.toLocaleString()})</span>
                  </div>

                  <div className="buttons">
                    <button className="add-btn" onClick={() => handleAdd(product)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Sidebar - 30% width */}
        {showSidebar && (
          <div className="sidebar-container" style={{ width: '30%' }}>
            <SidebarFilter onFilter={handleFilter} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Kids;

