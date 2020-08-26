import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() =>{ 
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error));
  }, [])

  const handleAddCountry = (country) => {
    console.log("Added", country)}
 
  return (
    <div className="App">
      <header className="App-header">
        <h2>Countries Number : {countries.length}</h2>
        <h4>Country Addeded : </h4>
 
              {
                countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country> )
              }

      </header>
    </div>
  );
}

export default App;
