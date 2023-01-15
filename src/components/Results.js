import React from 'react';
import { Link } from 'react-router-dom';

const Results = (props) => {
  if (!props.weatherData) {
    return null;
  }

const WeatherIcon = ({ name }) => {
    return <img src={require(`../Assets/weather-icons/${name}`)} alt={name}
    className='weather-icon' />;
}



function formatDate(dateTimeString) {
     const date = new Date(dateTimeString);
     const options = { weekday: 'long', month: 'short', day: 'numeric' };
     return date.toLocaleDateString('en-US', options);
   }

const getWeatherIcon = (description) => {
  switch (description) {
    case 'clear sky':
      return <WeatherIcon name="sunny.svg" />;
    case 'few clouds':
      return <WeatherIcon name="fewclouds.svg" />;
    case 'scattered clouds':
      return <WeatherIcon name="morecloudy.svg" />;
    case 'broken clouds':
      return <WeatherIcon name="morecloudy.svg" />;
    case 'shower rain':
      return <WeatherIcon name="rainy.svg" />;
    case 'rain':
      return <WeatherIcon name="rainy.svg" />;
    case 'thunderstorm':
      return <WeatherIcon name="storm.svg" />;
    case 'clouds':
      return <WeatherIcon name="cloudy.svg" />;
    case 'moderate rain':
      return <WeatherIcon name="rain.svg" />;
    case 'light rain':
      return <WeatherIcon name="rain.svg" />;
    case 'overcast clouds':
      return <WeatherIcon name="morecloudy.svg" />;
  }
}

Number.prototype.kelvinToFahrenheit = function() {
  return Math.round((this - 273.15) * 9/5 + 32);
}

   return (
    <div className="Results">
      {props.weatherData.map((data, index) => (
          <Link 
            key={index} 
            className="Result" 
            to={`./DetailPage/${data.dt}`}
            state={{ 
                city: props.city,
                dt: data.dt_txt,
                humidity: data.main.humidity,
                temp_min: data.main.temp_min,
                temp_max: data.main.temp_max,
                description: data.weather[0].description,
            }}>
            <h1 className="city">{props.city}</h1> 
            <div><h2 className="date">{formatDate(data.dt_txt)}</h2></div>
            <div className="weather-icon">{getWeatherIcon(data.weather[0].description)}</div>
          </Link>
      ))}
    </div>
);
};

export default Results;