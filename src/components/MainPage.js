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
      <HeaderBar searchCity={searchCity} setCity={setCity}/>
      <Results weatherData={weatherData} formatDate={formatDate}/> 
    </div>
  );
}

export default MainPage; 
