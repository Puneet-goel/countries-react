import React from "react";

const Country = ({country}) => {

  const language = Object.entries(country.languages[0]).map((entry) => {
    const [key, value] = entry;

    if(key!=='name' && key!=="nativeName")
      return (<p></p>);
    return (<p>{key}: &nbsp;{value}</p>);
  });

  let border = "";
  for(let i=0;i<country.borders.length;i++){
    if(i!==0){
      border += ', ';
    }
    border += `${country.borders[i]}`;  
  }

  
  return ( 
    <div className="card grow" >
      <img src={country.flag} className="card-img-top" alt="flag"></img>
      <div className="card-body">
        <h3 className="card-title text-center">{country.name}</h3>
        <p className="card-text">Capital: {country.capital}</p>
        <p className="card-text">Region: {country.region}</p>
        <p className="card-text">Sub-Region: {country.subregion}</p>
        <p className="card-text">Population: {country.population}</p>
        <p className="card-text">Border: </p>
        <p className="text-center">{border}</p>
        <p className="card-text">Languages:</p> 
        <p className="text-center">{language}</p>
      </div>
    </div>
  );
}

export default Country;