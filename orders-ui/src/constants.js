import Api from './services/Api'

export const ORDERS_ADD_ORDER = 'ORDERS/ADD_ORDER'
export const ORDERS_ADD_PRODUCT_COUNT = 'ORDERS/ADD_PRODUCT_COUNT'
export const ORDERS_SUBTRACT_PRODUCT_COUNT = 'ORDERS/SUBTRACT_PRODUCT_COUNT'
export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE'


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
};

export const FETCH_PRODUCTS_BEGIN_ACTION = () => ({
	type: FETCH_PRODUCTS_BEGIN
});

export const FETCH_PRODUCTS_SUCCESS_ACTION = products => ({
	type: FETCH_PRODUCTS_SUCCESS,
	products
});

export const FETCH_PRODUCTS_FAILURE_ACTION = error => ({
	type: FETCH_PRODUCTS_FAILURE,
	error
});

export const FETCH_PRODUCTS_ACTION = () => {
    return dispatch => {
      dispatch(FETCH_PRODUCTS_BEGIN_ACTION());

      return Api.get('products')
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(FETCH_PRODUCTS_SUCCESS_ACTION(json.results));
          return json.results;
        })
        .catch(error => dispatch(FETCH_PRODUCTS_FAILURE_ACTION(error)));
    };
  };

export const FETCH_ORDERS_ACTION = (order = {}) => {
	console.log('Post order', order)
	return (dispatch, order= order) => {
		return Api.post('create', {
			// 1: 2,
			// 123213: 1.
			// 1233: 3
			owner: 1,
			products: [1]
		})
	}
};

// Handle HTTP errors since fetch won't.
export const handleErrors = (response) => {
	if (!response.ok) {
		console.log(response.statusText)
		throw Error(response.statusText);
	}
	return response;
};