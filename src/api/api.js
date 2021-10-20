import axios from "axios";

const apiUrl = "https://restcountries.com/v3.1/region/";

const comparator = (a,b) => {
  if(a.name.common < b.name.common){
    return -1;
  }
  if(a.name.common > b.name.common){
    return 1;
  }
  return 0;
}

const getCountries = async(continent,changeData) => {
    try{
      let {data} = await axios.get(apiUrl + continent);
      data.sort(comparator);
      changeData(data);
    }catch(error){
      console.log(error);
    }
}

export default getCountries;