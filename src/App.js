import React from 'react';
import './App.css';
import Counter from './Counter/Counter';

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter
          count={1}
          onIncrement={() => console.log('increment')}
          onDecrement={() => console.log('decrement')}
        />
      </div>
    );
  }
}

export default App;
