import React from 'react';
import SearchBar from './SearchBar';

const HeaderBar = ({ setCity, searchCity }) => {
  return (
    <div className="header-bar">
      <h1>My Weather App</h1>  
        <div className="search">
          <SearchBar setCity={setCity} searchCity={searchCity} />
        </div>
    </div>
  );
};

export default HeaderBar;
