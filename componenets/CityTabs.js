// CityTabs.js
import React from 'react';

function CityTabs(props) {

  const handleCityClick = (city) => {
    props.setActiveCity(city);
  };

  return (
    <div className="city-tabs">
      {props.cityNames.map((city) => (
        <div
          key={city}
          className={`city-tab ${props.activeCity === city ? 'active' : ''}`}
          onClick={() => handleCityClick(city)}
        >
          {city}
        </div>
      ))}
    </div>
  );
}

export default CityTabs;
