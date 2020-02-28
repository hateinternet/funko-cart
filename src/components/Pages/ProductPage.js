import React from 'react';

import Product from '../Product';

const ProductPage = ({ match }) => {
  const { id } = match.params;

  return (
    <Product id={id} />
  );
}

export default ProductPage;
