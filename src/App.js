import React, { useState }  from 'react';
import Content from './Content';
import Header from './Header';
import Buttons from './Buttons';

const App = () => {
  const [index, setIndex] = useState(0)
  const handleClick = () => {
    setIndex(index+1);
    console.log('clicked!');
}
  return (
    <div className="App">
    <Header />
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
}

export default App;
