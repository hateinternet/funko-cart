import React from 'react';
import { Link } from 'react-router-dom';

import './ProductButtons.css';

const ProductButtons = ({ addToCart, addMore, isInCart }) => {
  const buttonAdd = <button className="product-buttons__button-add" onClick={addToCart}>Add to cart</button>;
  const linkGoCart = (
    <>
      <Link className="product-buttons__goto-cart" to="/cart">Go to cart</Link>
      <button className="product-buttons__button-add-more" onClick={addMore}>+1</button>
    </>
  );

  return (
    <div className="product-buttons">
      { isInCart ? linkGoCart : buttonAdd }
    </div>
  );
}

export default ProductButtons;
