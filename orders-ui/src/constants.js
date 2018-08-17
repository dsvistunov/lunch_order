export const ORDERS_ADD_ORDER = 'ORDERS/ADD_ORDER'
export const ORDERS_ADD_PRODUCT_COUNT = 'ORDERS/ADD_PRODUCT_COUNT'
export const ORDERS_SUBTRACT_PRODUCT_COUNT = 'ORDERS/SUBTRACT_PRODUCT_COUNT'


export const ORDERS_ADD_ORDER_ACTION = (dispatch, product = {}) => {
	dispatch({
		type: ORDERS_ADD_ORDER,
		product
	})
}

export const ORDERS_ADD_PRODUCT_COUNT_ACTION = (dispatch, product = {}) => {
	dispatch({
		type: ORDERS_ADD_ORDER,
		product
	})
}