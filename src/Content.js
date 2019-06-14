import React from 'react';
import EventMap from './EventMap';


const Content = ({ events }) => {
  console.log(events);
  return (
    <React.Fragment>
      { events.map(( item, index ) => {
        return (
          <div key = { index }>
            <img className='event-image' src={ item.description.images.length > 0 ? item.description.images[0].url : null } alt='event' />
            <div className='name'> { item.name.fi } </div>
            <div className='date'> { item.event_dates.starting_day } </div>
            <div className='address'> { item.location.address.street_address }, { item.location.address.locality} </div>
            
          </div>
        )
      })}
    </React.Fragment>
  );
};


export default Content;
