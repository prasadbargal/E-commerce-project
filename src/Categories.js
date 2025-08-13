import React from 'react';
import './Categories.css';

import men from './images/men.jpg';
import menFootwear from './images/men-footwear.jpg';
import menAccessories from './images/men-accessories.jpg';
import westernWear from './images/western-wear.jpg';
import indianWear from './images/indian-wear.jpg';
import womenFootwear from './images/women-footwear.jpg';
import womenAccessories from './images/women-accessories.jpg';
import bags from './images/bags.jpg';
import boys from './images/boys.jpg';
import girls from './images/girls.jpg';
import home from './images/home.jpg';

export const categories = [
  { id: 'cat1', name: 'Men', img: men },
  { id: 'cat2', name: 'Men Footwear', img: menFootwear },
  { id: 'cat3', name: 'Men Accessories', img: menAccessories },
  { id: 'cat4', name: 'Western Wear', img: westernWear },
  { id: 'cat5', name: 'Indian Wear', img: indianWear },
  { id: 'cat6', name: 'Women Footwear', img: womenFootwear },
  { id: 'cat7', name: 'Women Accessories', img: womenAccessories },
  { id: 'cat8', name: 'Bags', img: bags },
  { id: 'cat9', name: 'Boys', img: boys },
  { id: 'cat10', name: 'Girls', img: girls },
  { id: 'cat11', name: 'Home', img: home },
];

const Categories = () => {
  return (
    <div className="categories-container">
      <h1>Categories</h1>
      <div className="categories-grid">
        {categories.map(category => (
          <div key={category.id} className="category-card">
            <img src={category.img} alt={category.name} className="category-image" />
            <div className="category-label">
              <span>{category.name}</span>
              <span className="dropdown-arrow">&#9660;</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
