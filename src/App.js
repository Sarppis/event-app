import React, { useState, useEffect }  from 'react';
import Content from './Content';
import Header from './Header';
import Buttons from './Buttons';
import EventMap from './Components/EventMap';
const App = () => {
  const [index, setIndex] = useState(0)
  const [data, setData] = useState([])
  const handleClick = () => {
    setIndex(index+1);
    console.log('clicked!');
}

useEffect(() => {
const getEvents = () => {
  fetch('http://localhost:3030/events/?language_filter=en&limit=400')
.then(function(response) {
 return response.json();
})
.then(function(myJson) {
 console.log(JSON.stringify(myJson));
});
}}, [])

  return (
    <div className="App">
  <Header title='HeL EVENTS' />
    <main>
    <Buttons onClick={handleClick} icon="basketball" />
    <Buttons onClick={handleClick} icon="music" />
      </main>   <main>
    <Buttons onClick={handleClick} icon="kids" />
    <Buttons onClick={handleClick} icon="concert" />
    </main>   <main>
      <Buttons onClick={handleClick} icon="festival" />
    <Buttons onClick={handleClick} icon="teater" />
    </main>
    <Content />
<EventMap />
    </div>
  );
}

export default App;
