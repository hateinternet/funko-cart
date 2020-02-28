import React from 'react';

import { ReactComponent as Icon } from '../../assets/icons/spinner.svg';
import './Spinner.css';

const Spinner = () => (
  <div className="spinner">
    <Icon className="spinner__icon" />
  </div>
);

export default Spinner;
