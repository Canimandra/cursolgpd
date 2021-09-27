import React from 'react';

function Loader() {
  return (
    <div className="loader loader-center">
      <i className="fa fa-cog fa-spin" />
      <br/>
      <p className="loader-text">Espere um momento...</p>
      
    </div>
  );
}

export default Loader;
