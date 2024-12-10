import React, { useState } from "react";

const Filter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    priceRange: "",
    beds: "",
    baths: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    onFilter(filters);
  };

  return (
    <div className="filter-container">
      <h3>Filter Houses</h3>

      <div className="filter-item">
        <label>Price Range:</label>
        <select name="priceRange" value={filters.priceRange} onChange={handleChange}>
          <option value="">All</option>
          <option value="0-300">0-300k</option>
          <option value="301-600">301-600k</option>
          <option value="601-1000">601-1000k</option>
        </select>
      </div>

      <div className="filter-item">
        <label>Beds:</label>
        <select name="beds" value={filters.beds} onChange={handleChange}>
          <option value="">All</option>
          <option value="2">2 Beds</option>
          <option value="3">3 Beds</option>
          <option value="4">4 Beds</option>
          <option value="5">5 Beds</option>
        </select>
      </div>

      <div className="filter-item">
        <label>Baths:</label>
        <select name="baths" value={filters.baths} onChange={handleChange}>
          <option value="">All</option>
          <option value="1">1 Bath</option>
          <option value="2">2 Baths</option>
          <option value="3">3 Baths</option>
        </select>
      </div>

      <div className="filter-item">
        <label>City:</label>
        <select name="city" value={filters.city} onChange={handleChange}>
          <option value="">All</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Pune">Pune</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Chennai">Chennai</option>
        </select>
      </div>

      <button onClick={applyFilters} className="filter-btn">Submit</button>
    </div>
  );
};

export default Filter;
