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
        <Link to={`/forecast/${data.dt}`} key={index} className="Result">
          <div className="date">{formatDate(data.dt_txt)}</div>
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
