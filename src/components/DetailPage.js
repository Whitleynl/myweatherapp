import React from "react";
import { useLocation } from "react-router-dom"

const DetailPage = () => {
     const location = useLocation();
     console.log(location);
     if (!location?.state) {  
          return null;
     } 
     const {dt, humidity, temp_min, temp_max, description, city} = location?.state; 

     function formatDate(dateTimeString) {
          const date = new Date(dateTimeString);
          const options = { weekday: 'long', month: 'short', day: 'numeric' };
     return date.toLocaleDateString('en-US', options);
     }

     Number.prototype.kelvinToFahrenheit = function() {
          return Math.round((this - 273.15) * 9/5 + 32); 
     }
     
     return (
     <div className="DetailPage">
          <h1>{formatDate(dt)}</h1> 
          <div className="data-container">
          <h3>City: {city}</h3>
          <h3>Description: {description}</h3>
          <h3>Min temp: {temp_min.kelvinToFahrenheit()}°</h3>
          <h3>Max temp: {temp_max.kelvinToFahrenheit()}°</h3>
          <h3>Humidity: {humidity}%</h3>
          </div>
     </div>
     );
};

export default DetailPage;


