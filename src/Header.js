import React from 'react';
import balloons1 from './img/balloons1.png';


const Header = ({ title, lead }) => {
  return (
  <div>
    <header>
      { title }
    </header>
    <div className="background-image">
      <img src={ balloons1 } alt="dark" />
    </div>

  </div>
)

};

export default Header;
