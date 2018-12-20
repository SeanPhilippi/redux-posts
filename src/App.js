import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import PostForm from './components/PostForm';
// second argument is inital state, applyMiddleware() is an enhancer
// const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
