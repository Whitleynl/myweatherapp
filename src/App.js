import { useState, useEffect } from 'react';
import axios from 'axios'; 
import './index.css'; 
import MainPage from './components/MainPage';
import Results from './components/Results';
import DetailPage from './components/DetailPage';

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
        console.log(response.data.city.name);
        console.log(response.data.list[i].weather[0].description);
        console.log(response.data.list[i].main.temp_min);
        console.log(response.data.list[i].main.temp_max);
        console.log(response.data.list[i].main.humidity);
      }

      for (let i = 0; i < response.data.list.length; i++) {
        console.log(response.data.list[i].weather[0].description);
      }
    });
  };


  return (
    <div className="App">
      <MainPage weatherData={weatherData} setCity={setCity} />
       {<Results weatherData={weatherData}/>}
      <DetailPage weatherData={weatherData} />
    </div>
  );
}


export default App;



