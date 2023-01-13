import React, { useState } from 'react';

const SearchBar = ({ setCity, searchCity }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(inputValue);
    searchCity();  
};

  return (
    <div className="SearchBar">
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
          placeholder="Enter a city"
          type="text"
          />
        <button type="submit">Get Weather</button> 
      </form>
    </div>
  );
};



export default SearchBar;