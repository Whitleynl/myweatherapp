import React, { useState } from 'react';
import Results from './Results'; 
import SearchBar from './SearchBar';

function MainPage({ setCity, searchCity }) {
  const [weatherData, setWeatherData] = useState([]);

  function formatDate(dateTimeString) {
    const date = new Date(dateTimeString);
    const options = { weekday: 'long', month: 'short', day: 'numeric'};
    return date.toLocaleDateString('en-US', options);
  }

  return (
    <div className="main-page"> 
      <SearchBar searchCity={searchCity} setCity={setCity}  weatherData={weatherData} />
      <Results setCity={setCity} weatherData={weatherData} formatDate={formatDate}/> 
    </div>
  );
}

export default MainPage; 