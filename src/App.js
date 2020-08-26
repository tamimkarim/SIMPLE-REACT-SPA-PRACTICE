import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() =>{ 
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())

    .then(data => {
      
      setCountries(data);
      console.log(data);
      const names = data.map(country => country.name);
      console.log(names);
    })
    .catch(error => console.log(error));
  }, [])

 
  return (
    <div className="App">
      <header className="App-header">
        <h2>Countries Number : {countries.length}</h2>
        <ul>
          <li>
              {
                countries.map(country => <li>{country.name}</li> )

              }
           </li>
        </ul>
        
        
      </header>
    </div>
  );
}

export default App;
