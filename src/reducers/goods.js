import { handleActions } from 'redux-actions';
import * as actions from '../actions';

export const goodsFetchingState = handleActions({
  [actions.fetchGoodsRequest]: () => 'requested',
  [actions.fetchGoodsSuccess]: () => 'finished',
  [actions.fetchGoodsFailure]: () => 'failed',
}, '');

const sortOrder = {
  'asc': (a, b) => a > b ? 1 : -1,
  'desc': (a, b) => a < b ? 1 : -1,
};

const sortItems = (items, field, order) => [...items].sort((a, b) => sortOrder[order](a[field], b[field]));

const goodsIinitialState = {
  primaryGoods: [],
  processedGoods: [],
  sortingState: {
    field: null,
    order: null,
  },
  searchText: '',
};

export const goods = handleActions({
  [actions.fetchGoodsSuccess]: (state, { payload: { goods } }) => {
    return {
      ...state,
      primaryGoods: [...goods],
      processedGoods: [...goods],
    };
  },
  [actions.sortGoods]: (state, { payload: { field, order } }) => {
    const { processedGoods } = state;
    return {
      ...state,
      sortingState: { field, order },
      processedGoods: sortItems(processedGoods, field, order),
    };
  },
  [actions.searchGoods]: (state, { payload: { text } }) => {
    const { sortingState: { field, order }, primaryGoods } = state;
    const filteredGoods = primaryGoods.filter(({ name }) => name.trim().toLowerCase().includes(text.toLowerCase()));
    const processedGoods = (field === null && order === null) ? filteredGoods : sortItems(filteredGoods, field, order);
    return {
      ...state,
      processedGoods,
      searchText: text,
    };
  },
}, goodsIinitialState);
