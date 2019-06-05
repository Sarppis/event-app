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
      <div>
        { loading || !events ? ( <div> Loading.... </div>
    ) : (
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

      )}
    </div>
  )


}

export default App;
