import React from 'react';
import { Roller } from 'react-awesome-spinners'

function Refresher({isRefreshing}) {
  
  if(!isRefreshing){
    return (<div></div>);
  }else{
    return(
      <div className="loader text-center ">
        <Roller />
      </div>
    );
  }
}

export default Refresher;