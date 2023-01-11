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

   return (
    <div className="Results">
      {props.weatherData.map((data, index) => (
          <Link 
            key={index} 
            className="Result"
            to={{ 
              pathname: `./DetailPage/${data.dt}`, 
              state: {
                humidity: data.main.humidity,
                temp_min: data.main.temp_min,
                temp_max: data.main.temp_max,
                description: data.weather[0].description,
                city: props.city
              }
            }} 
          >
            <div className="date">{props.formatDate(data.dt_txt)}</div>
            <div className="description">{data.weather[0].description}</div>
            <div className="temp">Temp: {data.main.temp}</div>
            <div className="humidity">Humidity: {data.main.humidity}</div>
            <div className="temp_min">Min Temp: {data.main.temp_min}</div>
            <div className="temp_max">Max Temp: {data.main.temp_max}</div>
          </Link>
      ))}
    </div>
);
};

export default Results;
