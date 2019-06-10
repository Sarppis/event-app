import React from 'react';
import balloons from './img/balloons.png';


const Header = ({ title, lead }) => {
  return (
  <div>
    <header>
      { title }
    </header>
    <div className="background-image">
      <img src={ balloons } alt="dark" />
    </div>
    { lead }
  </div>
)

};

export default Header;
