import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { addMessage } from './actions/index';

const store = createStore(reducer)

store.dispatch(addMessage('Initial Test Message 1000'))
store.dispatch(addMessage('Initial Test Message 1001'))
store.dispatch(addMessage('Initial Test Message 1002'))
store.dispatch(addMessage('Initial Test Message 1003'))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
