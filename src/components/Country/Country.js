import React from 'react';

const Country = (props) => {
    
    const {name, population, region, flag} = props.country;

    
    return (
        <div>
            <h2>This is {name}</h2>
            <img style={{width:'200px'}} src={flag} alt=""/>
            <p>Population : {population} </p>
            <p>Region : {region} </p>
            

        </div>
    );
};

export default Country;