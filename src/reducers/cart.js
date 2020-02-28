import { handleActions } from 'redux-actions';
import * as actions from '../actions';

export const cart = handleActions({
  [actions.cartAddItem]: (state, { payload: { item } }) => {
    const newItem = {
      ...item,
      count: 1,
      cost: item.price,
    };

    return {
      items: { ...state.items, [item.id]: newItem },
      totalCount: state.totalCount + newItem.count,
      totalCost: state.totalCost + newItem.cost,
    };
  },
  [actions.cartRemoveItem]: (state, { payload: { id } }) => {
    const { [id]: removedItem, ...restItems } = state.items;

    return {
      items: restItems,
      totalCount: state.totalCount - removedItem.count,
      totalCost: state.totalCost - removedItem.cost,
    };
  },
  [actions.cartRemoveAllItems]: () => {
    return { items: [], totalCount: 0, totalCost: 0 };
  },
  [actions.cartItemCountInc]: (state, { payload: { id } }) => {
    const item = state.items[id];
    const { count, cost, price } = item;
    const updatedItem = {
      ...item,
      count: count + 1,
      cost: cost + price,
    };

    return {
      items: { ...state.items, [id]: updatedItem },
      totalCount: state.totalCount + 1,
      totalCost: state.totalCost + price,
    };
  },
  [actions.cartItemCountDec]: (state, { payload: { id } }) => {
    const item = state.items[id];
    const { count, cost, price } = item;
    const updatedItem = {
      ...item,
      count: count - 1,
      cost: cost - price,
    };

    return {
      items: { ...state.items, [id]: updatedItem },
      totalCount: state.totalCount - 1,
      totalCost: state.totalCost - price,
    };
  },
}, { items: {}, totalCount: 0, totalCost: 0 });
