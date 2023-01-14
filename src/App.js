import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Results from './components/Results';
import DetailPage from './components/DetailPage';
import HeaderBar from './components/HeaderBar';

function App() {
  // set the state for the weather data and the city
  const [weatherData, setWeatherData] = useState([]); 
  const [city, setCity] = useState(''); 
  const weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&type=accurate&APPID=1b8f10e6dec639a10401c3ffbc2a56c3&cnt=5`;
  
  useEffect(() => { 
    searchCity(); 
  }, [weatherAPI, setWeatherData]); 

  const searchCity = () => { 
    axios.get(weatherAPI).then((response) => {
      setWeatherData(response.data.list); 
    });
  };


  return (
    <div className="App">
      <div className='header'>
        <HeaderBar setCity={setCity} searchCity={searchCity} />
      </div>
      {/* <MainPage weatherData={weatherData} setCity={setCity} searchCity={searchCity} /> */}
      <Results weatherData={weatherData} setCity={setCity} city={city} searchCity={searchCity} />
      <DetailPage setCity={setCity} weatherData={weatherData} />
    </div>
  );
}


export default App;


