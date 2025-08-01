import React, { useState } from 'react';

const productsData = {
  mensSolidCasualShirt: {
    id: 'mensSolidCasualShirt',
    name: 'Mens Solid Casual Shirt',
    brand: 'ROADSTER',
    rating: 4.2,
    ratingCount: 56,
    price: 790,
    originalPrice: 1699,
    discountPercent: 56,
    images: [
      '/images/mens-shirt1.jpg',
      '/images/mens-shirt2.jpg',
      '/images/mens-shirt3.jpg',
      '/images/mens-shirt4.jpg',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'A comfortable and stylish casual shirt perfect for everyday wear.',
  },
  daevishDress: {
    id: 'daevishDress',
    name: 'Solid Fit and Flare Dress',
    brand: 'DAEVISH',
    rating: 3.8,
    ratingCount: 943,
    price: 522,
    originalPrice: 1799,
    discountPercent: 71,
    images: [
      '/images/daevish1.jpg',
      '/images/daevish2.jpg',
      '/images/daevish3.jpg',
      '/images/daevish4.jpg',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Elegant solid fit and flare dress with intricate detailing.',
  },
};

const ProductDetails = ({ productId }) => {
  const product = productsData[productId];
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleAddToBag = () => {
    if (!selectedSize) {
      alert('Please select a size before adding to bag.');
      return;
    }
    // Add to cart logic here
    alert(`Added ${product.name} (Size: ${selectedSize}) to bag.`);
  };

  return (
    <div className="product-details-container">
      <div className="image-gallery">
        <div className="main-image">
          <img src={selectedImage} alt={product.name} />
        </div>
        <div className="thumbnail-list">
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${product.name} ${idx + 1}`}
              className={img === selectedImage ? 'thumbnail selected' : 'thumbnail'}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>
      <div className="product-info">
        <h2>{product.brand}</h2>
        <h3>{product.name}</h3>
        <div className="rating">
          <span>{product.rating} ★</span>
          <span>({product.ratingCount} Ratings)</span>
        </div>
        <div className="price">
          <span className="current-price">₹{product.price}</span>
          <span className="original-price">₹{product.originalPrice}</span>
          <span className="discount">({product.discountPercent}% OFF)</span>
        </div>
        <div className="size-selector">
          <p>Select Size</p>
          <div className="sizes">
            {product.sizes.map((size) => (
              <button
                key={size}
                className={selectedSize === size ? 'size selected' : 'size'}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <button className="add-to-bag" onClick={handleAddToBag}>
          ADD TO BAG
        </button>
        <button className="product-details-toggle" onClick={() => setShowDetails(!showDetails)}>
          PRODUCT DETAILS
        </button>
        {showDetails && <p className="product-description">{product.description}</p>}
      </div>
    </div>
  );
};

export default ProductDetails;
