import React from 'react';
import balloons from './img/balloons.png';
<<<<<<< HEAD


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

=======


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

>>>>>>> origin/header
};

export default Header;
