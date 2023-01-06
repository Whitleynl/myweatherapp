import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() { 

  // const [data, setData] = useState();  
  // const [location, setLocation] = useState(''); 
  // const [lat, setLat] = useState(0);
  // const [lon, setLong] = useState(0);

  const [weatherData, setWeatherData] = useState([]); 
  const [city, setCity] = useState('');
  const [error, setError] = useState();
  

  
  async function getWeatherData() {
    try {
      setError();
      setWeatherData([]);
      // const geoCodingAPI = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=1b8f10e6dec639a10401c3ffbc2a56c3`
      //const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=1b8f10e6dec639a10401c3ffbc2a56c3`;
      // const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&type=accurate&appid=1b8f10e6dec639a10401c3ffbc2a56c3&cnt=5`; 

      //get long & lat based on city the user inputs
      let response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=1b8f10e6dec639a10401c3ffbc2a56c3`);
      const lat = response.data[0].lat;
      const long = response.data[0].lon;

      // make weather api call
      const weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&cnt=5&appid=https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&cnt=5&appid=88bad94d4996fa813e2a40d794f02155`);
      setWeatherData(weatherData.data.list);
    } catch(e) {
      console.log(e)
      setError(e);
    }
  }

  
//   const searchLocation = (event) => {  
//     if(event.key === 'Enter') {
//     axios.get(geoCodingAPI).then((res) => {
//       setData(res.data);
//       console.log(res.data); 
      
//     }); 
  
//   };
// }



// const geocodeLocation = (event) => {


// }

return ( 
  <div className="app">

    {/* SEARCH COMPONENT */}
    <div className="search-container">
        <h1>My Weather App</h1>
        <div className='search'>
          {/* <input 
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter a location"
            type="text"/> */}
            <input
              onChange={event => setCity(event.target.value)} />
            <button onClick={getWeatherData}>Search</button>
        </div>
    </div>

    {/* RESULTS COMPONENT */}
    {/* {data && (
      <div className="location">
        <p>{data.city.name}</p> 
      </div>
    )} */}

    {weatherData.map((setWeatherData, index) => 
      <div className="weather-container">
        Current Weather: {weatherData.main.temp}
      </div>
    )}
  </div>


  );
}



export default App;



