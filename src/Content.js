import React from 'react';
import EventMap from './EventMap';


const Content = ({ events }) => {
  console.log(events);
  return (
    <React.Fragment>
      { events.map(( item, index ) => {
        const dateString = item.event_dates.starting_day;
        const currentTime = new Date(dateString);
        const month = currentTime.getMonth() + 1;
        const day = currentTime.getDate();
        const year = currentTime.getFullYear();
        //const hour = currentTime.getHours();
        //const min = currentTime.getMinutes();
        var date = day + "." + month + "." + year;

        return (
          <div key = { index }>
            <img className='event-image' src={ item.description.images.length > 0 ? item.description.images[0].url : 'img/event.png' } alt='event' />
            <div className='date'> { date } </div>
            <div className='name'> { item.name.fi } </div>
            <div className='address'> { item.location.address.street_address }, { item.location.address.locality} </div>
            
          </div>
        )
      })}
    </React.Fragment>
  );
};


export default Content;
