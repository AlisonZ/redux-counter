import React from 'react';
import {Provider} from 'react-redux';
import './App.css';
import Counter from './Counter/Counter';

import store from './Counter/store';

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Counter />
        </Provider>
      </div>
    );
  }
}

export default App;
