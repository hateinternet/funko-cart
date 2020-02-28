import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.css';

const NotFound = () => (
  <div className="not-found">
    <h1 className="not-found__title">404</h1>
    <div className="not-found__content">
      <div className="not-found__text">This page not found.</div>
      <div className="not-found__text">Go to <Link className="not-found__link" to="/">main page</Link></div>
    </div>
  </div>
);

export default NotFound;
