import React from 'react';
import { Link } from 'react-router-dom';

const Results = (props) => {
  if (!props.weatherData) {
    return null;
  }

function formatDate(dateTimeString) {
     const date = new Date(dateTimeString);
     const options = { weekday: 'long', month: 'short', day: 'numeric' };
     return date.toLocaleDateString('en-US', options);
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
                date: data.dt,
                humidity: data.main.humidity,
                temp_min: data.main.temp_min,
                temp_max: data.main.temp_max,
                description: data.weather[0].description,
            }}> 
            <h1 className="city">{props.city}</h1>
            <img src="../Assets/weather-icons/10d.svg" alt="icon" />
                       
            <div className="date">{formatDate(data.dt_txt)}</div>
          </Link>
      ))}
    </div>
);
};

export default Results;