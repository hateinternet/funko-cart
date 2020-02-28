import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from '../Header';
import Footer from '../Footer';
import {
  MainPage,
  ProductPage,
  CartPage,
  NotFoundPage,
} from '../Pages';

const App = () => (
  <div className="app">
    <Header />
    <main className="app__main">
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/goods/:id" component={ProductPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </main>
    <Footer />
  </div>
);

export default App;
