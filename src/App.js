import { useState, useEffect } from 'react';
import axios from 'axios'; 
import './index.css'; 

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

  const HeaderBar = () => {
    const [inputValue, setInputValue] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setCity(inputValue);
      searchCity();
    };
  
    return (
      <div className="HeaderBar">
        <div className="header"> 
          <h1>My Weather App</h1>
        </div>
        <div className="search">
          <form onSubmit={handleSubmit}>
            <input
              value={inputValue} 
              onChange={event => setInputValue(event.target.value)}
              placeholder="Enter a city"
              type="text"/>
            <button type="button" onClick=
            {handleSubmit}>Get Weather</button>
          </form>
        </div>
      </div>
    );
  };

  const Results = (props) => {
    if (!props.weatherData) {
      return null;
    }
    return (
      <div className="Results">
        {props.weatherData.map((data, index) => (
          <div key={index} className="Result">
            <div className="date">{data.dt_txt}</div>
            <div className="description">{data.weather[0].description}</div>
            <div className="temp">Temp: {data.main.temp}</div>
            <div className="humidity">Humidity: {data.main.humidity}</div>
            <div className="temp_min">Min Temp: {data.main.temp_min}</div>
            <div className="temp_max">Max Temp: {data.main.temp_max}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      <HeaderBar city={city} setCity={setCity} /> 
      <Results weatherData={weatherData} /> 
    </div>
  );
}


export default App;



