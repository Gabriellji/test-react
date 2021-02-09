import React, { Component, useState } from 'react';
import data from './data';
import CardList from './componets/CardList';

import './App.css';
import Counter from './componets/Counter';


const App = () => {

  // state with hooks
  const [count, setCount] = useState(0);
  // fn that we need to pas to onClick property
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



////// CLASS component

// class App extends Component {

//   state = {
//     count: 0
//   }

//   increase = () => {
//     const newState = this.state.count + 1;
//     this.setState({ count: newState })
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Yo</h1>
//         <CardList {...data} />
//         <Counter count={this.state.count} onClick={this.increase}/>
//       </div>
//     );
//   }
// }

export default App;
