import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState();  
  const [location, setLocation] = useState(''); 
  const [lat, setLat] = useState(0);
  const [lon, setLong] = useState(0);

  const geoCodingAPI = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=1b8f10e6dec639a10401c3ffbc2a56c3`
  //const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=1b8f10e6dec639a10401c3ffbc2a56c3`;
  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&type=accurate&appid=1b8f10e6dec639a10401c3ffbc2a56c3&cnt=5`; 




  
  const searchLocation = (event) => {  
    if(event.key === 'Enter') {
    axios.get(geoCodingAPI).then((res) => {
      const geoData = res.data[0]; 
      // setData(geoData);
      // console.log(geoData); 
      
      setLat(geoData.lat); 
      setLong(geoData.lon); 
      console.log('Lat is: ' + lat);
      console.log('long is: ' + lon);
    }); 
  
  };
}



// const geocodeLocation = (event) => {


// }

return ( 
  <div className="app">

    {/* SEARCH COMPONENT */}
    <div className="search-container">
        <h1>My Weather App</h1>
        <div className='search'>
          <input 
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter a location"
            type="text"/>
        </div>
    </div>

    {/* RESULTS COMPONENT */}
    {/* {data && (
      <div className="location">
        <p>{data.city.name}</p> 
      </div>
    )} */}
  </div>


  );
}



export default App;



