import React from 'react';
import balloons from './img/balloons.png';


const Header = ({ title }) => {
  return (
  <div>
    <header>
      { title }
    </header>
    <div className="image">
      <img src={ balloons } alt="dark" />
    </div>
  </div>
)

};

export default Header;
