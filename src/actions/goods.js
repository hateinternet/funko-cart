import axios from 'axios';
import { createAction } from 'redux-actions';

import routes from '../routes';

export const fetchGoodsRequest = createAction('GOODS_FETCH_REQUEST');
export const fetchGoodsSuccess = createAction('GOODS_FETCH_SUCCESS');
export const fetchGoodsFailure = createAction('GOODS_FETCH_FAILURE');

export const fetchGoods = () => async (dispatch) => {
  dispatch(fetchGoodsRequest());
  try {
    const url = routes.goodsUrl();
    const response = await axios.get(url);
    dispatch(fetchGoodsSuccess({ goods: response.data}));
  } catch (e) {
    dispatch(fetchGoodsFailure());
    throw e;
  }
};

export const sortGoods = createAction('GOODS_SORT');
export const searchGoods = createAction('GOODS_SEARCH');
