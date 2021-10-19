import React from "react";

const Country = ({country}) => {
  //console.log(country);
  // let border = "";
  // for(let i=0;i<country.borders.length;i++){
  //   if(i!==0){
  //     border += ', ';
  //   }
  //   border += `${country.borders[i]}`;  
  // }

  return ( 
    <div className="card grow" >
      <img src={country.flags.png} className="card-img-top" alt="flag"></img>
      <div className="card-body">
        <h3 className="card-title text-center">{country.name.common}</h3>
        <p className="card-text">Capital: </p>
        <p className="text-center">{country.capital}</p>
        <p className="card-text">Region: </p>
        <p className="text-center">{country.region}</p>
        <p className="card-text">Sub-Region: </p>
        <p className="text-center">{country.subregion}</p>
        <p className="card-text">Population: </p>
        <p className="text-center">{country.population}</p>
        {/* <p className="card-text">Border: </p> */}
        {/* <p className="text-center">{border}</p> */}
        {/* <p className="card-text">Languages:</p> 
        <p className="text-center">{country.languages[0]['name']}&nbsp;({country.languages[0]['nativeName']})</p> */}
      </div>
    </div>
  );
}

export default Country;