import React, {useState} from 'react';
import SearchBar from './SearchBar';

const HeaderBar = ({searchCity}) => {
  const [weatherData, setWeatherData] = useState([]); 
  const [city, setCity] = useState(''); 
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(inputValue);
    searchCity();
  };

  return (
    <div className="header-bar">
      <h1>My Weather App</h1>  
        <div className="search">
          <SearchBar weatherData={weatherData} setCity={setCity} searchCity={searchCity}/>
        </div>
    </div>
  );
};

export default HeaderBar;

