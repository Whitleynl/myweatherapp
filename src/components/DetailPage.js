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
          <h2>{formatDate(dt)}</h2>
          <p>City: {city}</p>
          <p>Description: {description}</p>
          <p>min temp: {temp_min.kelvinToFahrenheit()}°</p>
          <p>max temp: {temp_max.kelvinToFahrenheit()}°</p>
          <p>humidity: {humidity}%</p>
          </div>
     );
};

export default DetailPage;



