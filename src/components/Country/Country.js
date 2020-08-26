import React from 'react';

const Country = (props) => {
    
    const {name, population, region, flag} = props.country;
    const countryStyle ={border: '1px solid cyan', margin: '10px', padding: '10px'}
    const handleAddCountry = props.handleAddCountry; 
    return (
        <div style={countryStyle}>
            <h2>This is {name}</h2>
            <img style={{height:'200px'}} src={flag} alt=""/>
            <p>Population : {population} </p>
            <p>Region : {region} </p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>


        </div>
    );
};

export default Country;