import React, { useState } from 'react';
import data from './data';
import CardList from './componets/CardList';

import './App.css';
import Counter from './componets/Counter';

const App = () => {
  
  const [count, setCount] = useState(0);

  const increase = () => {
    const newCount = count + 1;
    setCount(newCount);
  }

    return (
      <div className="App">
        <h1>Yo</h1>
        <CardList {...data} />
        <Counter count={count} onClick={increase}/>
      </div>
    );
}

export default App;
