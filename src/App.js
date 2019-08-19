import React from 'react';

import Counter from './components/Counter.component'
import store from './redux/store'
import './App.css';

const action = type => store.dispatch({ type })

function App() {
  console.log(store.getState())
  return (
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
    />
  );
}

export default App;
