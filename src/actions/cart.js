import { createAction } from 'redux-actions';

export const cartAddItem = createAction('CART_ITEM_ADD');
export const cartRemoveItem = createAction('CART_ITEM_REMOVE');
export const cartRemoveAllItems = createAction('CART_ITEMS_REMOVE');
export const cartItemCountInc = createAction('CART_ITEM_INC');
export const cartItemCountDec = createAction('CART_ITEM_DEC');
