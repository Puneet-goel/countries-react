import React from "react";

const Country = ({country}) => {

  //in case there are no borders then []
  let border = (country.borders || []).join(', ');
  let currency = country.currencies[Object.keys(country.currencies)[0]];

  return ( 
    <div className="card grow" >
      <img src={country.flags.png} className="card-img-top" alt="flag"></img>
      <div className="card-body">
        <h3 className="card-title text-center fw-bold">{country.name.common}</h3>
        <p className="card-text fst-italic fw-light">Capital: </p>
        <p className="text-center">{country.capital}</p>
        <p className="card-text fst-italic fw-light">Currency: </p> 
        <p className="text-center">{currency.name} ( {currency.symbol} )</p> 
        <p className="card-text fst-italic fw-light">Sub-Region: </p>
        <p className="text-center">{country.subregion}</p>
        <p className="card-text fst-italic fw-light">Population: </p>
        <p className="text-center">{country.population}</p>
        {
          (border === '')?<div />:
          <div>
            <p className="card-text fst-italic fw-light">Border: </p>
            <p className="text-center">{border}</p>
          </div>
        }
        {
          (!country.independent)?<div />:
          <p className="text-center fst-italic fw-bold">Independent</p>
        }
        
      </div>
    </div>
  );
}

export default Country;