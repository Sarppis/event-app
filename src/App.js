import React, { useState, useEffect }  from 'react';
import Content from './Content';
import Header from './Header';
import Buttons from './Buttons';

const App = () => {
<<<<<<< HEAD
  const [index, setIndex] = useState(0)
  const [data, setData] = useState([])
  const handleClick = () => {
    setIndex(index+1);
    console.log('clicked!');
}

useEffect(() => {
const getEvents = () => {
  fetch('http://localhost:3030/events/?language_filter=en&limit=100')
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
    </div>
  );
=======
  const [index, setIndex] = useState(0);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleClick = () => {
    setIndex(index+1);
    console.log('clicked!');
};

useEffect(() => {
  if (loading) {
    fetch('http://localhost:3030/')
    .then(res => res.json())
    .then((myData) => {
      setLoading(false);
      setEvents(myData.data);

      console.log(typeof(myData.data))
    })

    .catch(console.log)

  }})


    return (
      <React.Fragment>
        { loading || !events ? ( <div> Loading.... </div>
      ) : (
      <div className="App">
        <Header title='HeL EVENTS' lead='What is happening here summer 2019' />
        <main>
          <Buttons onClick={handleClick} buttonTitle='Sport' icon="basketball" />
          <Buttons onClick={handleClick} buttonTitle='Music' icon="music" />
        </main>
        <main>
          <Buttons onClick={handleClick} buttonTitle='Kids' icon="kids" />
          <Buttons onClick={handleClick} buttonTitle='Concert' icon="concert" />
        </main>
        <main>
          <Buttons onClick={handleClick} buttonTitle='Festival' icon="festival" />
          <Buttons onClick={handleClick} buttonTitle='Teater' icon="teater" />
        </main>
        <Content events={events} />
      </div>
      )}
    </React.Fragment>
  )
>>>>>>> origin/header
}

export default App;
