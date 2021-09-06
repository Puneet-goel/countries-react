import React from 'react';

function Refresher({isRefreshing}) {
  
  if(!isRefreshing){
    return (<div></div>);
  }else{
    return(
      <div className="loader text-center">
        <i className="fa fa-refresh fa-spin"/>
      </div>
    );
  }
}

export default Refresher;