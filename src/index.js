import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import reducers from './reducers';
import { fetchGoods } from './actions';
import 'normalize.css';
import './index.css';
import App from './components/App';

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

store.dispatch(fetchGoods());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
