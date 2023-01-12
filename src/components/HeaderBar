import axios from 'axios';
import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';

const HeaderBar = () => {
  const [weatherData, setWeatherData] = useState([]); 
  const [city, setCity] = useState(''); 
  const [inputValue, setInputValue] = useState('');

  const weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&type=accurate&APPID=1b8f10e6dec639a10401c3ffbc2a56c3&cnt=5`;

  useEffect(() => { 
    searchCity(); 
  }, [city]); 

  const searchCity = () => { 
    axios.get(weatherAPI).then((response) => {
      setWeatherData(response.data.list); 
      console.log(response.data.list); 
      for (let i = 0; i < response.data.list.length; i++) {
        console.log(response.data.list[i].dt_txt);
        console.log(response.data.list[i].main.temp);
        console.log(response.data.list[i].main.humidity);
        console.log(response.data.list[i].main.temp_min);
        console.log(response.data.list[i].main.temp_max);
      }

      for (let i = 0; i < response.data.list.length; i++) {
        console.log(response.data.list[i].weather[0].description);
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(inputValue);
    searchCity();
  };

  return (
    <div className="HeaderBar">
      <div className="header"> 
        <h1>My Weather App</h1>  
      <div className="search">
      <SearchBar weatherData={weatherData} setCity={setCity} />
        <form onSubmit={handleSubmit}>
          <input
            value={inputValue} 
            onChange={event => setInputValue(event.target.value)}
            placeholder="Enter a city"
            type="text"/>
          <button type="submit">Get Weather</button>
        </form>
      </div>
    </div>
  </div>
  );
};

export default HeaderBar;

