import React, {useState} from 'react';
import axios from 'axios';
import './index.css'; 


function App() { 
  // set the state for the weather data and the city
  const [weatherData, setWeatherData] = useState([]); 
  const [city, setCity] = useState('');
  const weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&type=accurate&APPID=1b8f10e6dec639a10401c3ffbc2a56c3&cnt=5`; 

  // search the city and get the weather data
  const searchCity = (event) => { 
    if(event.key === 'Enter' || event.key === 'Get Weather') {
      axios.get(weatherAPI).then((response) => {
        setWeatherData(response.data.list); 
        console.log(response.data.list);
        for (let i = 0; i < response.data.list.length; i++) {
          console.log(response.data.list[i].dt_txt);
          console.log(response.data.list[i].main.temp);
          console.log(response.data.list[i].main.humidity);
        }
        for (let i = 0; i < response.data.list.length; i++) {
          console.log(response.data.list[i].weather[0].description);
        }
      });
    }
  }

  return (
    <div className="app">
      <div className="headerBar">
        <div className="header">
          <h1>My Weather App</h1>
        </div>
          <div className="search">  
            <input
              value={city}
              onChange={event => setCity(event.target.value)}
              onKeyPress={searchCity}
              placeholder="Enter a city"
              type="text"/>  
            <button onClick={searchCity}>Get Weather</button>
          </div>
        <div className="date">
        </div>
        <div className="city">
        </div>
        <div className="description"> 
        </div>
        <div className="minTemp">
        </div>
        <div className="maxTemp">
        <div className="humidity">
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;