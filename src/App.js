import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from "./Components/Post"
import Postform from './Components/Postform';
import {Provider} from 'react-redux'
import store from './Components/store';

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
       
      </header>
      <Postform />
      <hr />
      <Post/>
    </div>
    </Provider>
  );
}

export default App;
