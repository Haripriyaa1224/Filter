import React from 'react'
import { useState } from 'react';
import houseData from '../Data/data'
import './Card.css'
import Filter from './Filter';

const Card = () => {
    const [filteredData, setFilteredData] = useState(houseData);

    const handleFilter = (filters) => {
      const { priceRange, beds, baths, city } = filters;
  
      const filtered = houseData.filter((house) => {
        const [minPrice, maxPrice] = priceRange ? priceRange.split("-").map(Number) : [0, Infinity];
        return (
          (!priceRange || (house.price >= minPrice && house.price <= maxPrice)) &&
          (!beds || house.beds === parseInt(beds)) &&
          (!baths || house.baths === parseInt(baths)) &&
          (!city || house.address[2] === city)
        );
      });
  
      setFilteredData(filtered);
    };
  
    return (
      <div>
        <Filter onFilter={handleFilter} />
        <div className="card-container">
          {filteredData.map((house, index) => (
            <div className="card" key={index}>
              <img src={house.image} alt={house.title} />
              <div className="card-content">
                <h3 className="card-title">{house.title}</h3>
                <p className="card-price">Price: ${house.price}k</p>
                <p>Beds: {house.beds}, Baths: {house.baths}</p>
                <p>Size: {house.length}x{house.breadth} sq ft</p>
                <p className="card-address">
                  Address: {house.address.join(", ")}
                </p>
                <a href="#" className="card-btn">View Details</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Card