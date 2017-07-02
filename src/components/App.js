import React from 'react'
import logo from '../logo.svg';
import './App.css';
import AddMessage from '../containers/AddMessage'
import MessageList from '../containers/MessageList'

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Messages App</h2>
    </div>
    <p className="App-intro">
      A simple messages app implemented with react and redux.
    </p>
    <div className="App-body">
      <AddMessage />
      <MessageList />
    </div>
  </div>
)

export default App