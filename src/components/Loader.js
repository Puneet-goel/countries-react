import React from 'react';

function Loader({isLoading}) {
  
  if(!isLoading){
    return (<div></div>);
  }else{
    return(
      <div className="loader text-center">
        <i className="fa fa-cog fa-spin"/>
      </div>
    );
  }
}

export default Loader;