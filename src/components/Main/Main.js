import React,{ useState,useEffect } from 'react';
import getCountries from "../../api/api";
import Country from "./Country";
import Refresher from "./Refresher";
import './styles.css';

const Main = () => {

  const [cont,setCont] = useState('Asia');
  const [data,setData] = useState([]);
  const [refreshing,setRefreshing] = useState(false);
  const changeData = (curData) => (setData(curData))

  useEffect(()=>{
    getCountries(cont,changeData);
  },[cont,refreshing]);

  const refresh = (event) => {
    event.preventDefault();
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }

  const changeCont = (event) => {
    event.preventDefault();
    let curCont = event.target.innerHTML.toLowerCase();
    setCont(curCont);
  }

  return (
    <div className="back">
      <nav className="navbar navbar-dark px-5 py-3 header">
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle box" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Select a Continent
          </button>
          <ul className="dropdown-menu header" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" href="/" onClick={changeCont}>Africa</a></li>
            <li><a className="dropdown-item" href="/" onClick={changeCont}>Asia</a></li>
            <li><a className="dropdown-item" href="/" onClick={changeCont}>Americas</a></li>
            <li><a className="dropdown-item" href="/" onClick={changeCont}>Europe</a></li>
            <li><a className="dropdown-item" href="/" onClick={changeCont}>Oceania</a></li>
          </ul>
        </div>
        <button className="btn btn-success my-2 my-sm-0 box" onClick={refresh}>
          Refresh
        </button>
      </nav>
      
      {
        (refreshing)?
        <Refresher isRefreshing={refreshing}/>:
        (
          <>
            <h1 className="text-center pt-3">{cont.toUpperCase()}</h1>
            <div className="container p-5">
              <div className="row">
                {
                  data.map((cur,index) => (
                    <div className="col-sm-6 col-md-4 mb-5" key={index} >
                      <Country country={cur}/>
                    </div>
                  ))
                }
              </div>
            </div>
          </>
        ) 
      }

    </div>
  );
}
  
export default Main;