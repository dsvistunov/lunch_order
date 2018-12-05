import * as Constants from '../constants'

export const INITIAL_STATE = {
  data: [{
      id: 1,
      title: 'Pivo',
      manufacturer: 'Pivovar',
      price: 100
    }, {
      id: 2,
      title: 'Sigi',
      manufacturer: 'Sigadel',
      price: 300
    }, {
      id: 3,
      title: 'Shava',
      manufacturer: 'Shavamaker',
      price: 50
    }],
    loading: false,
    error: null
}

export default (state = INITIAL_STATE, { type, products = {} } = {}) => {
  switch(type) {
    case 'ADD_PRODUCT': {
      return {
        ...state
      }
    }
    case Constants.FETCH_PRODUCTS_BEGIN: {
      return {
        ...state,
        loading: true,
        error: null
      }
    }
    case Constants.FETCH_PRODUCTS_SUCCESS: {
      const _products = {
        ...state
      }
      _products['data'] = products
      return {
        ..._products,
        loading: false,
      }
    }
    case Constants.FETCH_PRODUCTS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: type.error,
        products: []
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}