import React from 'react';

const Buttons = ({ icon, onClick }) => {
  return (
  <div className={icon}  onClick={onClick}>
  </div>
  );
};

export default Buttons;
