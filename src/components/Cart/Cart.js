import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import { ReactComponent as IconMinus } from '../../assets/icons/minus.svg';
import { ReactComponent as IconPlus } from '../../assets/icons/plus.svg';
import { ReactComponent as IconDelete } from '../../assets/icons/delete.svg';
import './Cart.css';

class Cart extends React.Component {

  renderList(items) {
    const { removeItem, countInc, countDec } = this.props;

    const goods = items.map(({ id, name, image, count, cost }) => (
      <li key={id} className="cart__item">
        <div className="cart__item-image-block">
          <img className="cart__item-image" src={image} alt={name}/>
        </div>
        <Link className="cart__item-name" to={`/goods/${id}`}>{name}</Link>
        <div className="cart__item-count-block">
          <button className="cart__item-count-button" disabled={count <= 1} onClick={() => countDec({id})}>
            <IconMinus />
          </button>
          <div className="cart__item-count-value">{count}</div>
          <button className="cart__item-count-button" onClick={() => countInc({id})}>
            <IconPlus />
          </button>
        </div>
        <div className="cart__item-cost">${cost}</div>
        <div className="cart__item-buttons">
          <button className="cart__item-button-remove" onClick={() => removeItem({id})}>
            <IconDelete />
          </button>
        </div>
      </li>
    ));

    return (
      <ul className="cart__list">
        { goods }
      </ul>
    );
  }

  render() {
    const { items } = this.props;

    if (items.length === 0) {
      return (
        <div className="cart">
          <h1 className="cart__title">Cart</h1>
          <div className="cart__empty">
            <div className="cart__empty-text">Your cart is empty.</div>
            <div className="cart__empty-text">Look at <Link className="cart__empty-link" to="/">our products</Link>!</div>
          </div>
        </div>
      );
    }

    const itemsList = this.renderList(items);
    const { totalCount, totalCost, removeAllItems } = this.props;

    return (
      <div className="cart">
        <h1 className="cart__title">Cart</h1>
        <button className="cart__button-remove-all" onClick={removeAllItems}>Remove all</button>
        { itemsList }
        <div className="cart__summary">
          <div className="cart__summary-total">
            <span className="cart__summary-total-text">Total:</span>
            <span className="cart__summary-total-value">${totalCost}</span>
          </div>
          <div className="cart__summary-total">
            <span className="cart__summary-total-text">Count:</span>
            <span className="cart__summary-total-value">{totalCount}</span>
          </div>
          <button className="cart__summary-checkout">Checkout</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ cart: { items, totalCount, totalCost } }) => ({
  items: Object.values(items),
  totalCount,
  totalCost,
});

const actionCreators = {
  removeItem: actions.cartRemoveItem,
  removeAllItems: actions.cartRemoveAllItems,
  countInc: actions.cartItemCountInc,
  countDec: actions.cartItemCountDec,
};

export default connect(mapStateToProps, actionCreators)(Cart);
