import React, { useState } from 'react';
import HeaderBar from './HeaderBar';
import Results from './Results'; 

function MainPage({searchCity}) {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState([]);

  function formatDate(dateTimeString) {
    const date = new Date(dateTimeString);
    const options = { weekday: 'long', month: 'short', day: 'numeric'};
    return date.toLocaleDateString('en-US', options);
  }

  return (
    <div className="main-page"> 
      <Results weatherData={weatherData} formatDate={formatDate}/> 
      <HeaderBar searchCity={searchCity} setCity={setCity} setWeatherData={setWeatherData} city={city}/>
    </div>
  );
}

export default MainPage; 
