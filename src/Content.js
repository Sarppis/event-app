import React from 'react';

const Content = ({ images , name , event_dates , address , description }) => {
  return (
    <main>
    <div className="events">
      <img className='card-image' src={ images } alt='event_photo' />
      <h2 className='name'>{ name }</h2>
      <h2 className='event_dates'>{ event_dates }</h2>
      <p className='address'>{ address }</p>
      <p className='description'>{ description }</p>
    </div>
    </main>
  );
};

export default Content;
