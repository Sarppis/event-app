import React, { useState, useEffect }  from 'react';
import Content from './Content';
import Header from './Header';
import Buttons from './Buttons';


const App = () => {
  const [index, setIndex] = useState(0);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleClick = () => {
    setIndex(index+1);
    console.log('clicked!');
};

useEffect(() => {
  if (loading) {
    fetch('http://localhost:3030/api/events/')
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
        <Header title='HeL EVENTS'/>
        <div className='action'>
        <main>
          <Buttons onClick={handleClick} buttonTitle=<p>Sport</p> icon="basketball" />
          <Buttons onClick={handleClick} buttonTitle=<p>Music</p> icon="music" />
          <Buttons onClick={handleClick} buttonTitle=<p> Kids</p> icon="kids" />
        </main>
        <main>
          <Buttons onClick={handleClick} buttonTitle=<p>Concert</p>icon="concert" />
          <Buttons onClick={handleClick} buttonTitle=<p>Festival</p> icon="festival" />
          <Buttons onClick={handleClick} buttonTitle=<p>Teater</p> icon="teater" />
        </main>
        </div>
        <Content events={events} />
      </div>
      )}
    </React.Fragment>
  )
}

export default App;
