import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import routes from '../../routes';
import * as actions from '../../actions';
import ProductButtons from '../ProductButtons';
import Spinner from '../Spinner';
import './Product.css';

class Product extends React.Component {
  state = {
    product: null,
    status: 'requested',
  };

  componentDidMount() {
    const { id } = this.props;
    const url = routes.productUrl(id);
    axios.get(url)
      .then(res => this.setState({ product: res.data, status: 'finished' }))
      .catch(e => {
        this.setState({ status: 'failed' });
        throw e;
      });
  }

  addToCart(product) {
    const { cartAddItem } = this.props;
    cartAddItem({ item: product });
  }

  addMore(id) {
    const { cartAddMore } = this.props;
    cartAddMore({ id });
  }

  renderProduct() {
    const { product } = this.state;
    const { cartItems } = this.props;

    const isInCart = cartItems[product.id] !== undefined;

    return (
      <div className="product">
        <div className="product__image-block">
          <img className="product__image" src={product.image} alt={product.name} />
        </div>
        <h1 className="product__title">{product.name}</h1>
        <div className="product__details-block">
          <div className="product__price">${product.price}</div>
          <div className="product__details-item">
            <span className="product__details-name">Item Number:</span>
            <span className="product__details-value">{product.id}</span>
          </div>
          <div className="product__details-item">
            <span className="product__details-name">Collection:</span>
            <span className="product__details-value">{product.collection}</span>
          </div>
          <div className="product__details-item">
            <span className="product__details-name">Category:</span>
            <span className="product__details-value">{product.category}</span>
          </div>
        </div>
        <div className="product__buttons-block">
          <ProductButtons
            addToCart={() => this.addToCart(product)}
            addMore={() => this.addMore(product.id)}
            isInCart={isInCart}
          />
        </div>
      </div>
    );
  }

  render() {
    const { status } = this.state;

    if (status === 'requested') {
      return <Spinner />;
    }

    return this.renderProduct();
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});

const actionCreators = {
  cartAddItem: actions.cartAddItem,
  cartAddMore: actions.cartItemCountInc,
};

export default connect(mapStateToProps, actionCreators)(Product);
