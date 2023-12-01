import React from 'react'

const CityDropDown = ({ selectedCity, handleCityChange }) => {
  const cities = [
    'Calgary',
    'Halifax',
    'Montreal',
    'Regina',
    'Toronto',
    'Vancouver',
    'Winnipeg'
  ];

  return (
    <div>
    <h3>Select City</h3>
    <select value={selectedCity} onChange={e => handleCityChange(e.target.value)}>
      {cities.map(city => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
    </div>
  );
};

export default CityDropDown