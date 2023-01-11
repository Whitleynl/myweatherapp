// //renders the search bar and handles form submission
// import React, {useState} from 'react';
// import axios from 'axios';
// import Results from './Results';
// import SearchBar from './SearchBar';


// function MainPage() {
//      const [city, setCity] = useState('');
//      const [weatherData, setWeatherData] = useState([]);
   
//      const searchCity = () => {
//        const weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&type=accurate&APPID=1b8f10e6dec639a10401c3ffbc2a56c3&cnt=5`;
   
//        axios.get(weatherAPI)
//          .then(response => {
//            setWeatherData(response.data.list);
//          });
//      }

// function formatDate(dateTimeString) {
//     const date = new Date(dateTimeString);
//     const options = { weekday: 'long', month: 'short', day: 'numeric' };
//     return date.toLocaleDateString('en-US', options);
//      }
   
//      return (
//        <div className="main-page">
//          <SearchBar city={city} setCity={setCity} searchCity={searchCity} />
//          <Results weatherData={weatherData} formatDate={formatDate}/>
//        </div>
//      );
//    }


// export default MainPage;

//renders the search bar and handles form submission
import React, {useState} from 'react';
import axios from 'axios';
import Results from './Results';
import SearchBar from './SearchBar';


function MainPage() {
     const [city, setCity] = useState('');
     const [weatherData, setWeatherData] = useState([]);
   
     const searchCity = () => {
       const weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&type=accurate&APPID=1b8f10e6dec639a10401c3ffbc2a56c3&cnt=5`;
   
       axios.get(weatherAPI)
         .then(response => {
           setWeatherData(response.data.list);
         });
     }

function formatDate(dateTimeString) {
      const date = new Date(dateTimeString);
     const options = { weekday: 'long', month: 'short', day: 'numeric' };
     return date.toLocaleDateString('en-US', options);
     }
   
     return (
       <div className="main-page">
         <SearchBar city={city} setCity={setCity} searchCity={searchCity} />
         <Results weatherData={weatherData} formatDate={formatDate}/>
       </div>
     );
   }


export default MainPage;   
   