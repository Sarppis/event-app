import React from 'react';
import EventMap from './EventMap';
import {Link} from 'react-router-dom';

const Events = () => {
  return (
    <div>

    <Link to="/"> <h3> Back </h3> </Link>
    <EventMap />

    </div>

  );
};

export default Events;
