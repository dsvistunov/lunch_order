import * as Constants from '../constants'

export const INITIAL_STATE = {}

export default (state, { type, product = {} } = {}) => {
	switch(type) {
		case Constants.ORDERS_ADD_ORDER: {
			const orders = {
				...state
			}

			const {
		      id: productId
		    } = product

		    if (!orders[productId]) {
		      orders[productId] = {
		        ...product,
            count: 1
		      }
		    } else {
		      orders[productId].count += 1 
			}

			return {
				...orders
			}
		}
		case Constants.ORDERS_ADD_PRODUCT_COUNT: {
			const orders = {
				...state
			}

			const {
				id: productId
			} = product

			if (true) {
				orders[productId].count += 1
			}

			return {
				...orders
			}
		}
		case Constants.ORDERS_SUBTRACT_PRODUCT_COUNT: {
			const orders = {
				...state
			}

			const {
				id: productId
			} = product

			if (orders[productId].count > 1) {
				orders[productId].count -= 1
			} else {
				delete orders[productId]
			}

			return {
				...orders
			}
		}
		default: {
			return {
				...state
			}
		}
	}
}