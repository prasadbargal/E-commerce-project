import React, { useState } from 'react';
import './SidebarFilter.css';

const priceRanges = [
  { label: 'All', value: 'all' },
  { label: 'Rs0.00 - Rs750.00', value: '0-750' },
  { label: 'Rs750.00 - Rs1,500.00', value: '750-1500' },
  { label: 'Rs1,500.00 - Rs2,250.00', value: '1500-2250' },
  { label: 'Rs2,250.00 - Rs3,000.00', value: '2250-3000' },
];

const sizes = [
  '1-2 Years', '1-years', '10-11 Years', '11-12 Years', '12-13 Years', '12-18 Months', '13-14 Years',
  '14-15 Years', '15-16 Years', '2-3 Years', '2-years', '2xl', '3-4 Years', '3XL', '4-5 Years', '4XL',
  '5-6 Years', '5XL', '6-7 Years', '8XL', '7-8 Years', '8-9 Years', '9-10 Years', 'Double XL(2XL)',
  'Extra Large', 'Large', 'Medium', 'Small'
];

const SidebarFilter = ({ onFilter }) => {
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleSizeChange = (size) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const handleFilter = () => {
    onFilter({
      price: selectedPrice,
      sizes: selectedSizes,
    });
  };

  const handleReset = () => {
    setSelectedPrice('all');
    setSelectedSizes([]);
    onFilter({
      price: 'all',
      sizes: [],
    });
  };

  return (
    <div className="sidebar-filter">
      <div className="filter-header">
        <h3>Filters</h3>
        <button className="reset-button" onClick={handleReset}>Reset</button>
      </div>
      
      <div className="price-filter">
        <h4>PRICE FILTER</h4>
        <ul>
          {priceRanges.map(range => (
            <li key={range.value}>
              <button
                className={selectedPrice === range.value ? 'active' : ''}
                onClick={() => setSelectedPrice(range.value)}
              >
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="filter-by-checkboxes">
        <h4>FILTER BY SIZE</h4>
        <div className="size-checkboxes">
          {sizes.map(size => (
            <label key={size} className="size-label">
              <input
                type="checkbox"
                checked={selectedSizes.includes(size)}
                onChange={() => handleSizeChange(size)}
              />
              {size}
            </label>
          ))}
        </div>
      </div>

      <button className="filter-button" onClick={handleFilter}>APPLY FILTERS</button>
    </div>
  );
};

export default SidebarFilter;
