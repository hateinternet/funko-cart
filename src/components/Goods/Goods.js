import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import ProductButtons from '../ProductButtons';
import SearchRow from '../SearchRow';
import Spinner from '../Spinner';
import './Goods.css';

class Goods extends React.Component {
  addToCart(product) {
    const { cartAddItem } = this.props;
    cartAddItem({ item: product });
  }

  addMore(id) {
    const { cartAddMore } = this.props;
    cartAddMore({ id });
  }

  renderGoodsList() {
    const { goods, cartItems } = this.props;

    const items = goods.map((product) => {
      const isInCart = cartItems[product.id] !== undefined;

      return (
        <li key={product.id} className="goods__item">
          <Link className="goods__item-link" to={`goods/${product.id}`}>
            <div className="goods__item-image-block">
              <img className="goods__item-image" src={product.image} alt={product.name} />
            </div>
            <div className="goods__item-details-block">
              <div className="goods__item-name">{product.name}</div>
              <div className="goods__item-price">${product.price}</div>
            </div>
          </Link>
          <div className="goods__item-buttons">
            <ProductButtons
              addToCart={() => this.addToCart(product)}
              addMore={() => this.addMore(product.id)}
              isInCart={isInCart}
            />
          </div>
        </li>
      );
    });

    return (
      <ul className="goods__list">
        { items }
      </ul>
    );
  }

  render() {
    const { goodsState } = this.props;

    if ( goodsState === 'requested' ) {
      return <Spinner />;
    }

    const goodsList = this.renderGoodsList();

    return (
      <div className="goods">
        <SearchRow />
        { goodsList }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  goods: state.goods.processedGoods,
  goodsState: state.goodsFetchingState,
  cartItems: state.cart.items,
});

const actionCreators = {
  cartAddItem: actions.cartAddItem,
  cartAddMore: actions.cartItemCountInc,
};

export default connect(mapStateToProps, actionCreators)(Goods);
