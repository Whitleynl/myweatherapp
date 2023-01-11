import React from "react";

const DetailPage = (props) => {

     if (!props.location.state) {  //
          return null;
     } 
     const {humidity, temp_min, temp_max, description, city} = props.location.state;

     return (
          <div className="DetailPage">
          <h2>formatDate(dt_txt)</h2>
          <p>City: {city}</p>
          <p>Description: {description}</p>
          <p>min temp: {temp_min}</p>
          <p>max temp: {temp_max}</p>
          <p>humidity: {humidity}</p>
          </div>

     );
};

export default DetailPage;

