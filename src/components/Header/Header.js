import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as IconCart } from '../../assets/icons/cart.svg';
import logo from '../../assets/images/logo.png';
import './Header.css';

const Header = ({ totalCount }) => (
  <header className="header">
    <div className="header__content">
      <Link className="header__logo-link" to="/">
        <img className="header__logo-img" src={logo} alt="Pop logo" />
      </Link>
      <Link className="header__cart-link" to="/cart">
        <IconCart />
        <div className="header__cart-counter">
          <span>{totalCount}</span>
        </div>
      </Link>
    </div>
  </header>
);

const mapStateToProps = ({ cart: { totalCount } }) => ({ totalCount });

export default connect(mapStateToProps)(Header);
