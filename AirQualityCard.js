import React from 'react';

const getCardColor = (aqi) => {
  if (aqi <= 50) {
    return 'bg-success text-white';
  } else if (aqi <= 100) {
    return 'bg-warning';
  } else if (aqi <= 150) {
    return 'bg-orange';
  } else if (aqi <= 200) {
    return 'bg-danger text-white';
  } else if (aqi <= 300) {
    return 'bg-very-unhealthy text-white';
  } else {
    return 'bg-hazardous ';
  }
}

const AirQualityCard = ({ data }) => {
  const { aqi, city, dominentpol, time } = data;
  const cardColor = getCardColor(aqi);

  return (
    <div id='main'>
    <div className={`card mb-4 ${cardColor}`}>
      <div className="card-body">
        <h5 className="card-title"style={{color: 'black'}}>{city.name}</h5>
        <h4 className="card-subtitle mb-2 "  style={{color: 'black'}}>Air Quality Index: {aqi}</h4>
        <p className="card-text"  style={{color: 'black'}}>Dominant Pollutant: {dominentpol}</p>
        <p className="card-text"  style={{color: 'black'}}>Last Updated: {time.s}</p>
      </div>
    </div>
    </div>
  );
};

export default AirQualityCard;