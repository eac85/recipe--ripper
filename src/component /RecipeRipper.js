import React from 'react';
//import '../css/fonts.css';
//import '../css/index.css';

function RecipeRipper() {
  const loadApp = () => {
    window.location.href = './app';
  };

  return (
    <div>
      <h1>RECIPE RIPPER</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }} id="page">
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
          <button className="button-56" role="button" onClick={loadApp}>start</button>
        </div>
      </div>
    </div>
  );
}

export default RecipeRipper;