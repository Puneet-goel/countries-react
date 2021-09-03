import axios from "axios";

const apiUrl = "https://restcountries.eu/rest/v2/region/";

const getCountries = async(continent,changeData) => {
    try{
      let {data} = await axios.get(apiUrl + continent);
      changeData(data);
    }catch(error){
      console.log(error);
    }
}

export default getCountries;